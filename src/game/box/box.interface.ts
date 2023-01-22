import type { Color4, Vector4 } from '@babylonjs/core';

import type { MeshInterface } from '../mesh/mesh.interface.js';

export type BoxOptions = {
	size?: number;
	width?: number;
	height?: number;
	depth?: number;
	faceUV?: /*  */ Vector4[];
	faceColors?: /*  */ Color4[];
	sideOrientation?: number;
	frontUVs?: /*  */ Vector4;
	backUVs?: /*  */ Vector4;
	wrap?: boolean;
	topBaseAt?: number;
	bottomBaseAt?: number;
	updatable?: boolean;
};

export interface BoxInterface extends MeshInterface {
	options?: BoxOptions;
}
