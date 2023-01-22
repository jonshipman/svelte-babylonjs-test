import type * as BABYLON from '@babylonjs/core';

import type { MeshInterface } from '../mesh/mesh.interface.js';

export type BoxOptions = {
	size?: number;
	width?: number;
	height?: number;
	depth?: number;
	faceUV?: BABYLON.Vector4[];
	faceColors?: BABYLON.Color4[];
	sideOrientation?: number;
	frontUVs?: BABYLON.Vector4;
	backUVs?: BABYLON.Vector4;
	wrap?: boolean;
	topBaseAt?: number;
	bottomBaseAt?: number;
	updatable?: boolean;
};

export interface BoxInterface extends MeshInterface {
	options?: BoxOptions;
}
