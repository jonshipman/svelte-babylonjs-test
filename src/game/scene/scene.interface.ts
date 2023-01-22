import type { Engine as BEngine, Scene as BScene, TargetCamera } from '@babylonjs/core';

export interface SceneInterface {
	engine: BEngine;
	scene: BScene;
	camera: TargetCamera | undefined;
}
