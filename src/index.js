import './style.css';
import { addFormButtonDomManipulation, submitFormButtonPressed } from './buttons';
import { taskDomAdd } from './TaskDomManipulation';


let addTaskButton = document.querySelector('.addButton');
let newTask;
let taskList = [];
let taskLog = document.querySelector('.taskLog');
let dueLog = document.querySelector('.dueLog');
let priorityLog = document.querySelector('.priorityLog');
let deleteLog = document.querySelector('.deleteLog');






//Brings up the add task form 
addTaskButton.addEventListener('click', () => {
    addTaskButton.disabled = true;
    taskLog.innerHTML = '';
    dueLog.innerHTML = '';
    priorityLog.innerHTML = '';
    deleteLog.innerHTML = '';

    addFormButtonDomManipulation(); //from button.js
    
});

    

    document.addEventListener('click', function(event) {

        
        //submits form
        if (event.target && event.target.classList.contains('submitFormButton')) {

            event.preventDefault();
            
            newTask = submitFormButtonPressed(); //from button.js
            
            taskList.push(newTask);

            let removeForm = document.querySelector('form');
            removeForm.remove();

            taskDomAdd(taskList);
            addTaskButton.disabled = false;

        }
        else if (event.target && event.target.classList.contains('formCancelButton')) {
            event.preventDefault();
            let removeForm = document.querySelector('form');
            removeForm.remove();
            taskDomAdd(taskList);
            addTaskButton.disabled = false;

        }
    });

   
          














