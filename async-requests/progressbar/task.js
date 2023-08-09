const uploadForm = document.getElementById('form');
const progressBar = document.getElementById('progress');

uploadForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const formData = new FormData(uploadForm);

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

	xhr.upload.onprogress = function(event) {
		if (event.lengthComputable) {
			const percent = (event.loaded / event.total) * 100;
			progressBar.value = percent;
		}
	};

	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('Файл загружен.');
			progressBar.value = 100;
		} else {
			console.error('Ошибка при загрузке', xhr.statusText);
		}
	};

	xhr.onerror = function() {
		console.error('Ошибка при отправке запроса.');
	};

	xhr.send(formData);
});