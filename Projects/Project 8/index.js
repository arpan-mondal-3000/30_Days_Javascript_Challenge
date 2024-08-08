function showTasks() {
  if (localStorage.getItem("tasks")) {
    const storedTasks = localStorage.getItem("tasks");
    const tasks = JSON.parse(storedTasks);

    const list = document.querySelector("#task-list");
    list.innerHTML = "";
    tasks.forEach((value) => {
      const newTask = document.createElement("li");
      newTask.id = value.id;
      value.isComplete
        ? (newTask.className = "complete")
        : (newTask.className = "incomplete");
      newTask.innerHTML = `
            <div class="task">
               <input type="checkbox" name="${value.id}" id="task-toggle" ${
        value.isComplete ? "checked" : ""
      }/>
               <label for="${
                 value.id
               }" id="task-content" style="text-decoration: ${
        value.isComplete ? "line-through" : "none"
      }">${value.task}</label>
            </div>
            <div class="options">
              ${
                value.isComplete
                  ? ""
                  : `<button class="edit" name="${value.id}">✏️</button>`
              }
               <button name="${value.id}" class="delete">❌</button>
            </div>
       `;
      list.appendChild(newTask);
    });
  }
}
// Showing tasks from localStorage whenever the app starts
showTasks();

function addTask(task) {
  if (localStorage.getItem("tasks")) {
    // Adding the task to localStorage
    const storedTasks = localStorage.getItem("tasks");
    const tasks = JSON.parse(storedTasks);
    const id = Date.now();
    tasks.push({ id: id, task: task, isComplete: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // Adding the task to the DOM
    const list = document.querySelector("#task-list");
    const newTask = document.createElement("li");
    newTask.id = id;
    newTask.className = "incomplete";
    newTask.innerHTML = `
            <div class="task">
               <input type="checkbox" name="${id}" id="task-toggle"/>
               <label for="${id}" id="task-content">${task}</label>
            </div>
            <div class="options">
               <button class="edit" name="${id}">✏️</button>
               <button name="${id}" class="delete">❌</button>
            </div>
       `;
    list.appendChild(newTask);
  } else {
    localStorage.setItem("tasks", "[]");
    addTask(task);
  }
}

function removeTask(id) {
  if (localStorage.getItem("tasks")) {
    // Removing task from localStorage
    const storedTasks = localStorage.getItem("tasks");
    const tasks = JSON.parse(storedTasks);
    const newTasks = tasks.filter((task) => task.id !== Number(id));
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    // Removing task from DOM
    const list = document.querySelector("#task-list");
    const taskToRemove = document.getElementById(id);
    list.removeChild(taskToRemove);
  }
}

function toggleTaskCompletion(id) {
  // Toggling task completion in localStorage and reflecting it in DOM
  const storedTasks = localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  const newTasks = tasks.map((task) => {
    if (task.id === Number(id)) {
      task.isComplete = !task.isComplete;
      const domTask = document.getElementById(id);
      const label = domTask.childNodes[1].childNodes[3];

      const options = domTask.childNodes[3];
      if (task.isComplete) {
        domTask.style.backgroundColor = "#22C55E";
        label.style.textDecoration = "line-through";
        const editBtn = options.childNodes[1];
        const textNode = options.childNodes[0];
        options.removeChild(editBtn);
        options.removeChild(textNode);
      } else {
        domTask.style.backgroundColor = "#ffa153";
        label.style.textDecoration = "none";
        const newEditBtn = document.createElement("button");
        newEditBtn.className = "edit";
        newEditBtn.innerHTML = "✏️";
        newEditBtn.name = id;
        options.insertBefore(newEditBtn, options.firstChild);
        options.insertBefore(document.createTextNode(""), options.firstChild);
      }
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

function editTask(id, editedTask) {
  console.log("first");
  const storedTasks = localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  const newTasks = tasks.map((task) => {
    if (task.id === Number(id)) {
      task.task = editedTask;
      const domTask = document.getElementById(id);
      domTask.childNodes[1].childNodes[3].textContent = editedTask;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  console.log("last");
}

// Registering tasks from HTML form
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value;
  taskInput.value = "";
  // Adding the task to the localStorage and DOM
  addTask(task);
});

const taskArea = document.querySelector("#task-list");
taskArea.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    toggleTaskCompletion(e.target.name);
  }
  if (e.target.tagName === "BUTTON" && e.target.className === "delete") {
    removeTask(e.target.name);
  }
  if (e.target.tagName === "BUTTON" && e.target.className === "edit") {
    const editedTask = prompt("Edit your task");

    if (editedTask !== null && editedTask.trim() !== "") {
      editTask(e.target.name, editedTask);
    }
  }
});
