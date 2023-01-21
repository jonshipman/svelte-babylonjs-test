import * as BABYLON from 'babylonjs';

import { Light } from '../light/light.js';
import { Box } from '../box/box.js';
import type { Engine } from '../engine/engine.js';
import type { SceneInterface } from './scene.interface.js';
import { Camera } from '../camera/camera.js';

export class Scene implements SceneInterface {
	engine: BABYLON.Engine;
	scene: BABYLON.Scene;

	constructor(engine: Engine) {
		this.engine = engine.engine;
		this.scene = new BABYLON.Scene(engine.engine);
	}

	async Main() {
		const camera = new Camera('ArcRotateCamera');
		camera.setABR(Math.PI / 2, Math.PI / 2, 2);
		camera.AddTo(this.scene);

		const light = new Light('HemisphericLight');
		light.setTarget(1, 1, 0);
		light.AddTo(this.scene);

		const box = new Box();
		box.setPosition(0, 0, -20);
		box.setRotation(2, 3);
		box.BuildOn(this.scene);

		await this.scene.whenReadyAsync();
	}

	DetachControl() {
		this.scene.detachControl();
	}

	Dispose() {
		this.scene.dispose();
	}

	Render() {
		this.scene.render();
	}
}
