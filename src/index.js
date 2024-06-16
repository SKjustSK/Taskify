import './style.css';

import Task from './modules/task.js';
import Category from './modules/category.js';

import TaskController from './controllers/taskController.js';
import CategoryController from './controllers/categoryController.js';
import DOMController from './controllers/DOMController.js';

import { getCAT, updateCAT } from './modules/localStorage.js';

CategoryController.initialize_default_category();

addDummyTasks();

DOMController.load_navBar_categories();
// DOMController.load_mainContent_category("General");
// DOMController.load_mainContent_category("Fitness");
DOMController.load_mainContent_all();

console.log(getCAT());

function addDummyTasks () {
    let task1 = new Task("Milk Cows", "idk", new Date("2024-5-29"), "medium", false);
    let task2 = new Task("Go on a Walk", "idk", new Date("2024-5-18"), "high", false);
    let task3 = new Task("Finish Odin Project", "idk", new Date("2024-12-31"), "low", false);
    let task6 = new Task("Do this today too, but later", "idk", new Date("2024-5-16"), "medium", false);
    let task4 = new Task("Do this today", "idk", new Date("2024-5-16"), "high", false);
    let task5 = new Task("Go gym", "idk", new Date("2024-5-17"), "medium", false);

    TaskController.insertTask("General", task6);
    TaskController.insertTask("General", task1);
    TaskController.insertTask("General", task3);
    TaskController.insertTask("General", task4);
    
    CategoryController.insertCategory("Fitness");
    TaskController.insertTask("Fitness", task2);
    TaskController.insertTask("Fitness", task5);
}