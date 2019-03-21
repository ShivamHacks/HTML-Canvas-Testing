window.onload = function() {

	var c = document.getElementById("canvas");

	/*
	Note: must set both width/height HTML attribute and CSS style
	See: https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5/43364730
	*/
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	c.style.width = window.innerWidth;
	c.style.height = window.innerHeight;
	var ctx = c.getContext("2d");

	var lib = new CanvasLib(ctx, c.width, c.height, 10);

	// register mouse listener
	document.onmousedown = lib.handleClick.bind(lib);
	document.onmousemove = lib.handleMove.bind(lib);
	document.onmouseup = lib.handleUp.bind(lib);

};