var addButton = document.getElementById("addButton");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value !== "") {
    var newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);

    newTask.appendChild(deleteButton);
    newTask.addEventListener("click", toggleTask);
    taskList.appendChild(newTask);

    taskInput.value = "";
  }
}

function toggleTask() {
  this.classList.toggle("completed");
}

function deleteTask() {
  this.parentElement.remove();
}
