import type { Engine as BEngine, TargetCamera } from '@babylonjs/core';

import type { Scene } from '../scene/scene.js';

type Listeners = {
	[key in keyof WindowEventMap]: (event: Event | undefined) => void;
};

export interface EngineInterface {
	scene: Scene | undefined;
	canvas: HTMLCanvasElement;
	engine: BEngine;
	listeners: Listeners | object;
	camera: TargetCamera | undefined;
	debounceResize?: NodeJS.Timeout;
	mounted: boolean;
}
