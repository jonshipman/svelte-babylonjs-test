<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from '../scene/scene.js';

	let element: HTMLCanvasElement;

	onMount(() => {
		createScene(element);
	});
</script>

<canvas class="center" bind:this={element} />

<style>
	canvas {
		display: block;
		width: 640px;
		height: 480px;
	}
</style>
