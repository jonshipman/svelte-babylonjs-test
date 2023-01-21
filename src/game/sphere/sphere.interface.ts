import type * as BABYLON from 'babylonjs';

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
	frontUVs?: BABYLON.Vector4;
	backUVs?: BABYLON.Vector4;
	updatable?: boolean;
};

export interface SphereInterface extends MeshInterface {
	options?: SphereOptions;
}
