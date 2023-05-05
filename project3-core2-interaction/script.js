const cursor = document.querySelector('.cursor');
let cursorLeft = 0;
let cursorTop = 0;

window.addEventListener('mousemove', e => {
	// console.log(e);
	const momentum = Math.max(Math.max(e.movementX, e.movementY) / 10, 1);
	cursorLeft = e.clientX;
	cursorTop = e.clientY;
	cursor.style.left = `${cursorLeft}px`;
	cursor.style.top = `${cursorTop}px`;
	cursor.style.transform = `translate(-50%,-50%) scale(${momentum})`;
});