document.addEventListener("DOMContentLoaded", function() {
    let modalMain = document.getElementById("subscribe-modal");
    let closeButton = document.querySelectorAll(".modal__close");
    let modalCookieName = "modalClosed";

    const isModalClosed = document.cookie.includes(modalCookieName);

    if (!isModalClosed) {
        modalMain.classList.add("modal_active");
    }

    for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", function() {
            let modal = this.closest(".modal");
            if (modal) {
                modal.classList.remove("modal_active");

                const expirationDate = new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000);
                document.cookie = `${modalCookieName}=true; expires=${expirationDate.toUTCString()}`;
            }
        });
    }
});
