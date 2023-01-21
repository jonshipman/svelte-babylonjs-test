import * as BABYLON from 'babylonjs';
import type { SceneInterface } from './scene.interface.js';

export class Scene implements SceneInterface {
	scene: BABYLON.Scene;

	constructor(engine: BABYLON.Engine) {
		this.scene = new BABYLON.Scene(engine);
	}
}
