import type * as BABYLON from 'babylonjs';

export interface Vector3Interface {
	target: BABYLON.Vector3;
}

export interface Vector3DirectionInterface extends Vector3Interface {
	direction: BABYLON.Vector3;
}
