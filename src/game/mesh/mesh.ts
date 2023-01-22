import * as BABYLON from '@babylonjs/core';

import type { MeshInterface } from './mesh.interface.js';

export class Mesh implements MeshInterface {
	private afterbuild: (() => void)[];

	name = 'mesh';
	mesh?: BABYLON.Mesh;

	constructor(name = 'mesh') {
		this.name = name;
		this.afterbuild = [];
	}

	setPosition(x = 0, y = 0, z = 0) {
		const exec = () => {
			if (this.mesh) {
				this.mesh.position = new BABYLON.Vector3(x, y, z);
			}
		};

		this.WhenBuilt(exec);
	}

	setRotation(x = 0, y = 0) {
		const exec = () => {
			if (this.mesh) {
				this.mesh.rotation.x = x;
				this.mesh.rotation.y = y;
			}
		};

		this.WhenBuilt(exec);
	}

	WhenBuilt(callback: () => void) {
		if (this.mesh) {
			callback();
		} else {
			this.afterbuild.push(callback);
		}
	}

	OnBuild() {
		if (this.afterbuild.length > 0) {
			this.afterbuild.forEach((c) => c());
		}
	}
}
