document.addEventListener("DOMContentLoaded", function() {
  let modalMain = document.getElementById("modal_main");
  let modalSuccess = document.getElementById("modal_success");
  let closeButton = document.querySelectorAll(".modal__close");
  let showSuccessButton = document.querySelector(".show-success");

  modalMain.classList.add("modal_active");

  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function() {
      let modal = this.closest(".modal");
      modal.classList.remove("modal_active");
    });
  }

  showSuccessButton.addEventListener("click", function(event) {
    event.preventDefault();
    modalSuccess.classList.add("modal_active");
  });
});
