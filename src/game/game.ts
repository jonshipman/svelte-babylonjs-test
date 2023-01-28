import { Cutscene } from './cutscene/cutscene.js';
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
		start.OnPlay(() => this.GoToCutscene());

		this.state = State.START;
	}

	private async GoToCutscene() {
		const cutscene = new Cutscene(this.engine);
		await this.engine.SwitchScene(cutscene);

		this.state = State.CUTSCENE;
	}

	Destroy() {
		this.engine.Destroy();
	}
}
