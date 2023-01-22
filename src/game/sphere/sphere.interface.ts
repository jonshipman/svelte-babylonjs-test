import type { Vector4 } from '@babylonjs/core';

import type { MeshInterface } from '../mesh/mesh.interface.js';

export type SphereOptions = {
	segments?: number;
	diameter?: number;
	diameterX?: number;
	diameterY?: number;
	diameterZ?: number;
	arc?: number;
	slice?: number;
	sideOrientation?: number;
	frontUVs?: Vector4;
	backUVs?: Vector4;
	updatable?: boolean;
};

export interface SphereInterface extends MeshInterface {
	options?: SphereOptions;
}
