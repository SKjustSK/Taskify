import Category from '../modules/category.js';
import Task from '../modules/task.js';
import { getCAT, updateCAT } from '../modules/localStorage.js';

const CATEGORIES = "categories";
const DEFAULT = "General";

const CategoryController = (() => {
    const insertCategory = (categoryName) => {
        let categories = getCAT();
        if (categories[categoryName] === undefined)
        {
            categories[categoryName] = new Category();
            updateCAT(categories);
        }
        else
        {
            console.log(`Category '${categoryName}' already exists.`);
        }
    };

    const deleteCategory = (categoryName) => {
        let categories = getCAT();
        if (categories[categoryName] !== undefined)
        {
            delete categories[categoryName];
            updateCAT(categories);
        }
        else
        {
            console.log(`Category '${categoryName}' does not exist.`);
        }
    }

    return {
        insertCategory,
        deleteCategory,
    }
})();

export default CategoryController;