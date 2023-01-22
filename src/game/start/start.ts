import * as BABYLON from '@babylonjs/core';

import { Camera } from '../camera/camera.js';
import { Light } from '../light/light.js';
import { Scene } from '../scene/scene.js';
import { Sound } from '../sound/sound.js';

export class Start extends Scene {
	async Main() {
		const camera = new Camera('ArcRotateCamera');
		camera.setABR(Math.PI / 2, Math.PI / 2, 2);
		camera.AddTo(this.scene);

		const light = new Light('HemisphericLight');
		light.setTarget(1, 1, 0);
		light.AddTo(this.scene);

		this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

		const soundBg = new Sound('/sounds/start.mp3');
		soundBg.setVolume(0.01);
		soundBg.setLoop(true);
		soundBg.setAutoplay(true);
		soundBg.AddTo(this.scene);

		const soundSelect = new Sound('/sounds/select.mp3');
		soundSelect.setVolume(0.75);
		soundSelect.AddTo(this.scene);

		await this.scene.whenReadyAsync();
	}
}
