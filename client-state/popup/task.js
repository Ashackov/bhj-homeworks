document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = modal.querySelector(".modal__close");
    const modalCookieName = "modalClosed";

    const isModalClosed = document.cookie.includes(modalCookieName);

    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }

    closeButton.addEventListener("click", function() {
        modal.classList.remove("modal_active");

        const expirationDate = new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000);
        document.cookie = `${modalCookieName}=true; expires=${expirationDate.toUTCString()}`;
    });
});
