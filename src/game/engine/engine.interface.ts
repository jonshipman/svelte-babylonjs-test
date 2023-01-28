import type { Engine as BEngine, TargetCamera } from '@babylonjs/core';

import type { Scene } from '../scene/scene.js';

type Listeners = {
	[key in keyof WindowEventMap]: (event: Event | undefined) => void;
};

export interface EngineInterface {
	scene?: Scene;
	canvas: HTMLCanvasElement;
	engine: BEngine;
	listeners: Listeners | object;
	camera?: TargetCamera;
	debounceResize?: NodeJS.Timeout;
	mounted: boolean;
}
