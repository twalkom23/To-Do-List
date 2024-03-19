import './style.css';
import { TaskObject } from './object';

const mainToDoList = document.querySelector('.mainToDoList');
const addTaskButton = document.querySelector('.addButton');

addTaskButton.addEventListener('click', () => {
    let addTaskForm = document.createElement('form');
    //task input
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskLabelDiv');
    let taskLabel = document.createElement('label');
    let task = document.createElement('input');
    taskLabel.setAttribute('for', 'task');
    taskLabel.textContent = 'Task: ';
    task.setAttribute('type', 'text');
    task.setAttribute('id', 'task');
    task.setAttribute('name', 'taskDescription');
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(task);
    addTaskForm.appendChild(taskDiv);

    //due date input
    let dueDiv = document.createElement('div');
    dueDiv.setAttribute('class', 'dueDiv');
    let dueLabel = document.createElement('label');
    let due = document.createElement('input');
    dueLabel.setAttribute('for', 'due');
    dueLabel.textContent = 'Due: ';
    due.setAttribute('type', 'text');
    due.setAttribute('id', 'due');
    due.setAttribute('name', 'dueDate');
    dueDiv.appendChild(dueLabel);
    dueDiv.appendChild(due);
    addTaskForm.appendChild(dueDiv);

    //priority Input
    let priorityDiv = createElement('div');
    let priorityHighDiv = createElement('div'); //append to prioritydiv
    let priorityMediumDiv = createElement('div'); //append to prioritydiv
    let priorityLowDiv = createElement('div'); //append to priority div
    let priorityLegend = createElement('legend');
    priorityLegend.textContent = 'Priority'; //append to priority div




    mainToDoList.appendChild(addTaskForm);
   
})





/*
<form method="post">
            <ul>
                <li>
                    <label for="task">Task</label>
                    <input type="text" id="task" name="taskDescription">
                </li>
                <li>
                    <label for="due">Due</label>
                    <input type="text" id="due" name="dueDate">
                </li>
                <li>
                    <div class="priorityChoice">
                        <legend>Priority</legend>
                        <div class="highPriority">
                            <label for="highPriority">High</label>
                            <input type="radio" id="highPriority" name="priority">
                        </div>
                    <div class="mediumPriorityChoice">
                        <label for="mediumPriority">Medium</label>
                        <input type= "radio" id="mediumPriority" name="priority">
                    </div>
                    <div class="lowPriorityChoice">
                        <label for="lowPriority">Low</label>
                        <input type= "radio" id="lowPriority" name="priority">
                    </div>  
                </li>
                <li>
                    <label for="notes">Notes</label>
                    <input type="text" id="notes" name="notes">
                </li>

            </ul>
        </form>
        */