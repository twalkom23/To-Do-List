import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';
import { addFormButtonDomManipulation, submitFormButtonPressed, editTask, editSubmitButtonPressed, assignTasksToCategories, toggleCategoryButtonsColour } from './buttons';
import { editTaskDomAdd, popUpTaskDomAdd, taskDomAdd } from './TaskDomManipulation';


let addTaskButton = document.querySelector('.addButton');
let allTaskButton = document.querySelector('.allCategory');
let healthTaskButton = document.querySelector('.healthCategory');
let workTaskButton = document.querySelector('.workCategory');
let homeTaskButton = document.querySelector('.homeCategory');
let newTask;

let taskListFromStorage = [];
let healthTaskListFromStorage = [];
let workTaskListFromStorage = [];
let homeTaskListFromStorage = [];
let editLog = document.querySelector('.editLog');
let taskLog = document.querySelector('.taskLog');
let doneLog = document.querySelector('.doneLog');
let dueLog = document.querySelector('.dueLog');
let priorityLog = document.querySelector('.priorityLog');
let deleteLog = document.querySelector('.deleteLog');
let taskPopUpContainer = document.querySelector('.taskPopUpContainer');

taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));


taskDomAdd(taskListFromStorage);

function deleteTaskListHTML() {
    editLog.innerHTML = '';
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
            assignTasksToCategories(taskListFromStorage);
          
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
                assignTasksToCategories(taskListFromStorage);
                taskDomAdd(taskListFromStorage);
            }
            else if (taskListFromStorage[toggleButtonInt].done === true) {
                taskListFromStorage[toggleButtonInt].done = false;
                localStorage.setItem('taskList', JSON.stringify(taskListFromStorage));
                taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
                assignTasksToCategories(taskListFromStorage);
                taskDomAdd(taskListFromStorage);
            }
        }// Will delete a task when the delete button is pressed
        else if (event.target && event.target.classList.contains('deleteButton')) {
            let deleteId = Number(event.target.id);
            taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            taskListFromStorage.splice(deleteId, 1);
            deleteTaskListHTML();
            assignTasksToCategories(taskListFromStorage);
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
        else if (event.target && event.target.classList.contains('editButton')) {
            taskPopUpContainer.classList.toggle('show');
            let editId = Number(event.target.id);
            editTask(editId);
        }
        else if (event.target && event.target.classList.contains('submitEditForm')) {
            event.preventDefault();
            let editId = Number(event.target.id);
            editSubmitButtonPressed(editId);
            taskPopUpContainer.classList.toggle('show');
            let taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
            deleteTaskListHTML();
            taskDomAdd(taskListFromStorage);
        }
    });



    //catergory buttons on top of webpage event listeners
    allTaskButton.addEventListener('click', () => {
        deleteTaskListHTML();
        taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
        taskDomAdd(taskListFromStorage);
        toggleCategoryButtonsColour();
    });
    healthTaskButton.addEventListener('click', () => {
        deleteTaskListHTML();
        healthTaskListFromStorage = JSON.parse(localStorage.getItem('healthTaskList'));
        taskDomAdd(healthTaskListFromStorage);
        toggleCategoryButtonsColour();
    });
    workTaskButton.addEventListener('click', () => {
        deleteTaskListHTML();
        workTaskListFromStorage = JSON.parse(localStorage.getItem('workTaskList'));
        taskDomAdd(workTaskListFromStorage);
        toggleCategoryButtonsColour();
    });
    homeTaskButton.addEventListener('click', () => {
        deleteTaskListHTML();
        homeTaskListFromStorage = JSON.parse(localStorage.getItem('homeTaskList'));
        taskDomAdd(homeTaskListFromStorage);
        toggleCategoryButtonsColour();
    });
    




   
          














