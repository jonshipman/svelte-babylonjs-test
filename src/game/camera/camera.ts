import {
	AnaglyphArcRotateCamera,
	AnaglyphUniversalCamera,
	ArcRotateCamera,
	DeviceOrientationCamera,
	FollowCamera,
	FreeCamera,
	Scene as BScene,
	TargetCamera,
	UniversalCamera
} from '@babylonjs/core';

import { Vector3 } from '../vector3/vector3.js';
import type {
	CameraInterface,
	CAMERAS
} from './camera.interface.js';

export class Camera extends Vector3 implements CameraInterface {
	name = 'camera';
	camera: TargetCamera | undefined;
	type: keyof typeof CAMERAS;
	alpha = 0;
	beta = 0;
	radius = 0;
	eyeSpace = 0;

	constructor(type: keyof typeof CAMERAS = 'FreeCamera') {
		super();

		this.type = type;
	}

	setABR(a = 0, b = 0, r = 0) {
		this.alpha = a;
		this.beta = b;
		this.radius = r;
	}

	AddTo(scene: BScene) {
		switch (this.type) {
			case 'DeviceOrientationCamera':
				this.camera = new DeviceOrientationCamera(this.name, this.target, scene);
				break;
			case 'UniversalCamera':
				this.camera = new UniversalCamera(this.name, this.target, scene);
				break;
			case 'FollowCamera':
				this.camera = new FollowCamera(this.name, this.target, scene);
				break;
			case 'FreeCamera':
				this.camera = new FreeCamera(this.name, this.target, scene);
				break;
			case 'ArcRotateCamera':
				this.camera = new ArcRotateCamera(
					this.name,
					this.alpha,
					this.beta,
					this.radius,
					this.target,
					scene
				);
				break;
			case 'AnaglyphUniversalCamera':
				this.camera = new AnaglyphUniversalCamera(this.name, this.target, this.eyeSpace, scene);
				break;
			case 'AnaglyphArcRotateCamera':
				this.camera = new AnaglyphArcRotateCamera(
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

		this.camera.attachControl(true);

		return this.camera as TargetCamera;
	}
}
