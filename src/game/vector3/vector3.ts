import * as BABYLON from 'babylonjs';
import type { Vector3Interface, Vector3DirectionInterface } from './vector3.interface.js';

export class Vector3 implements Vector3Interface {
	target = BABYLON.Vector3.Zero();

	setTarget(x = 0, y = 0, z = 0) {
		this.target = new BABYLON.Vector3(x, y, z);
	}
}

export class Vector3Direction extends Vector3 implements Vector3DirectionInterface {
	direction = BABYLON.Vector3.Zero();

	setDirection(x = 0, y = 0, z = 0) {
		this.direction = new BABYLON.Vector3(x, y, z);
	}
}
