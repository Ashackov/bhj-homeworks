function fetchCurrencyData() {
	const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

	document.querySelector('.loader').style.display = 'block';

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const valute = data.response.Valute;
			const itemsContainer = document.getElementById('items');

			itemsContainer.innerHTML = '';

			for (const code in valute) {
				const item = valute[code];

				const itemElement = document.createElement('div');
				itemElement.classList.add('item');

				itemElement.innerHTML = `
                    <div class="item__code">${item.CharCode}</div>
                    <div class="item__value">${item.Value}</div>
                    <div class="item__currency">руб.</div>
                `;

				itemsContainer.appendChild(itemElement);
			}

			document.querySelector('.loader').style.display = 'none';
		})
		.catch(error => {
			console.error('Error fetching currency data:', error);

			document.querySelector('.loader').style.display = 'none';
		});
}

fetchCurrencyData();