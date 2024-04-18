import { TaskObject } from "./object";
import { popUpTaskInnerHtml } from "./TaskDomManipulation";


 
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

export function editTask (numberId) {
    popUpTaskInnerHtml();
    let popUpTaskEditContainer = document.querySelector('.popUpTask');
    let taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
    let editTaskForm = document.createElement('form');

    //edit task input
    let editTaskDiv = document.createElement('div');
    editTaskDiv.setAttribute('class', 'EditTaskLabelDiv');
   
    let editTaskLabel = document.createElement('label');
    editTaskLabel.setAttribute('for', 'task' + numberId);
    editTaskLabel.textContent = 'Task: ';

    let editTaskInput = document.createElement('input');
    editTaskInput.setAttribute('type', 'text');
    editTaskInput.setAttribute('id', 'task' + numberId);
    editTaskInput.setAttribute('name', 'editTaskVar');
    editTaskInput.setAttribute('value', taskListFromStorage[numberId].task);

    editTaskDiv.appendChild(editTaskLabel);
    editTaskDiv.appendChild(editTaskInput);
    editTaskForm.appendChild(editTaskDiv);



    //edit due date 
    let editDueDateDiv = document.createElement('div');
    editDueDateDiv.setAttribute('class', 'editDueDateDiv');

    let editDueDateLabel = document.createElement('label');
    editDueDateLabel.setAttribute('for', 'date' + numberId);
    editDueDateLabel.textContent = 'Due Date: ';

    let editDueDateInput = document.createElement('input');
    editDueDateInput.setAttribute('type', 'date');
    editDueDateInput.setAttribute('id', 'date' + numberId);
    editDueDateInput.setAttribute('name', 'editDueDateVar');
    editDueDateInput.setAttribute('value', taskListFromStorage[numberId].dueDate);

    editDueDateDiv.appendChild(editDueDateLabel);
    editDueDateDiv.appendChild(editDueDateInput);
    editTaskForm.appendChild(editDueDateDiv);



    //edit priority 
    let editPriorityDiv = document.createElement('div'); 
    let editPriorityHighDiv = document.createElement('div'); 
    let editPriorityMediumDiv = document.createElement('div'); 
    let editPriorityLowDiv = document.createElement('div');
    editPriorityDiv.setAttribute('class', 'editPriorityDiv'); 
    let editPriorityLegend = document.createElement('legend');
    editPriorityLegend.textContent = 'Priority';
    
    //edit high priority
    let editPriorityHighLabel = document.createElement('label');
    editPriorityHighLabel.setAttribute('for', 'highPriority' + numberId);
    editPriorityHighLabel.textContent = 'High';
    

    let editPriorityHighInput = document.createElement('input');
    editPriorityHighInput.setAttribute('type', 'radio');
    editPriorityHighInput.setAttribute('id', 'highPriority' + numberId);
    editPriorityHighInput.setAttribute('name', 'editPriorityVar');
    editPriorityHighInput.setAttribute('value', 'High');
    
    //edit medium priority
    let editPriorityMediumLabel = document.createElement('label');
    editPriorityMediumLabel.setAttribute('for', 'mediumPriority' + numberId);
    editPriorityMediumLabel.textContent = 'Medium';
    
    let editPriorityMediumInput = document.createElement('input');
    editPriorityMediumInput.setAttribute('type', 'radio');
    editPriorityMediumInput.setAttribute('id', 'mediumPriority' + numberId);
    editPriorityMediumInput.setAttribute('name', 'editPriorityVar');
    editPriorityMediumInput.setAttribute('value', 'Medium');
    //edit low priority
    let editPriorityLowLabel = document.createElement('label'); 
    editPriorityLowLabel.setAttribute('for', 'lowPriority' + numberId);
    editPriorityLowLabel.textContent = 'Low';
    
    let editPriorityLowInput = document.createElement('input'); 
    editPriorityLowInput.setAttribute('type', 'radio');
    editPriorityLowInput.setAttribute('id', 'lowPriority' + numberId);
    editPriorityLowInput.setAttribute('name', 'editPriorityVar');
    editPriorityLowInput.setAttribute('value', 'Low');

    //an if else statement to see which option needs to be checked to begin with
    if (taskListFromStorage[numberId].priority === 'High') {
        editPriorityHighInput.checked = true;
    }
    else if (taskListFromStorage[numberId].priority === 'Medium') {
        editPriorityMediumInput.checked = true;
    }
    else if (taskListFromStorage[numberId].priority === 'Low') {
        editPriorityLowInput.checked = true;
    }
    
    //appending all the priority fields for the radio button
    editPriorityDiv.appendChild(editPriorityLegend);
    editPriorityHighDiv.appendChild(editPriorityHighLabel);
    editPriorityHighDiv.appendChild(editPriorityHighInput);
    editPriorityDiv.appendChild(editPriorityHighDiv);
    editPriorityMediumDiv.appendChild(editPriorityMediumLabel);
    editPriorityMediumDiv.appendChild(editPriorityMediumInput);
    editPriorityDiv.appendChild(editPriorityMediumDiv);
    editPriorityLowDiv.appendChild(editPriorityLowLabel);
    editPriorityLowDiv.appendChild(editPriorityLowInput);
    editPriorityDiv.appendChild(editPriorityLowDiv);
    editTaskForm.appendChild(editPriorityDiv); 

    //notes edit form
    let editNotesDiv = document.createElement('div');
    editNotesDiv.setAttribute('class', 'editNotesDiv');
    let editNotesLabel = document.createElement('label');
    editNotesLabel.setAttribute('for', 'editNotes' + numberId);
    editNotesLabel.textContent = 'Notes: ';

    let editNotesInput = document.createElement('textarea');
    editNotesInput.setAttribute('type', 'text');
    editNotesInput.setAttribute('id', 'editNotes' + numberId);
    editNotesInput.setAttribute('name', 'editNotesVar');
    editNotesInput.value = taskListFromStorage[numberId].notes;

    editNotesDiv.appendChild(editNotesLabel);
    editNotesDiv.appendChild(editNotesInput);
    editTaskForm.appendChild(editNotesDiv);
    
    //Submit button for edit form
    let editFormSubmit = document.createElement('div');

    let editFormSubmitButton = document.createElement('button');
    editFormSubmitButton.setAttribute('class', 'submitEditForm');
    editFormSubmitButton.setAttribute('id', numberId);
    editFormSubmitButton.setAttribute('type', 'submit');
    editFormSubmitButton.textContent = 'Edit Task';
    editFormSubmit.appendChild(editFormSubmitButton);
    editTaskForm.appendChild(editFormSubmit);
    
    //appending form to pop up div
    popUpTaskEditContainer.appendChild(editTaskForm);
}

export function editSubmitButtonPressed(numberId) {
    let taskListFromStorage = JSON.parse(localStorage.getItem('taskList'));
    //changing the task
    let task = document.getElementById('task' + numberId).value;
    taskListFromStorage[numberId].task = task;

    //changing the date
    let date = document.getElementById('date' + numberId).value;
    taskListFromStorage[numberId].dueDate = date;

    //changing the priority
    let radioButtons = document.querySelectorAll('input[type="radio"][name="editPriorityVar"]');
    radioButtons.forEach ((radioButton) => {
        if (radioButton.checked) {
            let selectedValue = radioButton.value;
            taskListFromStorage[numberId].priority = selectedValue;
        }
    })
    //Changing the notes
    let notes = document.getElementById('editNotes' + numberId).value;
    taskListFromStorage[numberId].notes = notes;


    localStorage.setItem('taskList', JSON.stringify(taskListFromStorage));
    
}
