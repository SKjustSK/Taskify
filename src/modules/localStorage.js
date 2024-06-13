import Category from './category.js';
import Task from './task.js';

const CATEGORIES = "categories";

// localStorage get and set
// CAT = Categories and Tasks
function updateCAT(categories) 
{
    localStorage.setItem(CATEGORIES, JSON.stringify(categories));
}

function getCAT()
{
    let categories = JSON.parse(localStorage.getItem(CATEGORIES));
    for (let key in categories)
    {
        let categoryData = categories[key];
        let category = new Category();
        category.tasks = categoryData.tasks.map(task => new Task(task.title, task.description, task.deadline, task.priority, task.completion));
        categories[key] = category;
    }
    return categories;
}

export {getCAT, updateCAT};

