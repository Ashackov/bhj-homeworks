document.addEventListener("DOMContentLoaded", function() {
	const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
	const submenus = Array.from(document.querySelectorAll(".menu_sub"));

	menuLinks.forEach(function(link) {
		link.addEventListener("click", function(event) {
			event.preventDefault();

			const submenu = this.nextElementSibling;

			if (submenu && submenu.classList.contains("menu")) {
				submenus.forEach(function(item) {
					if (item !== submenu) {
						item.classList.remove("menu_active");
					}
				});

				submenu.classList.toggle("menu_active");
			}

			if (submenu) {
				return false;
			}
		});
	});
});