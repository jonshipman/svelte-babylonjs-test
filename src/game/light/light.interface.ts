import type * as BABYLON from 'babylonjs';

import type { Vector3DirectionInterface } from '../vector3/vector3.interface.js';

export type LightType =
	| {
			new (): BABYLON.SpotLight;
	  }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.PointLight }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.HemisphericLight }
	| { new (n: string, t: BABYLON.Vector3, s: BABYLON.Scene): BABYLON.DirectionalLight };

export interface LightInterface extends Vector3DirectionInterface {
	light: BABYLON.Light | undefined;
	name: string;
	type: keyof typeof BABYLON;
	angle: number;
	exponent: number;
}
