document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task__input");
  const addButton = document.getElementById("tasks__add");
  const taskList = document.getElementById("tasks__list");

  function addTask() {
    const taskTitle = taskInput.value.trim();
    if (taskTitle !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");

      const taskTitleDiv = document.createElement("div");
      taskTitleDiv.classList.add("task__title");
      taskTitleDiv.textContent = taskTitle;

      const removeButton = document.createElement("a");
      removeButton.href = "#";
      removeButton.classList.add("task__remove");
      removeButton.innerHTML = "&times;";

      taskDiv.appendChild(taskTitleDiv);
      taskDiv.appendChild(removeButton);
      taskList.appendChild(taskDiv);

      taskInput.value = "";
    }
  }

  function removeTask(event) {
    if (event.target.classList.contains("task__remove")) {
      const taskDiv = event.target.parentElement;
      taskList.removeChild(taskDiv);
    }
  }

  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
  });

  taskList.addEventListener("click", removeTask);
});
