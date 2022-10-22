const addTaskBtn = document.querySelector(".add_task_btn");
const text = document.querySelector("#input_text");
const inCompleteTask = document.querySelector(".incomplete_task");
const completeTask = document.querySelector(".complete_task");
const removeBtn = document.querySelectorAll(".remove-btn");
const deleteBtn = document.querySelectorAll(".delete");
const checkbox = document.querySelectorAll("input[type=checkbox]");

function addTask() {
  let element = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.onclick = addCompleteTask;
  checkbox.type = "checkbox";
  let rmBtn = document.createElement("input");
  rmBtn.className = "remove-btn";
  rmBtn.type = "button";
  rmBtn.onclick = remove;
  rmBtn.value = "Remove";
  let label = document.createElement("label");
  label.className = "label";
  label.innerText = text.value;
  element.append(checkbox, label, rmBtn);
  if (text.value) {
    inCompleteTask.appendChild(element);
    text.value = "";
  }
}

function addCompleteTask() {
  let task = this.nextElementSibling;
  task.style.textDecoration = "line-through";
  let element = document.createElement("div");
  let dbtn = document.createElement("input");
  dbtn.className = "delete";
  dbtn.type = "button";
  dbtn.value = "Delete";
  dbtn.onclick = remove;
  element.append(task, dbtn);
  this.parentElement.remove();
  completeTask.appendChild(element);
}

function remove() {
  this.parentElement.remove();
}

addTaskBtn.addEventListener("click", addTask);

for (let i = 0, length = removeBtn.length; i < length; i++) {
  removeBtn[i].addEventListener("click", remove);
  checkbox[i].addEventListener("click", addCompleteTask);
}

for (let i = 0, length = deleteBtn.length; i < length; i++) {
  deleteBtn[i].addEventListener("click", remove);
}
