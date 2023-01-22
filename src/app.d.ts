import type { Engine, Scene } from '@babylonjs/core';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {}

	interface Window {
		_SCENE: Nullable<Scene>;
		_CANVAS: HTMLCanvasElement;
		_ENGINE: Nullable<Engine>;
	}

	type Nullable<T> = T | null;
}
