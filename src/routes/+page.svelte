<script lang="ts">
	import { onMount } from 'svelte';

	import { Game, Scene, Camera, Light, Box, Sphere } from '../game/game.js';

	let element: HTMLCanvasElement;

	onMount(() => {
		const game = new Game(element);
		const scene = new Scene(game.engine).scene;

		const camera = new Camera('ArcRotateCamera');
		camera.setABR(Math.PI / 2, Math.PI / 2, 2);
		game.Camera(camera.AddTo(scene));

		const light = new Light('HemisphericLight');
		light.setTarget(1, 1, 0);
		light.AddTo(scene);

		const box = new Box();
		box.setPosition(0, 0, -20);
		box.setRotation(2, 3);
		box.BuildOn(scene);

		const sphere = new Sphere();
		sphere.setPosition(1, 1, -15);
		sphere.setRotation(2, 3);
		sphere.BuildOn(scene);

		game.SwitchScene(scene);
		game.Render();

		return () => {
			game.Destroy();
		};
	});
</script>

<canvas class="db center w-100 vh-100" bind:this={element} />
