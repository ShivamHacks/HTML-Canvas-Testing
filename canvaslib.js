/*

TODO:
- rotation
- animation
- path movement
- mouse clicks

*/




class CanvasLib {

	constructor(ctx, width, height, framerate) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;

		// set additional parameters
		this.inDragEvent = false;

		// handle layering of shapes
		this.layers = [];

		// add grid
		// NOTE: grid must always be first element
		this.layers.push(new Grid(width, height, 20));

		// start display loop
		setInterval((function() {
			this.ctx.clearRect(0, 0, width, height);
			for (var i in this.layers) {
				this.layers[i].draw(this.ctx);
			}
		}).bind(this), framerate);
	}

	/* HELPER METHODS */

	sortPoints(x1, y1, x2, y2) {
		// sorts x1, y1, x2, y2 to ensure that the two points
		// returned are the top left and bottom right corners
		var xmin = x1 < x2 ? x1 : x2;
		var xmax = x1 > x2 ? x1 : x2;
		var ymin = y1 < y2 ? y1 : y2;
		var ymax = y1 > y2 ? y1 : y2;
		return [xmin, ymin, xmax, ymax];
	}

	/* MOUSE ACTIONS */

	handleClick(event) {
		this.inDragEvent = true;
		this.dragStart = {
			x: event.clientX,
			y: event.clientY
		};
	}

	handleMove(event) {
		if (this.inDragEvent) {

			// remove previous rect from layers
			if (this.layers.length > 1) {
				this.layers.pop();
			}

			// add new rect
			this.layers.push(new Rectangle(
				this.sortPoints(
					this.dragStart.x, 
					this.dragStart.y, 
					event.clientX, 
					event.clientY
				)
			));

		}
	}

	handleUp(event) {
		this.inDragEvent = false;
		// add final rect
		this.layers.push(new Rectangle(
			this.sortPoints(
				this.dragStart.x, 
				this.dragStart.y, 
				event.clientX, 
				event.clientY
			)
		));
	}

}