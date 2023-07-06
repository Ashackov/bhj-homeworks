const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed");

let clickCount = 0;
let lastClickTime = null;
let cookieSize = 200;
let isDecreasing = false;

function handleClick() {
	clickCount++;
	counter.textContent = clickCount;

	const currentTime = new Date().getTime();
	if (lastClickTime) {
		const timeElapsed = (currentTime - lastClickTime) / 1000;
		const speed = 1 / timeElapsed;
		clickSpeed.textContent = speed.toFixed(2);
	}
	lastClickTime = currentTime;

	if (isDecreasing) {
		cookieSize += 10;
		isDecreasing = false;
	} else {
		cookieSize -= 10;
		isDecreasing = true;
	}

	cookie.style.width = `${cookieSize}px`;
	cookie.style.height = "auto";
	cookie.style.maxHeight = `${cookieSize}px`;
}

cookie.addEventListener("click", handleClick);