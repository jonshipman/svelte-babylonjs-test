<script lang="ts">
	import { onMount } from 'svelte';
	import { Render3D } from '../scene/scene.js';

	let element: HTMLCanvasElement;

	onMount(() => {
		Render3D(element);
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
