import Task from './task.js';

class Category {
    constructor (categoryName)
    {
        this.title = categoryName;
        this.tasks = [];
    }

    addTask (newTask)
    {
        for (let task of this.tasks)
        {
            if (task.isEqual(newTask))
            {
                console.log(`Task '${task.title}' already exists`);
                return;
            }
        }
        this.tasks.push(newTask);
    }

    removeTask (oldTask)
    {
        this.tasks = this.tasks.filter(task => !task.isEqual(oldTask));
    }
}

export default Category;

