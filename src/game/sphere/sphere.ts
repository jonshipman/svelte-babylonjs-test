import { MeshBuilder, Scene as BScene, Vector4 } from '@babylonjs/core';

import { Mesh } from '../mesh/mesh.js';
import type { SphereOptions } from './sphere.interface.js';

export class Sphere extends Mesh {
	private options: SphereOptions;

	constructor(name = 'sphere', opts = {}) {
		super(name);

		this.options = opts;
	}

	setSegments(x: number) {
		this.options.segments = x;
	}

	setDiameter(x: number) {
		this.options.diameter = x;
	}

	setDiameterX(x: number) {
		this.options.diameterX = x;
	}

	setDiameterY(x: number) {
		this.options.diameterY = x;
	}

	setDiameterZ(x: number) {
		this.options.diameterZ = x;
	}

	setArc(x: number) {
		this.options.arc = x;
	}

	setSlice(x: number) {
		this.options.slice = x;
	}

	setSideOrientation(x: number) {
		this.options.sideOrientation = x;
	}

	setFrontUVs(x: Vector4) {
		this.options.frontUVs = x;
	}

	setBackUVs(x: Vector4) {
		this.options.backUVs = x;
	}

	setUpdatable(x: boolean | undefined) {
		this.options.updatable = x;
	}

	Build() {
		return this.BuildOn(window._SCENE as BScene);
	}

	BuildOn(scene: BScene) {
		this.mesh = MeshBuilder.CreateSphere(this.name, this.options, scene);

		this.OnBuild();

		return this.mesh;
	}
}
