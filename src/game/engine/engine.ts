import { Engine as BEngine, Scene as BScene, TargetCamera } from '@babylonjs/core';

import { Scene } from '../scene/scene.js';
import type { EngineInterface } from './engine.interface.js';

export class Engine implements EngineInterface {
	scene?: Scene;
	canvas: HTMLCanvasElement;
	engine: BEngine;
	camera?: TargetCamera;
	listeners;
	debounceResize?: NodeJS.Timeout;
	mounted = false;

	constructor(element: HTMLCanvasElement) {
		this.canvas = element;
		this.engine = new BEngine(element, true);
		window._CANVAS = element;
		window._ENGINE = this.GetEngine();

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

	async SwitchScene(scene?: Scene) {
		if (!scene) {
			scene = new Scene(this);
		}

		const Done = this.Loading();
		const previousScene = this.scene;

		if (previousScene) {
			previousScene.DetachControl();
		}

		this.scene = scene;
		window._SCENE = this.GetScene();

		await this.scene.Main();

		Done();

		if (previousScene) {
			previousScene.Dispose();
		}

		this.camera = scene.GetCamera();
	}

	GetScene() {
		if (!this.scene) {
			throw new Error('No scene implemented. Run `SwitchScene` before `GetScene`');
		}

		return this.scene.GetScene() as BScene;
	}

	GetEngine() {
		if (!this.engine) {
			throw new Error('No engine implemented.');
		}

		return this.engine as BEngine;
	}

	Loading() {
		this.engine.displayLoadingUI();

		return () => {
			this.engine.hideLoadingUI();
		};
	}

	Destroy() {
		this.mounted = false;
		for (const [k, v] of Object.entries(this.listeners)) {
			window.removeEventListener(k, <(event: Event) => void>v);
		}

		window._ENGINE = null;
	}

	Render(callback: (() => void) | undefined = undefined) {
		this.mounted = true;

		for (const [k, v] of Object.entries(this.listeners)) {
			window.addEventListener(k, <(event: Event) => void>v);
		}

		this.engine.runRenderLoop(() => {
			if (!this.scene) {
				throw new Error('There is no scene!');
			}

			if (callback) {
				callback();
			}

			this.scene.Render();
		});

		return this;
	}
}
