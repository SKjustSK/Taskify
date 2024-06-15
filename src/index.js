import './style.css';

import Task from './modules/task.js';
import Category from './modules/category.js';

import TaskController from './controllers/taskController.js';
import CategoryController from './controllers/categoryController.js';
import default_initializer from './modules/default_initializer.js';
import { getCAT, updateCAT } from './modules/localStorage.js';
import load_navBar_categories from './loaders/navbar_category_loader.js';
import load_category_tasks from './loaders/category_tasks_loader.js';

default_initializer();

let task1 = new Task("Milk Cows", "idk", new Date("2024-5-29"), "medium", true);
let task2 = new Task("Go on a Walk", "idk", new Date("2024-5-18"), "high", true);

CategoryController.insertCategory("Fitness");
TaskController.insertTask("Fitness", task1);
TaskController.insertTask("Fitness", task2);

load_navBar_categories();
load_category_tasks("Fitness");

console.log(getCAT());

