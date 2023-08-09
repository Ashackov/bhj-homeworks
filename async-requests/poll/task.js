function fetchRandomPoll() {
	const url = 'https://students.netoservices.ru/nestjs-backend/poll';

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const pollTitleElement = document.getElementById('poll__title');
			const pollAnswersElement = document.getElementById('poll__answers');

			pollTitleElement.textContent = data.data.title;
			pollAnswersElement.innerHTML = '';

			data.data.answers.forEach(answer => {
				const answerButton = document.createElement('button');
				answerButton.classList.add('poll__answer');
				answerButton.textContent = answer;


				answerButton.addEventListener('click', () => {
					showThankYouDialog();
				});

				pollAnswersElement.appendChild(answerButton);
			});
		})
		.catch(error => {
			console.error('Error fetching poll data:', error);
		});
}

function showThankYouDialog() {
	alert('Спасибо, ваш голос засчитан!');
}

fetchRandomPoll();