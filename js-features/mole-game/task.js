const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const maxMistakes = 5;
const maxScore = 10;

let currentScore = 0;
let currentMistakes = 0;

function getHole(index) {
	return holes[index];
}

function whackMole(event) {
	const hole = event.target;
	if (hole.classList.contains('hole_has-mole')) {
		currentScore++;
		dead.textContent = currentScore;

		if (currentScore === maxScore) {
			alert('Победа!');
			resetGame();
		}
	} else {
		currentMistakes++;
		lost.textContent = currentMistakes;

		if (currentMistakes === maxMistakes) {
			alert('Вы проиграли!');
			resetGame();
		}
	}
}

function resetGame() {
	currentScore = 0;
	currentMistakes = 0;
	dead.textContent = currentScore;
	lost.textContent = currentMistakes;
}

for (let i = 0; i < holes.length; i++) {
	const hole = getHole(i);
	hole.onclick = whackMole;
}