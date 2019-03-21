/*

TODO:
- rotation
- animation
- path movement
- mouse clicks

*/


class CanvasLib {

	constructor(ctx, width, height) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
	}

	drawCircle(x, y, radius) {
		this.ctx.beginPath();
		this.ctx.arc(x - radius, y - radius, radius,0 , 2 * Math.PI);
		this.ctx.stroke();
	}

	drawLine(x1, y1, x2, y2) {
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
	}

	drawGrid(gap) {

		// set line style
		ctx.lineWidth = 1;

		// draw vertical lines
		for (var i = 0; i < this.width; i = i + gap) {
			this.ctx.moveTo(i, 0);
			this.ctx.lineTo(i, this.height);
			this.ctx.stroke();
		}

		// draw horizontal lines
		for (var j = 0; j < this.height; j = j + gap) {
			this.ctx.moveTo(0, j);
			this.ctx.lineTo(this.width, j);
			this.ctx.stroke();
		}
	}

}