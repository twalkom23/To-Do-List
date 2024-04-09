import { TaskObject } from "./object";


 
export function addFormButtonDomManipulation() {
    const formAddTask = document.querySelector('.formAddTask');
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
    due.setAttribute('type', 'date');
    due.setAttribute('id', 'due');
    due.setAttribute('name', 'dueDate');
    dueDiv.appendChild(dueLabel);
    dueDiv.appendChild(due);
    addTaskForm.appendChild(dueDiv);

    //priority Input
    let priorityDiv = document.createElement('div'); 
    let priorityHighDiv = document.createElement('div'); 
    let priorityMediumDiv = document.createElement('div'); 
    let priorityLowDiv = document.createElement('div');
    priorityDiv.setAttribute('class', 'priorityDiv'); 
    
    let priorityLegend = document.createElement('legend');
    priorityLegend.textContent = 'Priority: '; 
    priorityDiv.appendChild(priorityLegend);
    
    let highPriorityLabel = document.createElement('label');
    let highPriority = document.createElement('input'); 
    highPriorityLabel.setAttribute('for', 'highPriority');
    highPriorityLabel.textContent = 'High';
    highPriority.setAttribute('type', 'radio');
    highPriority.setAttribute('id', 'highPriority');
    highPriority.setAttribute('name', 'priority');
    highPriority.setAttribute('value', 'highPriority');
    priorityHighDiv.appendChild(highPriorityLabel);
    priorityHighDiv.appendChild(highPriority);

    let mediumPriorityLabel = document.createElement('label');
    let mediumPriority = document.createElement('input'); 
    mediumPriorityLabel.setAttribute('for', 'mediumPriority');
    mediumPriorityLabel.textContent = 'Medium';
    mediumPriority.setAttribute('type', 'radio');
    mediumPriority.setAttribute('id', 'mediumPriority');
    mediumPriority.setAttribute('name', 'priority')
    mediumPriority.setAttribute('value', 'mediumPriority');
    priorityMediumDiv.appendChild(mediumPriorityLabel);
    priorityMediumDiv.appendChild(mediumPriority);

    let lowPriorityLabel = document.createElement('label');//append to priorityhighdiv
    let lowPriority = document.createElement('input'); //append to priorityhighdiv
    lowPriorityLabel.setAttribute('for', 'lowPriority');
    lowPriorityLabel.textContent = 'Low';
    lowPriority.setAttribute('type', 'radio');
    lowPriority.setAttribute('id', 'lowPriority');
    lowPriority.setAttribute('name', 'priority')
    lowPriority.setAttribute('value', 'lowPriority');
    priorityLowDiv.appendChild(lowPriorityLabel);
    priorityLowDiv.appendChild(lowPriority);

    priorityDiv.appendChild(priorityHighDiv);
    priorityDiv.appendChild(priorityMediumDiv);
    priorityDiv.appendChild(priorityLowDiv);
    addTaskForm.appendChild(priorityDiv);


    //notes
    let notesDiv = document.createElement('div');
    notesDiv.setAttribute('class', 'notesDiv');
    let notesLabel = document.createElement('label');
    let notes = document.createElement('textarea');
    notesLabel.setAttribute('for', 'notes');
    notesLabel.setAttribute('rows', '10');
    notesLabel.textContent = 'Notes: ';
    notes.setAttribute('type', 'text');
    notes.setAttribute('id', 'notes');
    notes.setAttribute('name', 'taskNotes');
    

    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notes);
    addTaskForm.appendChild(notesDiv);

    //button
    let formButtonsDiv = document.createElement('div');
    formButtonsDiv.setAttribute('class', 'formButtonsDiv');
    let formCancelButton = document.createElement('button');
    formCancelButton.setAttribute('class', 'formCancelButton');
    formCancelButton.textContent = 'Cancel';
    let submitFormButton = document.createElement('button');
    submitFormButton.setAttribute('class', 'submitFormButton');
    submitFormButton.setAttribute('type', 'submit');
    submitFormButton.textContent = 'Add Task';

    formButtonsDiv.appendChild(submitFormButton);
    formButtonsDiv.appendChild(formCancelButton);
    addTaskForm.appendChild(formButtonsDiv);


    formAddTask.appendChild(addTaskForm);


   
}

export function submitFormButtonPressed() {
            let priority;
            let task = document.getElementById('task').value;
            let done = false;
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
            
           
            let createdTask = new TaskObject(task, done, due, priority, notesUpdate);
            
            
            return createdTask;
}

