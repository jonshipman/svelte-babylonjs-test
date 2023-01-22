import type { Engine as BEngine, Scene as BScene } from '@babylonjs/core';

export interface SceneInterface {
	engine: BEngine;
	scene: BScene;
}
