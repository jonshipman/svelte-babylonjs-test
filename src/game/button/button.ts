import { Button as GUIButton, Container, Control } from '@babylonjs/gui';

export class Button {
	private button: GUIButton;

	constructor(name = 'button', text = 'Label') {
		this.button = GUIButton.CreateSimpleButton(name, text);

		this.width = 0.2;
		this.cornerRadius = 10;
		this.height = '40px';
		this.background = 'black';
		this.color = 'white';
		this.hoverCursor = 'pointer';
		this.thickness = 0;
		this.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
	}

	set fontFamily(x: string) {
		this.button.fontFamily = x;
	}

	get fontFamily() {
		return this.button.fontFamily;
	}

	set width(x: string | number) {
		this.button.width = x;
	}

	get width() {
		return this.button.width;
	}

	set height(x: string | number) {
		this.button.height = x;
	}

	get height() {
		return this.button.height;
	}

	set color(x: string) {
		this.button.color = x;
	}

	get color() {
		return this.button.color;
	}

	set top(x: string | number) {
		this.button.top = x;
	}

	get top() {
		return this.button.top;
	}

	set thickness(x: number) {
		this.button.thickness = x;
	}

	get thickness() {
		return this.button.thickness;
	}

	set verticalAlignment(x: number) {
		this.button.verticalAlignment = x;
	}

	get verticalAlignment() {
		return this.button.verticalAlignment;
	}

	get onPointerDownObservable() {
		return this.button.onPointerDownObservable;
	}

	set cornerRadius(x: number) {
		this.button.cornerRadius = x;
	}

	get cornerRadius() {
		return this.button.cornerRadius;
	}

	set background(x: string) {
		this.button.background = x;
	}

	get background() {
		return this.button.background;
	}

	set hoverCursor(x: string) {
		this.button.hoverCursor = x;
	}

	get hoverCursor() {
		return this.button.hoverCursor;
	}

	Render(container: Container) {
		container.addControl(this.button);

		return this;
	}
}
