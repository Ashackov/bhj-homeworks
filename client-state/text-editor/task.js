const editor = document.getElementById('editor');
const clearButton = document.getElementById('clearButton');

editor.addEventListener('input', function() {
	const text = editor.value;
	localStorage.setItem('editorText', text);
});

window.addEventListener('load', function() {
	const savedText = localStorage.getItem('editorText');
	if (savedText) {
		editor.value = savedText;
	}
});

clearButton.addEventListener('click', function() {
	editor.value = '';
	localStorage.removeItem('editorText');
});