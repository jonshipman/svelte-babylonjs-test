import type { Vector3 as BVector3 } from '@babylonjs/core';

export interface Vector3Interface {
	target: BVector3;
}

export interface Vector3DirectionInterface extends Vector3Interface {
	direction: BVector3;
}
