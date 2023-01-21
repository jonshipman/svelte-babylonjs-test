<script lang="ts">
	import { onMount } from 'svelte';

	import { Game, Scene, Camera, Light, Box } from '../game/game.js';

	let element: HTMLCanvasElement;

	onMount(() => {
		const game = new Game(element);
		const scene = new Scene(game.engine).scene;

		const camera = new Camera();
		camera.setTarget(0, 0, -7);
		game.Camera(camera.AddTo(scene));

		const light = new Light();
		light.setTarget(0, 0, -7);
		light.AddTo(scene);

		const box = new Box().BuildOn(scene);
		box.rotation.x = 2;
		box.rotation.y = 3;

		game.SwitchScene(scene);
		game.Render();

		return () => {
			game.Destroy();
		};
	});
</script>

<canvas class="db center w-100 vh-100" bind:this={element} />
