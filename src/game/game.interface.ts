import type * as BABYLON from 'babylonjs';

type Listeners = {
	[key in keyof WindowEventMap]: (event: Event | undefined) => void;
};

export interface GameInterface {
	scene: BABYLON.Scene | undefined;
	canvas: HTMLCanvasElement;
	engine: BABYLON.Engine;
	listeners: Listeners | object;
	camera: BABYLON.TargetCamera | undefined;
	debounceResize?: NodeJS.Timeout;
	mounted: boolean;
}
