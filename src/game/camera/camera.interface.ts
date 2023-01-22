import type { TargetCamera } from '@babylonjs/core';

import type { Vector3Interface } from '../vector3/vector3.interface.js';

export enum CAMERAS {
	ArcRotateCamera = 0,
	AnaglyphUniversalCamera = 1,
	AnaglyphArcRotateCamera = 2,
	DeviceOrientationCamera = 3,
	UniversalCamera = 4,
	FollowCamera = 5,
	FreeCamera = 6
}

export interface CameraInterface extends Vector3Interface {
	camera: TargetCamera | undefined;
	name: string;
	type: keyof typeof CAMERAS;
	alpha: number;
	beta: number;
	radius: number;
	eyeSpace: number;
}
