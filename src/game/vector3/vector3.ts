import { Vector3 as BVector3 } from '@babylonjs/core';

import type { Vector3DirectionInterface, Vector3Interface } from './vector3.interface.js';

export class Vector3 implements Vector3Interface {
	target = BVector3.Zero();

	setTarget(x = 0, y = 0, z = 0) {
		this.target = new BVector3(x, y, z);
	}
}

export class Vector3Direction extends Vector3 implements Vector3DirectionInterface {
	direction = BVector3.Zero();

	setDirection(x = 0, y = 0, z = 0) {
		this.direction = new BVector3(x, y, z);
	}
}
