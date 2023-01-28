import {
	Texture,
	Scene as BScene,
	Engine as BEngine,
	AssetsManager,
	Vector2,
	SpriteMap
} from '@babylonjs/core';
import type { ITextureCreationOptions } from '@babylonjs/core';

type AnimationBlob = Nullable<
	string | ArrayBuffer | ArrayBufferView | HTMLImageElement | Blob | ImageBitmap
>;

export class Animation {
	private spriteSheet?: Texture;
	private spritePath: string;
	private framesJSONPath?: string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	loaderOptions?: any;
	noMipmapOrOptions: boolean | ITextureCreationOptions = false;
	invertY = false;
	samplingMode = Texture.NEAREST_NEAREST;
	onLoad: NullFunction = null;
	onError: NullFunction = null;
	blob: AnimationBlob = null;
	deleteBuffer = false;
	format = BEngine.TEXTUREFORMAT_RGBA;
	mimeType?: string;
	creationFlags?: number;
	forcedExtension?: string;
	flipU = true;
	maxAnimationFrames = 8;
	speed = 0.005;
	spriteIndex = 0;
	_scene?: BScene;
	_assetsManager?: AssetsManager;

	constructor(path: string, framePath?: string) {
		this.spritePath = path;

		if (framePath) {
			this.framesJSONPath = framePath;
		}
	}

	set scene(s: BScene) {
		this._scene = s;
	}

	get scene() {
		if (!this._scene) {
			this._scene = window._SCENE as BScene;
		}

		return this._scene;
	}

	set assetsManager(a: AssetsManager) {
		this._assetsManager = a;
	}

	get assetsManager() {
		if (!this._assetsManager) {
			this._assetsManager = new AssetsManager(this.scene);
		}

		return this._assetsManager;
	}

	Render(scene?: BScene) {
		if (scene) {
			this.scene = scene;
		}

		this.spriteSheet = new Texture(
			this.spritePath,
			this.scene,
			this.noMipmapOrOptions,
			this.invertY,
			this.samplingMode,
			this.onLoad,
			this.onError,
			this.blob,
			this.deleteBuffer,
			this.format,
			this.mimeType,
			this.loaderOptions,
			this.creationFlags,
			this.forcedExtension
		);

		if (this.framesJSONPath) {
			const load = this.assetsManager.addTextFileTask(
				'sprites4' + this.spritePath,
				this.framesJSONPath
			);

			load.onSuccess = (task) => {
				const atlasJSON = JSON.parse(task.text);
				const backgroundSize = new Vector2(1, 1);

				const background = new SpriteMap(
					'background4' + this.spritePath,
					atlasJSON,
					this.spriteSheet as Texture,
					{
						stageSize: backgroundSize,
						maxAnimationFrames: this.maxAnimationFrames,
						flipU: this.flipU
					},
					this.scene as BScene
				);

				background.changeTiles(0, new Vector2(0, 0), this.spriteIndex);

				const per = 1 / this.maxAnimationFrames;
				const speed = this.speed;

				for (let i = 1; i <= this.maxAnimationFrames; i++) {
					let nextFrame = this.spriteIndex + i;

					if (i === this.maxAnimationFrames) {
						nextFrame = this.spriteIndex;
					}

					console.log(this.spriteIndex, i - 1, nextFrame, per * i, speed);

					background.addAnimationToTile(this.spriteIndex, i - 1, nextFrame, per * i, speed);
				}
			};

			this.assetsManager.load();
		}

		return this;
	}
}
