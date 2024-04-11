
const taskLog = document.querySelector('.taskLog');
const doneLog = document.querySelector('.doneLog');
const dueLog = document.querySelector('.dueLog');
const priorityLog = document.querySelector('.priorityLog');
const deleteLog = document.querySelector('.deleteLog');
const popUpTask = document.querySelector('.popUpTask');
const popUpDue = document.querySelector('.popUpDue');
const popUpPriority = document.querySelector('.popUpPriority');
const popUpNotes = document.querySelector('.popUpNotes');







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
//populates the pop up with the task information that is clicked on
export function popUpTaskDomAdd (object) {
    popUpTask.innerHTML = '';
    popUpDue.innerHTML = '';
    popUpPriority.innerHTML = '';
    popUpNotes.innerHTML = '';
    console.log(object);

   let taskPopUpInputHeader = document.createElement('h1');
   taskPopUpInputHeader.textContent = 'Task';
   let taskPopUpInput = document.createElement('p');
   taskPopUpInput.textContent = object.task;
   popUpTask.appendChild(taskPopUpInputHeader);
   popUpTask.appendChild(taskPopUpInput);

   let duePopUpInputHeader = document.createElement('h1');
   duePopUpInputHeader.textContent = 'Due Date';
   let duePopUpInput = document.createElement('p');
   duePopUpInput.textContent = object.dueDate;
   popUpDue.appendChild(duePopUpInputHeader);
   popUpDue.appendChild(duePopUpInput);

   let priorityPopUpInputHeader = document.createElement('h1');
   priorityPopUpInputHeader.textContent = 'Priority';
   let priorityPopUpInput = document.createElement('p');
   priorityPopUpInput.textContent = object.priority;
   popUpPriority.appendChild(priorityPopUpInputHeader);
   popUpPriority.appendChild(priorityPopUpInput);

   let notesPopUpInputHeader = document.createElement('h1');
   notesPopUpInputHeader.textContent = 'Notes';
   let notesPopUpInput = document.createElement('p');
   notesPopUpInput.textContent = object.notes;
   popUpNotes.appendChild(notesPopUpInputHeader);
   popUpNotes.appendChild(notesPopUpInput);
}