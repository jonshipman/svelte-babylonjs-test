import * as BABYLON from 'babylonjs';

import type { BoxInterface, BoxOptions } from './box.interface.js';

export class Box implements BoxInterface {
	box?: BABYLON.Mesh;
	name = 'box';
	options: BoxOptions;

	constructor(name = 'box', opts = {}) {
		this.name = name;
		this.options = opts;
	}

	setPosition(x = 0, y = 0, z = 0) {
		if (this.box) {
			this.box.position = new BABYLON.Vector3(x, y, z);
		} else {
			throw new Error('setPosition after build');
		}
	}

	setRotation(x = 0, y = 0) {
		if (this.box) {
			this.box.rotation.x = x;
			this.box.rotation.y = y;
		} else {
			throw new Error('setRotation after build');
		}
	}

	setDimensions(w = 0, h = 0, d = 0) {
		this.setWidth(w);
		this.setHeight(h);
		this.setDepth(d);
	}

	setSize(x: number) {
		this.options.size = x;
	}

	setWidth(x: number) {
		this.options.width = x;
	}

	setHeight(x: number) {
		this.options.height = x;
	}

	setDepth(x: number) {
		this.options.depth = x;
	}

	setFaceUV(x: BABYLON.Vector4[]) {
		this.options.faceUV = x;
	}

	setFaceColors(x: BABYLON.Color4[]) {
		this.options.faceColors = x;
	}

	setSideOrientation(x: number) {
		this.options.sideOrientation = x;
	}

	setFrontUVs(x: BABYLON.Vector4) {
		this.options.frontUVs = x;
	}

	setBackUVs(x: BABYLON.Vector4) {
		this.options.backUVs = x;
	}

	setWrap(x: boolean) {
		this.options.wrap = x;
	}

	setTopBaseAt(x: number) {
		this.options.topBaseAt = x;
	}

	setBottomBaseAt(x: number) {
		this.options.bottomBaseAt = x;
	}

	setUpdatable(x: boolean | undefined) {
		this.options.updatable = x;
	}

	BuildOn(scene: BABYLON.Scene) {
		this.box = BABYLON.MeshBuilder.CreateBox('box', this.options, scene);

		return this.box;
	}
}
