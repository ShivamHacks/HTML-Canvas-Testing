/*

TODO:
- custom styles

*/

class Grid {
	constructor(width, height, gap) {
		this.width = width;
		this.height = height;
		this.gap = gap;
	}
	draw(ctx) {
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#cccccc";

		// draw vertical lines
		for (var i = 0; i < this.width; i = i + this.gap) {
			ctx.moveTo(i, 0);
			ctx.lineTo(i, this.height);
			ctx.stroke();
		}

		// draw horizontal lines
		for (var j = 0; j < this.height; j = j + this.gap) {
			ctx.moveTo(0, j);
			ctx.lineTo(this.width, j);
			ctx.stroke();
		}

		ctx.closePath();

	}
}

class Rectangle {
	constructor(points) {
		this.x1 = points[0];
		this.y1 = points[1];
		this.x2 = points[2];
		this.y2 = points[3];
		this.width = this.x2 - this.x1;
		this.height = this.y2 - this.y1;
	}
	draw(ctx) {
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#FF0000";
		ctx.strokeRect(this.x1, this.y1, this.width, this.height);
		ctx.stroke();
		ctx.closePath();
	}
}

class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	draw(ctx) {
		this.ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#FF0000";
		ctx.arc(this.x - this.radius, this.y - this.radius, this.radius, 0 , 2 * Math.PI);
		ctx.stroke();
		ctx.closePath();
	}
}