import './style.css';

import Category from './modules/category.js';
import Task from './modules/task.js';
import TaskController from './controllers/taskController.js';
import CategoryController from './controllers/categoryController.js';
import { getCAT } from './modules/localStorage.js';

console.log(getCAT());

let task1 = new Task("milk cows");
let task2 = new Task("rescue cats");

console.log(getCAT());

