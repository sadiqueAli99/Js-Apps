const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();

  const task = taskInput.value;
  if (!task) return;

  const taskItem = document.createElement("li");
  taskItem.innerText = task;
  taskList.appendChild(taskItem);

  taskInput.value = "";
}
