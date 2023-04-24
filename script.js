const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");
const clearCompletedButton = document.getElementById("clearCompletedButton");

let tasks = [];

const addTask = () => {
    const newTask = {
        id: Date.now(),
        description: newTaskInput.value,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    newTaskInput.value = "";
};

const renderTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const taskListItem = document.createElement("li");
        taskListItem.textContent = task.description;
        taskListItem.classList.add("task");

        if (task.completed) {
            taskListItem.classList.add("completed");
        } else {
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.classList.add("completeButton");
            completeButton.addEventListener("click", () => {
                completeTask(task.id);
            });
            taskListItem.appendChild(completeButton);
        }

        taskList.appendChild(taskListItem);
    });
};

const completeTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        renderTasks();
    }
};

const clearCompletedTasks = () => {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
};

addTaskButton.addEventListener("click", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);
