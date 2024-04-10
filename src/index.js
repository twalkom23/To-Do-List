import './style.css';
import { addFormButtonDomManipulation, submitFormButtonPressed, toggleDoneButton } from './buttons';
import { taskDomAdd } from './TaskDomManipulation';


let addTaskButton = document.querySelector('.addButton');
let newTask;
let taskList = [];
let taskLog = document.querySelector('.taskLog');
let doneLog = document.querySelector('.doneLog');
let dueLog = document.querySelector('.dueLog');
let priorityLog = document.querySelector('.priorityLog');
let deleteLog = document.querySelector('.deleteLog');
let taskPopUpContainer = document.querySelector('.taskPopUpContainer');
let closeButton

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
            
            taskList.push(newTask);

            let removeForm = document.querySelector('form');
            removeForm.remove();
            
            taskDomAdd(taskList);
            addTaskButton.disabled = false;

        }//Runs when cancel button is selected
        else if (event.target && event.target.classList.contains('formCancelButton')) {
            event.preventDefault();
            let removeForm = document.querySelector('form');
            removeForm.remove();
            taskDomAdd(taskList);
            addTaskButton.disabled = false;

        } //runs when button to toggle done or not is pressed.
        else if (event.target && event.target.classList.contains('doneButton')) {

            let toggleButtonInt = Number(event.target.id);
            deleteTaskListHTML();
            if (taskList[toggleButtonInt].done === false) {
                taskList[toggleButtonInt].done = true;
                
                taskDomAdd(taskList);
            }
            else if (taskList[toggleButtonInt].done === true) {
                taskList[toggleButtonInt].done = false;
                
                taskDomAdd(taskList);
            }
        }// Will delete a task when the delete button is pressed
        else if (event.target && event.target.classList.contains('deleteButton')) {
            let deleteId = Number(event.target.id);
            taskList.splice(deleteId, 1);
            deleteTaskListHTML();
            taskDomAdd(taskList);
        }//will cause pop up window which displays all the info about the task
        else if (event.target && event.target.classList.contains('moreInfoButton')) {
            console.log(taskList[event.target.id]);
            taskPopUpContainer.classList.toggle('show');

        }//Closes the taskList button
        else if (event.target && event.target.classList.contains('closeButton')) {
            console.log('close button pressed');
            taskPopUpContainer.classList.toggle('show');
        }
    });

   
          














