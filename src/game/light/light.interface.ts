import type { Light as BLight } from '@babylonjs/core';

import type { Vector3DirectionInterface } from '../vector3/vector3.interface.js';

export enum LIGHTS {
	PointLight = 0,
	DirectionalLight = 1,
	HemisphericLight = 2,
	SpotLight = 3
}

export interface LightInterface extends Vector3DirectionInterface {
	light: BLight | undefined;
	name: string;
	type: keyof typeof LIGHTS;
	angle: number;
	exponent: number;
}
