
// TODO  create a data base
const tasks = [];
const numberOfTasks = tasks.length;

// TODO  create an object to hold task state
class Task {
    constructor(name, done=false) {
        this.name = name;
        this.done = done;
        this.number = 0;
    }
}
// TODO  Listen to enter to create new Task

document.getElementById('input-task').addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        const currentInput = document.getElementById('input-task');
        const currentTask = new Task(currentInput.value);
        tasks.push(currentTask);
        localStorage.setItem(currentTask.name, currentTask.done);
        updateTask(currentTask);

    }
});

// TODO  Create task div

function createTask(task) {
    // li
    const taskLi = document.createElement('li');
    taskLi.classList.add('task-item');
    taskLi.setAttribute('id', `task-${localStorage.length}`);
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
    destroyButton.setAttribute('id', `btn-${localStorage.length}`);
    
// TODO  add event listener to the destroy button
    destroyButton.addEventListener('click', (evt) => {
        const taskList = document.getElementById('task-list');
        const taskNumberToRemove = evt.target.id.split('-')[1];
        const taskToRemove = document.getElementById(`task-${taskNumberToRemove}`);
        console.log(taskToRemove)
        taskList.removeChild(taskToRemove);
        // localStorage.removeItem('')
        
    });
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
    
    document.querySelector('#input-task').value = '';
}

function appInit() {
    localStorage.clear();
    document.querySelector('#footer').style.display = 'none';
    document.querySelector('#main-sec').style.display = 'none';
    document.querySelector('#li-demo').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', appInit);




function destroyTask(evt) {
    const taskList = document.getElementById('task-list');
    const taskToRemove = evt.id;
    console.log(evt.id);
}
// TODO  remove localStorage clearing in initiaixation
// TODO  addEventListener to before unload, then push all tasks to localstorage
// TODO  Initialize the page with localstorage tasks
// TODO  keep "items left" updated
// TODO Create an object to hold task list state with fields: all, completed, left]
// TODO think of a better way to store in local storage, i.e (task num, task obj)
// TODO Modify to destroy btn func to remove from the local storage

// APP behaivor  APP behaivor  "Clear completed" apperears when at least 1 task "crossed"
// APP behaivor  ON refresh data stays 
// APP behaivor  when first task inserted "All", "Active" and "cCompleted buttons appear" 
// APP details  task html stracture: ul, li, div, input, label, destroy(x button)
// APP behaivor  if there is no tesks tasks section and footer on display none
