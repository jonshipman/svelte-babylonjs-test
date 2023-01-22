import type * as BABYLON from '@babylonjs/core';

import type { Vector3Interface } from '../vector3/vector3.interface.js';

export type CameraType =
	| {
			new (): BABYLON.ArcRotateCamera;
	  }
	| {
			new (): BABYLON.AnaglyphUniversalCamera;
	  }
	| {
			new (): BABYLON.AnaglyphArcRotateCamera;
	  }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.DeviceOrientationCamera }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.UniversalCamera }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.FollowCamera }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.FreeCamera };

export interface CameraInterface extends Vector3Interface {
	camera: BABYLON.TargetCamera | undefined;
	name: string;
	type: keyof typeof BABYLON;
	alpha: number;
	beta: number;
	radius: number;
	eyeSpace: number;
}
