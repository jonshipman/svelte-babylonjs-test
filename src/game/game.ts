import * as BABYLON from 'babylonjs';

import type { GameInterface } from './game.interface.js';

export class Game implements GameInterface {
	scene: BABYLON.Scene | undefined;
	canvas: HTMLCanvasElement;
	engine: BABYLON.Engine;
	camera: BABYLON.TargetCamera | undefined;
	listeners;
	debounceResize?: NodeJS.Timeout;
	mounted = false;

	constructor(element: HTMLCanvasElement) {
		this.canvas = element;
		this.engine = new BABYLON.Engine(element, true);

		this.listeners = {
			resize: () => {
				clearTimeout(this.debounceResize);

				this.debounceResize = setTimeout(() => {
					if (this.mounted) {
						this.engine.resize();
					}
				}, 100);
			}
		};
	}

	Camera(camera: BABYLON.TargetCamera) {
		camera.attachControl(this.canvas, true);
	}

	SwitchScene(scene: BABYLON.Scene) {
		if (this.scene) {
			this.scene.dispose();
			this.scene = undefined;
		}

		this.scene = scene;
	}

	Destroy() {
		this.mounted = false;
		for (const [k, v] of Object.entries(this.listeners)) {
			window.removeEventListener(k, <(event: Event) => void>v);
		}
	}

	Render() {
		this.mounted = true;

		for (const [k, v] of Object.entries(this.listeners)) {
			window.addEventListener(k, <(event: Event) => void>v);
		}

		this.engine.runRenderLoop(() => {
			if (!this.scene) {
				throw new Error('There is no scene!');
			}

			this.scene.render();
		});
	}
}

export * from './scene/scene.js';
export * from './camera/camera.js';
export * from './light/light.js';
export * from './box/box.js';
export * from './sphere/sphere.js';
