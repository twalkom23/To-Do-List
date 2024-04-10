
const taskLog = document.querySelector('.taskLog');
const doneLog = document.querySelector('.doneLog');
const dueLog = document.querySelector('.dueLog');
const priorityLog = document.querySelector('.priorityLog');
const deleteLog = document.querySelector('.deleteLog');






export function taskDomAdd (object) {

    
    for (let i = 0; i < object.length; i++) {
        let taskInput = document.createElement('button');
        taskInput.setAttribute('class', 'moreInfoButton');
        taskInput.setAttribute('id', [i]);
        taskInput.textContent = object[i].task;
        taskLog.appendChild(taskInput);
        
        let doneInput = document.createElement('button');
        doneInput.setAttribute('class', 'doneButton');
        doneInput.setAttribute('id', [i]);
        if (object[i].done === false) {
            doneInput.textContent = ' ';
        }
        else if (object[i].done === true) {
            doneInput.textContent = 'Done';
        }
        doneLog.appendChild(doneInput);

        let dueInput = document.createElement('p');
        dueInput.textContent = object[i].dueDate;
        dueLog.appendChild(dueInput);

        let priorityInput = document.createElement('p');
        priorityInput.textContent = object[i].priority;
        priorityLog.appendChild(priorityInput);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.setAttribute('id', [i]);
        deleteButton.textContent = 'Del';
        deleteLog.appendChild(deleteButton);
        
    }

}