function addMessage(className, time, text) {
	const messagesContainer = document.querySelector('.chat-widget__messages');
	messagesContainer.innerHTML += `
    <div class="${className}">
      <div class="message__time">${time}</div>
      <div class="message__text">${text}</div>
    </div>
  `;
}

function sendRobotResponse() {
	const robotResponses = [
		'Здарова нигер',
		'Че?',
		"А?",
		'Все заняты, напиши через пару лет',
		'Не пиши сюда',
		'Скинь номер карты и CVC по брацки',
	];
	const randomIndex = Math.floor(Math.random() * robotResponses.length);
	const robotMessage = robotResponses[randomIndex];

	const currentTime = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit'
	});

	addMessage('message', currentTime, robotMessage);
}

document.addEventListener('DOMContentLoaded', () => {
	const redSideBadge = document.querySelector('.red-side-badge');
	const chatWidget = document.querySelector('.chat-widget');
	const chatWidgetSide = document.querySelector('.chat-widget__side');
	const chatInput = document.getElementById('chat-widget__input');

	redSideBadge.addEventListener('click', () => {
		chatWidget.classList.add('chat-widget_active');
	});

	chatWidgetSide.addEventListener('click', () => {
		chatWidget.classList.add('chat-widget_active');
	});

	chatInput.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' && chatInput.value.trim() !== '') {
			const userMessage = chatInput.value.trim();
			const currentTime = new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit'
			});
			addMessage('message message_client', currentTime, userMessage);
			chatInput.value = '';

			setTimeout(sendRobotResponse, 1000);
		}
	});
});