import { Rectangle as GUIRectangle, AdvancedDynamicTexture } from '@babylonjs/gui';

export class Rectangle {
	private rectangle: GUIRectangle;

	constructor(name: string) {
		this.rectangle = new GUIRectangle(name);
		this.width = 1;
		this.thickness = 0;
	}

	set width(x: string | number) {
		this.rectangle.width = x;
	}

	get width() {
		return this.rectangle.width;
	}

	set thickness(x: number) {
		this.rectangle.thickness = x;
	}

	get thickness() {
		return this.rectangle.thickness;
	}

	GetRectangle() {
		return this.rectangle;
	}

	Render(adt: AdvancedDynamicTexture) {
		adt.addControl(this.rectangle);

		return this;
	}
}
