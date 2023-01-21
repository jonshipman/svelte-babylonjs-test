<script lang="ts">
	import { onMount } from 'svelte';

	import { Game } from '../game/game.js';

	let element: HTMLCanvasElement;

	onMount(() => {
		const game = new Game(element);

		return () => {
			game.Destroy();
		};
	});
</script>

<canvas class="db center w-100 vh-100" bind:this={element} />
