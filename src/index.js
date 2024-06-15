import './style.css';

import Category from './modules/category.js';

import TaskController from './controllers/taskController.js';
import CategoryController from './controllers/categoryController.js';
import default_initializer from './modules/default_initializer.js';
import { getCAT, updateCAT } from './modules/localStorage.js';
import load_navBar_categories from './loaders/navbar_category_loader.js';

default_initializer();

CategoryController.insertCategory("Fitness");

console.log(getCAT());

load_navBar_categories();

