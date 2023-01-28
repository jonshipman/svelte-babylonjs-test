import { Animation } from '../animation/animation.js';
import { Camera } from '../camera/camera.js';
import { Light } from '../light/light.js';
import { Scene } from '../scene/scene.js';

export class Cutscene extends Scene {
	async Main() {
		const camera = new Camera('ArcRotateCamera');
		camera.name = 'cutscene';
		camera.setABR(-Math.PI / 2, Math.PI / 2, 8);
		camera.Add();
		this.camera = camera.GetCamera();

		const light = new Light('PointLight');
		light.setDirection(5, 10, 5);
		light.Add();

		const waterpipe = new Animation('/sprites/map/tutorial.png', '/sprites/map/tutorial.json');
		waterpipe.Render();

		await this.scene.whenReadyAsync();

		return this;
	}
}
