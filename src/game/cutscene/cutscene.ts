import { Color4 } from '@babylonjs/core';
import { AdvancedDynamicTexture } from '@babylonjs/gui';

import { Camera } from '../camera/camera.js';
import { Scene } from '../scene/scene.js';

export class Cutscene extends Scene {
	async Main() {
		const camera = new Camera('FreeCamera');
		camera.name = 'cutscene';
		camera.setABR(Math.PI / 2, Math.PI / 2, 2);
		camera.AddTo(this.scene);
		this.camera = camera.GetCamera();

		this.scene.clearColor = new Color4(0, 0, 0, 1);

		const gui = AdvancedDynamicTexture.CreateFullscreenUI('cutscene');

		await this.scene.whenReadyAsync();

		return this;
	}
}
