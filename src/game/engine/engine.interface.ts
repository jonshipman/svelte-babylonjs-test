import type * as BABYLON from 'babylonjs';

import type { Scene } from '../scene/scene.js';

type Listeners = {
	[key in keyof WindowEventMap]: (event: Event | undefined) => void;
};

export interface EngineInterface {
	scene: Scene | undefined;
	canvas: HTMLCanvasElement;
	engine: BABYLON.Engine;
	listeners: Listeners | object;
	camera: BABYLON.TargetCamera | undefined;
	debounceResize?: NodeJS.Timeout;
	mounted: boolean;
}
