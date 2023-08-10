document.addEventListener("DOMContentLoaded", function() {
  const signinForm = document.getElementById("signin__form");
  const welcomeBlock = document.getElementById("welcome");
  const userIdSpan = document.getElementById("user_id");

  const savedUserId = localStorage.getItem("user_id");
  if (savedUserId) {
    userIdSpan.textContent = savedUserId;
    welcomeBlock.classList.add("welcome_active");
  }

  signinForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(signinForm);

    try {
      const response = await fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        const userId = data.user_id;

        localStorage.setItem("user_id", userId);

        userIdSpan.textContent = userId;
        welcomeBlock.classList.add("welcome_active");
	signinForm.style.display = "none";
      } else {
        alert("Неверный логин/пароль");
      }
    } catch (error) {
      console.error("Ошибка при авторизации", error);
    }
  });
});
