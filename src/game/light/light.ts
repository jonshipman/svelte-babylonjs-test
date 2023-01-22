import * as BABYLON from '@babylonjs/core';

import { Vector3Direction } from '../vector3/vector3.js';
import type { LightInterface, LightType } from './light.interface.js';

export class Light extends Vector3Direction implements LightInterface {
	name = 'light';
	light: BABYLON.Light | undefined;
	type: keyof typeof BABYLON;
	angle = 0;
	exponent = 0;

	constructor(type: keyof typeof BABYLON = 'PointLight') {
		super();

		this.target = BABYLON.Vector3.Zero();
		this.direction = BABYLON.Vector3.Zero();
		this.type = type;
	}

	AddTo(scene: BABYLON.Scene) {
		const LightClass = BABYLON[this.type] as LightType;

		switch (this.type) {
			case 'PointLight':
			case 'DirectionalLight':
			case 'HemisphericLight':
				this.light = new LightClass(this.name, this.target, scene);
				break;
			case 'SpotLight':
				this.light = new BABYLON.SpotLight(
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
