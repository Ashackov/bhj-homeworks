function changeFontSize(event) {
	event.preventDefault();

	const selectedSize = event.target.dataset.size;
	const book = document.getElementById('book');
	const fontControls = document.querySelectorAll('.font-size');

	fontControls.forEach(control => {
		control.classList.remove('font-size_active');
	});

	event.target.classList.add('font-size_active');

	book.classList.remove('book_fs-big', 'book_fs-small');

	if (selectedSize === 'big') {
		book.classList.add('book_fs-big');
	} else if (selectedSize === 'small') {
		book.classList.add('book_fs-small');
	}

	localStorage.setItem('font-size', selectedSize);
}

document.addEventListener('DOMContentLoaded', () => {
	const selectedSize = localStorage.getItem('font-size') || 'normal';
	const fontControls = document.querySelectorAll('.font-size');

	fontControls.forEach(control => {
		control.classList.remove('font-size_active');
	});

	document.querySelector(`[data-size="${selectedSize}"]`).classList.add('font-size_active');

	const book = document.getElementById('book');
	book.classList.add(`book_fs-${selectedSize}`);
});

const fontControls = document.querySelectorAll('.font-size');
fontControls.forEach(control => {
	control.addEventListener('click', changeFontSize);
});