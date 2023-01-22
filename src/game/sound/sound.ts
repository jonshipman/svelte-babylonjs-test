import * as BABYLON from '@babylonjs/core';

export class Sound {
	private name: string;
	private filepath: string;
	private sound?: BABYLON.Sound;
	private callback: Nullable<() => void>;
	private volume = 1;
	private loop = false;
	private autoplay = false;
	private spatialSound?: boolean;
	private maxDistance?: number;
	private useCustomAttenuation?: boolean;
	private rolloffFactor?: number;
	private refDistance?: number;
	private distanceModel?: string;
	private playbackRate?: number;
	private streaming?: boolean;
	private length?: number;
	private offset?: number;
	private skipCodecCheck?: boolean;

	constructor(filepath: string, name = '') {
		this.filepath = filepath;
		this.name = name;
		this.callback = null;
	}

	Callback(cb: () => void) {
		this.callback = cb;
	}

	setVolume(v: number) {
		this.volume = v;
	}

	setLoop(l: boolean) {
		this.loop = l;
	}

	setAutoplay(a: boolean) {
		this.autoplay = a;
	}

	setSpatialSound(x: boolean) {
		this.spatialSound = x;
	}

	setMaxDistance(x: number) {
		this.maxDistance = x;
	}

	setUseCustomAttenuation(x: boolean) {
		this.useCustomAttenuation = x;
	}

	setRolloffFactor(x: number) {
		this.rolloffFactor = x;
	}

	setRefDistance(x: number) {
		this.refDistance = x;
	}

	setDistanceModel(x: string) {
		this.distanceModel = x;
	}

	setPlaybackRate(x: number) {
		this.playbackRate = x;
	}

	setStreaming(x: boolean) {
		this.streaming = x;
	}

	setLength(x: number) {
		this.length = x;
	}

	setOffset(x: number) {
		this.offset = x;
	}

	setSkipCodecCheck(x: boolean) {
		this.skipCodecCheck = x;
	}

	Play() {
		if (this.sound) {
			this.sound.play();
		} else {
			throw new Error("trying to play a sound that's not there");
		}
	}

	AddTo(scene: BABYLON.Scene) {
		this.sound = new BABYLON.Sound(this.name, this.filepath, scene, this.callback, {
			volume: this.volume,
			loop: this.loop,
			autoplay: this.autoplay,
			spatialSound: this.spatialSound,
			maxDistance: this.maxDistance,
			useCustomAttenuation: this.useCustomAttenuation,
			rolloffFactor: this.rolloffFactor,
			refDistance: this.refDistance,
			distanceModel: this.distanceModel,
			playbackRate: this.playbackRate,
			streaming: this.streaming,
			length: this.length,
			offset: this.offset,
			skipCodecCheck: this.skipCodecCheck
		});

		return this.sound;
	}
}
