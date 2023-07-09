document.addEventListener("DOMContentLoaded", function() {
	const prevButton = document.querySelector(".slider__arrow_prev");
	const nextButton = document.querySelector(".slider__arrow_next");
	const dots = Array.from(document.querySelectorAll(".slider__dot"));
	const slideItems = Array.from(document.querySelectorAll(".slider__item"));
	const slideCount = slideItems.length;
	let activeIndex = 0;

	prevButton.addEventListener("click", function() {
		activeIndex = (activeIndex - 1 + slideCount) % slideCount;
		updateSlider();
	});

	nextButton.addEventListener("click", function() {
		activeIndex = (activeIndex + 1) % slideCount;
		updateSlider();
	});

	dots.forEach(function(dot, index) {
		dot.addEventListener("click", function() {
			activeIndex = index;
			updateSlider();
		});
	});

	function updateSlider() {
		slideItems.forEach(function(item, index) {
			item.classList.toggle("slider__item_active", index === activeIndex);
		});

		dots.forEach(function(dot, index) {
			dot.classList.toggle("slider__dot_active", index === activeIndex);
		});
	}
});
