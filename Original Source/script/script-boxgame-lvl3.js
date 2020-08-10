let boxes = Array.apply(null, document.querySelectorAll(".box.light"));
let box1 = boxes[0];
let box2 = boxes[1];
let box3 = boxes[2];
let box4 = boxes[3];
let box5 = boxes[4];

function buttonOne() {
	let box1On = box1.classList.contains("on");
	let box2On = box2.classList.contains("on");
	let box3On = box3.classList.contains("on");
	let box4On = box4.classList.contains("on");
	let box5On = box5.classList.contains("on");

	if (box1On && box2On && box3On && box4On && !box5On) {
		box5.classList.add("on");
		document.getElementById("nxt-lvl").removeAttribute("disabled");
		document.querySelectorAll(".gamebutton").forEach(gameButton => gameButton.setAttribute("disabled", ""));
		boxes.forEach(box => box.classList.add("finito"));
	} else {
		boxes.forEach(b => b.classList.remove("on"));
	}
}

function buttonTwo() {
	let box1On = box1.classList.contains("on");
	let box2On = box2.classList.contains("on");
	let box3On = box3.classList.contains("on");

	if (box1On && box2On && !box3On) {
		box3.classList.add("on");
	} else {
		boxes.forEach(b => b.classList.remove("on"));
	}
}

function buttonThree() {
	let box1On = box1.classList.contains("on");
	let box2On = box2.classList.contains("on");
	let box3On = box3.classList.contains("on");
	let box4On = box4.classList.contains("on");

	if (box1On && box2On && box3On && !box4On) {
		box4.classList.add("on");
	} else {
		boxes.forEach(b => b.classList.remove("on"));
	}
}

function buttonFour() {
	let box1On = box1.classList.contains("on");
	let box2On = box2.classList.contains("on");

	if (box1On && !box2On) {
		box2.classList.add("on");
	} else {
		boxes.forEach(b => b.classList.remove("on"));
	}
}

function buttonFive() {
	let box1On = box1.classList.contains("on");

	if (!box1On) {
		box1.classList.add("on");
	} else {
		boxes.forEach(b => b.classList.remove("on"));
	}
}