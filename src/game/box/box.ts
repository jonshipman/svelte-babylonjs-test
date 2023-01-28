import { MeshBuilder, Scene as BScene, Vector4, Color4 } from '@babylonjs/core';

import { Mesh } from '../mesh/mesh.js';
import type { BoxInterface, BoxOptions } from './box.interface.js';

export class Box extends Mesh implements BoxInterface {
	options: BoxOptions;

	constructor(name = 'box', opts = {}) {
		super(name);

		this.options = opts;
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

	setFaceUV(x: Vector4[]) {
		this.options.faceUV = x;
	}

	setFaceColors(x: Color4[]) {
		this.options.faceColors = x;
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

	Build() {
		return this.BuildOn(window._SCENE as BScene);
	}

	BuildOn(scene: BScene) {
		this.mesh = MeshBuilder.CreateBox(this.name, this.options, scene);

		this.OnBuild();

		return this.mesh;
	}
}
