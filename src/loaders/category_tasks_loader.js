// Loads Category title and Category tasks

import {getCAT} from '../modules/localStorage.js';

const CATEGORIES = "General";

const categories = getCAT();

function load_title (categoryName) {

    // <div class="category-title">
    //     General
    // </div>

    // <button class="delete-category">
    //     <div class="icon-container"></div>  
    //     <div class="delete-text">Delete Category</div>
    // </button>

    const titleContainer = document.querySelector('.title-container');
    
    let categoryTitleDiv = document.createElement('div');
    categoryTitleDiv.classList.add('category-title');
    categoryTitleDiv.innerText = categoryName;
    
    titleContainer.appendChild(categoryTitleDiv);

    if (categoryName !== CATEGORIES)
    {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-category');

        let iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');

        let deleteText = document.createElement('div');
        deleteText.classList.add('delete-text');
        deleteText.innerText = `Delete ${categoryName}`;

        deleteButton.appendChild(iconContainer);
        deleteButton.appendChild(deleteText);
        
        titleContainer.appendChild(deleteButton);
    }
}

function create_taskItem (categoryName, task)
{
    // <div class="task-item">
    //     <div class="task-info">
    //         <input type="checkbox" name="task-completion" class="task-completion">
    //         <div class="task-title">Milk cows</div>
    //         <div class="priority-circle low"></div>
    //         <div class="edit-task-icon-container"></div>
    //         <div class="delete-task-icon-container"></div>
    //     </div>
    //     <div class="task-info-two">
    //         <div class="deadline">29/01/2024</div>
    //         <div class="task-category-indicator"># General</div>
    //     </div>
    // </div>

    let taskItem = document.createElement('div');
    taskItem.classList.add("task-item");

    let taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    let taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.name = "task-completion";
    taskCheckbox.classList.add('task-completion');

    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = task.title;

    let priorityCircle = document.createElement('div');
    priorityCircle.classList.add("priority-circle", task.priority);
    
    let editTask = document.createElement('div');
    editTask.classList.add("edit-task-icon-container");

    let deleteTask = document.createElement('div');
    deleteTask.classList.add("delete-task-icon-container");

    taskInfo.appendChild(taskCheckbox);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(priorityCircle);
    taskInfo.appendChild(editTask);
    taskInfo.appendChild(deleteTask);

    taskItem.appendChild(taskInfo);

    let taskInfoTwo = document.createElement('div');
    taskInfoTwo.classList.add('task-info-two');

    let deadline = document.createElement('div');
    deadline.classList.add('deadline');
    deadline.innerText = `${task.deadline.getDate()}-${task.deadline.getMonth()}-${task.deadline.getFullYear()}`;
    
    let taskCategory = document.createElement('div');
    taskCategory.classList.add("task-category-indicator");
    taskCategory.innerText = `# ${categoryName}`;

    taskInfoTwo.appendChild(deadline);
    taskInfoTwo.appendChild(taskCategory);

    taskItem.appendChild(taskInfoTwo);

    return taskItem;
}

function load_tasks (categoryName) {
    const tasksContainer = document.querySelector('.tasks-container');

    let category = categories[categoryName];
    let tasks = category.tasks;
    
    // sort tasks in ascending order alright
    for (let task of tasks)
    {
        let taskItem = create_taskItem(categoryName, task);
        tasksContainer.appendChild(taskItem.cloneNode(true));
    }
}

function load_category_tasks (categoryName) {

    if (categories[categoryName] == undefined)
    {
        console.log(`Category '${categoryName} does not exit'`);
        return;
    }

    load_title(categoryName);
    load_tasks(categoryName);
}

export default load_category_tasks;