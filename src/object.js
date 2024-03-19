//creating the object constructor
export function TaskObject(task, done, dueDate, priority, notes) {
    this.task = task;
    this.done = done;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

