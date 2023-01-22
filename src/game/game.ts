import { Engine } from './engine/engine.js';
import { State } from './game.interface.js';
import { Scene } from './scene/scene.js';
import { Start } from './start/start.js';

export class Game {
	private engine: Engine;
	private state?: State;

	constructor(element: HTMLCanvasElement) {
		this.engine = new Engine(element);

		this.Main();
	}

	private async Main() {
		await this.GoToStart();

		this.engine.Render();
	}

	private async GoToStart() {
		const start = new Start(this.engine);
		await this.engine.SwitchScene(start);
		start.OnPlay(async () => {
			await this.engine.SwitchScene(new Scene(this.engine));
		});

		this.state = State.START;
	}

	Destroy() {
		this.engine.Destroy();
	}
}
