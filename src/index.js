import './style.css';
import { TaskObject } from './object';
import { addFormButtonDomManipulation } from './buttons';

const addTaskButton = document.querySelector('.addButton');

//Brings up the add task form 
addTaskButton.addEventListener('click', () => {
    addFormButtonDomManipulation(); //from button.js
})





