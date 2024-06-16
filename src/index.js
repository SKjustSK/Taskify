import './style.css';

import Task from './modules/task.js';
import Category from './modules/category.js';

import TaskController from './controllers/taskController.js';
import CategoryController from './controllers/categoryController.js';
import DOMController from './controllers/DOMController.js';

import { getCAT, updateCAT } from './modules/localStorage.js';

CategoryController.initialize_default_category();

let task1 = new Task("Milk Cows", "idk", new Date("2024-5-29"), "medium", true);
// let task2 = new Task("Go on a Walk", "idk", new Date("2024-5-18"), "high", true);

CategoryController.insertCategory("Fitness");
TaskController.insertTask("Fitness", task1);
// TaskController.insertTask("Fitness", task2);


DOMController.load_navBar_categories();
DOMController.load_mainContent_category("Fitness");

console.log(getCAT());


