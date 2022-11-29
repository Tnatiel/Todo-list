
// TODO create a data base
const tasks = [];
const numberOfTasks = tasks.length;
// TODO get input value
const currentTask = document.getElementById('task-input');
const currentTaskValue = currentTask.value;

// TODO create an object to hold task state
class Task {
    constructor(name, done=false) {
        this.name = name;
        this.done = done;
    }
}
// Listen to enter to create new Task

// 