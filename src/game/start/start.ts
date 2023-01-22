import { Color4 } from '@babylonjs/core';
import { AdvancedDynamicTexture } from '@babylonjs/gui';

import { Button } from '../button/button.js';
import { Camera } from '../camera/camera.js';
import { Image } from '../image/image.js';
import { Light } from '../light/light.js';
import { Rectangle } from '../rectangle/rectangle.js';
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

		this.scene.clearColor = new Color4(0, 0, 0, 1);

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

		const imageRect = new Rectangle('titleContainer').Render(guiMenu).GetRectangle();

		new Image('startbg', '/sprites/start.png').Render(imageRect);

		const startBtn = new Button('start', 'PLAY').Render(imageRect);

		startBtn.onPointerDownObservable.add(() => {
			soundSelect.Play();
		});

		await this.scene.whenReadyAsync();
	}
}
