import { Engine as BEngine, Scene as BScene, TargetCamera } from '@babylonjs/core';

import { Box } from '../box/box.js';
import { Camera } from '../camera/camera.js';
import type { Engine } from '../engine/engine.js';
import { Light } from '../light/light.js';
import type { SceneInterface } from './scene.interface.js';

export class Scene implements SceneInterface {
	engine: BEngine;
	scene: BScene;
	camera: TargetCamera | undefined = undefined;

	constructor(engine: Engine) {
		this.engine = engine.GetEngine();
		this.scene = new BScene(this.engine);
	}

	/**
	 * Meant to be overridden in child classes.
	 */
	async Main() {
		const camera = new Camera('ArcRotateCamera');
		camera.setABR(Math.PI / 2, Math.PI / 2, 2);
		camera.AddTo(this.scene);
		this.camera = camera.GetCamera();

		const light = new Light('HemisphericLight');
		light.setTarget(1, 1, 0);
		light.AddTo(this.scene);

		const box = new Box();
		box.setPosition(0, 0, -20);
		box.setRotation(2, 3);
		box.BuildOn(this.scene);

		await this.scene.whenReadyAsync();

		return this;
	}

	GetCamera() {
		return this.camera as TargetCamera;
	}

	GetScene() {
		return this.scene;
	}

	DetachControl() {
		this.scene.detachControl();
	}

	Dispose() {
		this.scene.dispose();
		window._SCENE = null;
	}

	Render() {
		this.scene.render();
	}
}
