
const taskLog = document.querySelector('.taskLog');
const dueLog = document.querySelector('.dueLog');
const priorityLog = document.querySelector('.priorityLog');
const deleteLog = document.querySelector('.deleteLog');





export function taskDomAdd (object) {

    
    for (let i = 0; i < object.length; i++) {
        let taskInput = document.createElement('p');
        taskInput.textContent = object[i].task;
        taskLog.appendChild(taskInput);
        
        

        let dueInput = document.createElement('p');
        dueInput.textContent = object[i].dueDate;
        dueLog.appendChild(dueInput);

        let priorityInput = document.createElement('p');
        priorityInput.textContent = object[i].priority;
        priorityLog.appendChild(priorityInput);

        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Del';
        deleteLog.appendChild(deleteButton);
        
    }

}