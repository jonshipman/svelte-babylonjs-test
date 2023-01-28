import {
	DirectionalLight,
	HemisphericLight,
	Light as BLight,
	PointLight,
	Scene,
	SpotLight
} from '@babylonjs/core';

import { Vector3Direction } from '../vector3/vector3.js';
import type { LightInterface, LIGHTS } from './light.interface.js';

export class Light extends Vector3Direction implements LightInterface {
	name = 'light';
	light: BLight | undefined;
	type: keyof typeof LIGHTS;
	angle = 0;
	exponent = 0;

	constructor(type: keyof typeof LIGHTS = 'PointLight') {
		super();

		this.type = type;
	}

	Add() {
		return this.AddTo(window._SCENE as Scene);
	}

	AddTo(scene: Scene) {
		switch (this.type) {
			case 'PointLight':
				this.light = new PointLight(this.name, this.target, scene);
				break;
			case 'DirectionalLight':
				this.light = new DirectionalLight(this.name, this.target, scene);
				break;
			case 'HemisphericLight':
				this.light = new HemisphericLight(this.name, this.target, scene);
				break;
			case 'SpotLight':
				this.light = new SpotLight(
					this.name,
					this.target,
					this.direction,
					this.angle,
					this.exponent,
					scene
				);
				break;
			default:
				throw new Error('Incompatible Light');
		}

		return this.light;
	}
}
