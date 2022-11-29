
// TODO create a data base
const tasks = [];
const numberOfTasks = tasks.length;

// TODO create an object to hold task state
class Task {
    constructor(name, done=false) {
        this.name = name;
        this.done = done;
    }
}
// Listen to enter to create new Task

document.getElementById('input-task').addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        const currentInput = document.getElementById('input-task');
        const currentTask = new Task(currentInput.value);
        tasks.push(currentTask);
        localStorage.setItem(currentTask.name, currentTask.done);
        updateTask(currentTask);

    }
});

// Create task div

function createTask(task) {
    // li
    const taskLi = document.createElement('li');
    taskLi.classList.add('task-item');
    // div 
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('view');
    // checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('toggle');
    // label
    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'check-box');
    taskLabel.innerHTML = task;
    // button
    const destroyButton = document.createElement("button");
    destroyButton.classList.add('destroy');
    // appending children
    function appendTask() {
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(taskLabel);
        taskContainer.appendChild(destroyButton);
        taskLi.appendChild(taskContainer);
        document.getElementById('task-list').appendChild(taskLi);  
        }
    appendTask();
    }

function tasksAviliable() {
    document.querySelector('#footer').style.display = 'block';
    document.querySelector('#main-sec').style.display = 'block';
}

function updateTask(task) {
    tasksAviliable();
    createTask(task.name);
    // document.querySelector('#input-task').textContent = '';
    console.log(document.querySelector('#input-task').value);
    document.querySelector('#input-task').value = 'g';
    console.log(document.querySelector('#input-task').value);
}

function appInit() {
    localStorage.clear();
    document.querySelector('#footer').style.display = 'none';
    document.querySelector('#main-sec').style.display = 'none';
    document.querySelector('#li-demo').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', appInit);


// TODO 1 "Clear completed" apperears when at least 1 task "crossed"
// TODO 2 ON refresh data stays 
// TODO 3 when first task inserted "All", "Active" and "cCompleted buttons appear" 
// TODO 4 task html stracture: ul, li, div, input, label, destroy(x button)
// TODO 5 if there is no tesks tasks section and footer on display none