const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
	const valueElement = dropdown.querySelector('.dropdown__value');
	const listElement = dropdown.querySelector('.dropdown__list');

	valueElement.addEventListener('click', () => {
		listElement.classList.toggle('dropdown__list_active');
	});

	const options = dropdown.querySelectorAll('.dropdown__link');
	options.forEach((option) => {
		option.addEventListener('click', (event) => {
			event.preventDefault();
			const selectedValue = option.textContent;
			valueElement.textContent = selectedValue;
			listElement.classList.remove('dropdown__list_active');
		});
	});
});