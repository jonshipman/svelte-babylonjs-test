import * as BABYLON from 'babylonjs';

import { Vector3 } from '../vector3/vector3.js';
import type { CameraInterface, CameraType } from './camera.interface.js';

export class Camera extends Vector3 implements CameraInterface {
	name = 'camera';
	camera: BABYLON.TargetCamera | undefined;
	type: keyof typeof BABYLON;
	alpha = 0;
	beta = 0;
	radius = 0;
	eyeSpace = 0;

	constructor(type: keyof typeof BABYLON = 'FreeCamera') {
		super();

		this.type = type;
	}

	setABR(a = 0, b = 0, r = 0) {
		this.alpha = a;
		this.beta = b;
		this.radius = r;
	}

	AddTo(scene: BABYLON.Scene) {
		const CameraClass = BABYLON[this.type] as CameraType;

		switch (this.type) {
			case 'DeviceOrientationCamera':
			case 'UniversalCamera':
			case 'FollowCamera':
			case 'FreeCamera':
				this.camera = new CameraClass(this.name, this.target, scene);
				break;
			case 'ArcRotateCamera':
				this.camera = new BABYLON.ArcRotateCamera(
					this.name,
					this.alpha,
					this.beta,
					this.radius,
					this.target,
					scene
				);
				break;
			case 'AnaglyphUniversalCamera':
				this.camera = new BABYLON.AnaglyphUniversalCamera(
					this.name,
					this.target,
					this.eyeSpace,
					scene
				);
				break;
			case 'AnaglyphArcRotateCamera':
				this.camera = new BABYLON.AnaglyphArcRotateCamera(
					this.name,
					this.alpha,
					this.beta,
					this.radius,
					this.target,
					this.eyeSpace,
					scene
				);
				break;
			default:
				throw new Error('Incompatible Camera');
		}

		return this.camera as BABYLON.TargetCamera;
	}
}
