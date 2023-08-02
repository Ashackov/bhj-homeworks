document.addEventListener("DOMContentLoaded", function() {
	const tooltipElements = document.querySelectorAll(".has-tooltip");
	const tooltip = document.querySelector(".tooltip");
	let activeElement = null;

	tooltipElements.forEach((element) => {
		element.addEventListener("click", function(event) {
			event.preventDefault();

			if (activeElement === this) {
				tooltip.classList.remove("tooltip_active");
				activeElement = null;
			} else {
				const tooltipText = this.getAttribute("title");
				tooltip.textContent = tooltipText;
				tooltip.classList.add("tooltip_active");

				const rect = this.getBoundingClientRect();
				tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight - 10 + "px";
				tooltip.style.left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
				activeElement = this;
			}
		});
	});

	document.addEventListener("click", function(event) {
		if (!event.target.classList.contains("has-tooltip")) {
			tooltip.classList.remove("tooltip_active");
			activeElement = null;
		}
	});
});