import './style.css';
import { addFormButtonDomManipulation, submitFormButtonPressed, toggleDoneButton } from './buttons';
import { popUpTaskDomAdd, taskDomAdd } from './TaskDomManipulation';


let addTaskButton = document.querySelector('.addButton');
let newTask;
let taskList = [];
let taskListFromStorage = [];
let taskLog = document.querySelector('.taskLog');
let doneLog = document.querySelector('.doneLog');
let dueLog = document.querySelector('.dueLog');
let priorityLog = document.querySelector('.priorityLog');
let deleteLog = document.querySelector('.deleteLog');
let taskPopUpContainer = document.querySelector('.taskPopUpContainer');

taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));

taskDomAdd(taskListFromStorage);

function deleteTaskListHTML() {
    taskLog.innerHTML = '';
    doneLog.innerHTML = '';
    dueLog.innerHTML = '';
    priorityLog.innerHTML = '';
    deleteLog.innerHTML = '';
}



//Brings up the add task form 
addTaskButton.addEventListener('click', () => {
    addTaskButton.disabled = true;
    deleteTaskListHTML();

    addFormButtonDomManipulation(); //from button.js
    
});

    

    document.addEventListener('click', function(event) {

        
        //submits form
        if (event.target && event.target.classList.contains('submitFormButton')) {

            event.preventDefault();
            
            newTask = submitFormButtonPressed(); //from button.js
            taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            taskListFromStorage.push(newTask);

            

            
           
            let removeForm = document.querySelector('form');
            removeForm.remove();
            
            taskDomAdd(taskListFromStorage);
            localStorage.setItem('taskList', JSON.stringify(taskListFromStorage));
            addTaskButton.disabled = false;

        }//Runs when cancel button is selected
        else if (event.target && event.target.classList.contains('formCancelButton')) {
            event.preventDefault();
            let removeForm = document.querySelector('form');
            removeForm.remove();
            taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            taskDomAdd(taskListFromStorage);
            addTaskButton.disabled = false;

        } //runs when button to toggle done or not is pressed.
        else if (event.target && event.target.classList.contains('doneButton')) {
            taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            let toggleButtonInt = Number(event.target.id);
            deleteTaskListHTML();
            if (taskListFromStorage[toggleButtonInt].done === false) {
                taskListFromStorage[toggleButtonInt].done = true;
                
                localStorage.setItem('taskList', JSON.stringify(taskListFromStorage));
                taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
                taskDomAdd(taskListFromStorage);
            }
            else if (taskListFromStorage[toggleButtonInt].done === true) {
                taskListFromStorage[toggleButtonInt].done = false;
                localStorage.setItem('taskList', JSON.stringify(taskListFromStorage));
                
                taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
                taskDomAdd(taskListFromStorage);
            }
        }// Will delete a task when the delete button is pressed
        else if (event.target && event.target.classList.contains('deleteButton')) {
            let deleteId = Number(event.target.id);
            taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            taskListFromStorage.splice(deleteId, 1);
            deleteTaskListHTML();
            taskDomAdd(taskListFromStorage);
            localStorage.setItem('taskList', JSON.stringify(taskListFromStorage));
        }//will cause pop up window which displays all the info about the task
        else if (event.target && event.target.classList.contains('moreInfoButton')) {
            taskPopUpContainer.classList.toggle('show');
            taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            popUpTaskDomAdd(taskListFromStorage[(Number(event.target.id))]);

        }//Closes the taskList button
        else if (event.target && event.target.classList.contains('closeButton')) {
            
            taskPopUpContainer.classList.toggle('show');
        }
    });

   
          














