function handleCheckboxInteractions(checkbox) {
	const nestedInterests = checkbox.parentNode.nextElementSibling;
	const nestedCheckboxes = nestedInterests.querySelectorAll('.interest__check');

	nestedCheckboxes.forEach((nestedCheckbox) => {
		nestedCheckbox.checked = checkbox.checked;
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const interestCheckboxes = document.querySelectorAll('.interest__check');

	interestCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener('change', () => {
			handleCheckboxInteractions(checkbox);
		});
	});
});