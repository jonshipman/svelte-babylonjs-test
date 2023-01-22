import { Effect, PostProcess } from '@babylonjs/core';

import type { Scene } from '../scene/scene.js';

export class Transition {
	private fadelevel = 1.0;
	private playing = false;
	private _done?: () => void | undefined;
	private scene: Scene;

	constructor(scene: Scene) {
		Effect.RegisterShader(
			'fade',
			'precision highp float;' +
				'varying vec2 vUV;' +
				'uniform sampler2D textureSampler; ' +
				'uniform float fadeLevel; ' +
				'void main(void){' +
				'vec4 baseColor = texture2D(textureSampler, vUV) * fadeLevel;' +
				'baseColor.a = 1.0;' +
				'gl_FragColor = baseColor;' +
				'}'
		);

		this.scene = scene;

		scene.GetScene().registerBeforeRender(() => {
			if (this.playing) {
				this.fadelevel -= 0.05;
				if (this.fadelevel <= 0) {
					if (this._done) {
						this._done();
					}

					this.playing = false;
				}
			}
		});
	}

	WhenDone(cb: () => void) {
		this._done = cb;

		return this;
	}

	Start() {
		const postProcess = new PostProcess(
			'Fade',
			'fade',
			['fadeLevel'],
			null,
			1.0,
			this.scene.GetCamera()
		);

		postProcess.onApply = (effect) => {
			effect.setFloat('fadeLevel', this.fadelevel);
		};

		this.playing = true;

		return this;
	}
}
