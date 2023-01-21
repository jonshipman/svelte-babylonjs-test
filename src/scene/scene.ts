import * as BABYLON from 'babylonjs';

export function Render3D(canvas: HTMLCanvasElement) {
	const engine = new BABYLON.Engine(canvas, true);

	const createScene = () => {
		const scene = new BABYLON.Scene(engine);

		const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -7), scene);
		camera.attachControl(canvas, true);

		const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

		const box = BABYLON.MeshBuilder.CreateBox(
			'box',
			{
				size: 1
			},
			scene
		);
		box.rotation.x = 2;
		box.rotation.y = 3;

		const sphere = BABYLON.MeshBuilder.CreateSphere(
			'sphere',
			{
				segments: 32,
				diameter: 2
			},
			scene
		);
		sphere.position = new BABYLON.Vector3(3, 0, 0);
		sphere.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);

		const plane = BABYLON.MeshBuilder.CreatePlane('plane', {}, scene);
		plane.position = new BABYLON.Vector3(-3, 0, 0);

		const points = [
			new BABYLON.Vector3(2, 0, 0),
			new BABYLON.Vector3(2, 1, 1),
			new BABYLON.Vector3(2, 1, 0)
		];

		const lines = BABYLON.MeshBuilder.CreateLines('lines', { points }, scene);

		const material = new BABYLON.StandardMaterial('material', scene);
		material.diffuseColor = new BABYLON.Color3(1, 0, 0);
		material.emissiveColor = new BABYLON.Color3(0, 1, 0);

		box.material = material;

		const material2 = new BABYLON.StandardMaterial('material2', scene);
		material2.diffuseTexture = new BABYLON.Texture('/whales.png', scene);

		sphere.material = material2;

		const animation = new BABYLON.Animation(
			'animation',
			'rotation.y',
			30,
			BABYLON.Animation.ANIMATIONTYPE_FLOAT,
			BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
		);

		const animation2 = new BABYLON.Animation(
			'animation2',
			'rotation.x',
			30,
			BABYLON.Animation.ANIMATIONTYPE_FLOAT,
			BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
		);

		const keys = [
			{ frame: 0, value: 0 },
			{ frame: 15, value: 1.76 * Math.PI },
			{ frame: 30, value: 2 * Math.PI }
		];

		animation.setKeys(keys);
		animation2.setKeys(keys);

		box.animations = [animation];
		sphere.animations = [animation2, animation];

		scene.beginAnimation(box, 0, 30, true);
		scene.beginAnimation(sphere, 0, 30, true);

		return scene;
	};

	const main = createScene();

	engine.runRenderLoop(() => {
		main.render();
	});
}
