import Category from '../modules/category.js';
import Task from '../modules/task.js';
import { getCAT, updateCAT } from '../modules/localStorage.js';

const CATEGORIES = "categories";
const DEFAULT = "General";

const TaskController = (() => {
    const insertTask = (categoryName, task) => {
        let categories = getCAT();
        let category = categories[categoryName];
        if (category !== undefined)
        {
            category.addTask(task);
            updateCAT(categories);
        }
        else
        {
            console.log(`Category '${categoryName}' does not exist.`);
        }
    };

    const deleteTask = (categoryName, task) => {
        let categories = getCAT();
        let category = categories[categoryName];
        if (category !== undefined)
        {
            category.removeTask(task);
            updateCAT(categories);
        }
        else
        {
            console.log(`Category '${categoryName}' does not exist.`)
        }
    };

    return {
        insertTask,
        deleteTask,
    };
})();

export default TaskController;