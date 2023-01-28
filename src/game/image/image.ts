import { Container, Image as GUIImage } from '@babylonjs/gui';

import type { ImageInterface } from './image.interface.js';

export class Image implements ImageInterface {
	image: GUIImage;

	constructor(name: string, path: string) {
		this.image = new GUIImage(name, path);
		this.stretch = GUIImage.STRETCH_UNIFORM;
	}

	set isVisible(x: boolean) {
		this.image.isVisible = x;
	}

	get isVisible() {
		return this.image.isVisible;
	}

	set stretch(x: number) {
		this.image.stretch = x;
	}

	get stretch() {
		return this.image.stretch;
	}

	set sourceWidth(x: number) {
		this.image.sourceWidth = x;
	}

	get sourceWidth() {
		return this.image.sourceWidth;
	}

	set sourceHeight(x: number) {
		this.image.sourceHeight = x;
	}

	get sourceHeight() {
		return this.image.sourceHeight;
	}

	Render(container: Container) {
		container.addControl(this.image);

		return this;
	}
}
