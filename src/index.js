import './style.css';
import { TaskObject } from './object';
import { addFormButtonDomManipulation } from './buttons';

const addTaskButton = document.querySelector('.addButton');



//Brings up the add task form 
addTaskButton.addEventListener('click', () => {
    addFormButtonDomManipulation(); //from button.js
    
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('submitFormButton')) {
            let priority;
            let task = document.getElementById('task').value;
            let due = document.getElementById('due').value;
            let priorityChecker = document.querySelector('input[name="priority"]:checked').value;
            let notesUpdate = document.getElementById('notes').value;

            if (priorityChecker === 'highPriority') {
                priority = 'High';
            }
            else if (priorityChecker === 'mediumPriority') {
                priority = 'Medium';
            }
            else if (priorityChecker === 'lowPriority') {
                priority = 'Low'
            }
            else { priority = null; }

            let task1 = new TaskObject(task, due, priority, notesUpdate);

            alert(task1.task);
            alert(task1.dueDate);
            alert(task1.priority);
            alert(task1.notes);
            
        }
    })
})











