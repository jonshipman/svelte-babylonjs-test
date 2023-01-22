import { Image as GUIImage, Container } from '@babylonjs/gui';

export class Image {
	private image: GUIImage;

	constructor(name: string, path: string) {
		this.image = new GUIImage(name, path);
		this.image.stretch = GUIImage.STRETCH_UNIFORM;
	}

	Render(container: Container) {
		container.addControl(this.image);

		return this;
	}
}
