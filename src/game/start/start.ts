import * as BABYLON from '@babylonjs/core';
import { AdvancedDynamicTexture, Button, Control, Image, Rectangle } from '@babylonjs/gui';

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
		soundBg.setVolume(0.005);
		soundBg.setLoop(true);
		soundBg.setAutoplay(true);
		soundBg.AddTo(this.scene);

		const soundSelect = new Sound('/sounds/select.mp3');
		soundSelect.setVolume(0.75);
		soundSelect.AddTo(this.scene);

		const guiMenu = AdvancedDynamicTexture.CreateFullscreenUI('startmenu');
		guiMenu.idealHeight = 720;

		const imageRect = new Rectangle('titleContainer');
		imageRect.width = 0.8;
		imageRect.thickness = 0;
		guiMenu.addControl(imageRect);

		const startbg = new Image('startbg', '/sprites/start.png');
		imageRect.addControl(startbg);

		const startBtn = Button.CreateSimpleButton('start', 'PLAY');
		startBtn.width = 0.2;
		startBtn.cornerRadius = 10;
		startBtn.height = '40px';
		startBtn.background = 'black';
		startBtn.color = 'white';
		startBtn.hoverCursor = 'pointer';
		startBtn.thickness = 0;
		startBtn.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
		guiMenu.addControl(startBtn);

		startBtn.onPointerDownObservable.add(() => {
			soundSelect.Play();
		});

		await this.scene.whenReadyAsync();
	}
}
