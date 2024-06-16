import { getCAT } from "../modules/localStorage";
import DOM_constructors from "../modules/DOM_constructors";

const DOMController = (() => {

    // loads all category buttons under the 'My Category' section
    const load_navBar_categories = () => {
        const categoriesWrapper = document.querySelector('.categories-wrapper');
        
        let categories = getCAT();
        for (let key in categories)
        {
            let button = DOM_constructors.navbar_categoryItem(key); 
            categoriesWrapper.appendChild(button);
        }
    };

    const load_mainContent_category_title = (categoryName) => {
        const titleContainer = document.querySelector('.title-container');
        let mainContent_category_title = DOM_constructors.mainContent_category_title(categoryName);
        let deleteCategory_button = DOM_constructors.deleteCategory_button(categoryName);
        titleContainer.appendChild(mainContent_category_title);
        titleContainer.appendChild(deleteCategory_button);
    };  

    const load_category_tasks = (categoryName) => {
        const tasksContainer = document.querySelector('.tasks-container');

        const categories = getCAT();
        const category = categories[categoryName];
        const tasks = category.tasks;
        
        // sort tasks in ascending order alright
        for (let task of tasks)
        {
            let taskItem = DOM_constructors.taskItem(categoryName, task);
            tasksContainer.appendChild(taskItem.cloneNode(true));
        }
    }

    const load_mainContent_category = (categoryName) => {
        load_mainContent_category_title(categoryName);
        load_category_tasks(categoryName);
    };

    return {
        load_navBar_categories,
        load_mainContent_category,
    }
})();

export default DOMController;