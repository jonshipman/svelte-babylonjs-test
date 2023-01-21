import type * as BABYLON from 'babylonjs';

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

export interface BoxInterface {
	name: string;
	box?: BABYLON.Mesh;
	options?: BoxOptions;
}
