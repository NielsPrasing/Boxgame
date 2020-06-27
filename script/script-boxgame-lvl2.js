let boxes = Array.apply(null, document.querySelectorAll(".box.light"));
let box1 = boxes[0];
let box2 = boxes[1];
let box3 = boxes[2];
let box4 = boxes[3];
let box5 = boxes[4];

function buttonOne() {
	if (box1.classList.contains("on")) {
		box1.classList.remove("on");
	} else {
		box1.classList.add("on");
	}
	
	if (box3.classList.contains("on")) {
		box3.classList.remove("on");
	} else {
		box3.classList.add("on");
	}
	
	check()
}

function buttonTwo() {
	let box2On = box2.classList.contains("on");
	let box1On = box1.classList.contains("on");
	let box4On = box4.classList.contains("on");
	
	if (box2On && !box1On) {
		box1.classList.add("on");
	} else if (!box2On && box1On) {
		box1.classList.remove("on");
	}

	if (box1On && !box4On) {
		box4.classList.add("on");
	} else if (!box1On && box4On) {
		box4.classList.remove("on");
	}

	if (box4On && !box2On) {
		box2.classList.add("on");
	} else if (!box4On && box2On) {
		box2.classList.remove("on");
	}

	box3.classList.remove("on");
	
	check()
}

function buttonThree() {
	if (box5.classList.contains("on")) {
		box5.classList.remove("on");
	} else {
		box5.classList.add("on");
	}
	if (box3.classList.contains("on")) {
		box3.classList.remove("on");
	} else {
		box3.classList.add("on");
	}
	
	check()
}

function check() {
	if (boxes.every(b => b.classList.contains("on"))) {
		document.getElementById("nxt-lvl").removeAttribute("disabled");
		document.querySelectorAll(".gamebutton").forEach(box => box.setAttribute("disabled", ""));
	}
}