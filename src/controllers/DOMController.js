import { getCAT } from "../modules/localStorage";
import DOM_constructors from "../modules/DOM_constructors";

const DEFAULT = "General";
const categories = getCAT();

function priority_to_num (priority)
{
    if (priority === "high") {return 3;}
    else if (priority === "medium") {return 2;}
    else if (priority === "low") {return 1;}
    else {return 0;}
}

function sortDatesAsc (a, b) {
    if (a.deadline - b.deadline == 0)
    {
        let a_priority = priority_to_num(a.priority);
        let b_priority = priority_to_num(b.priority);
        return b_priority - a_priority;
    }
    return a.deadline - b.deadline;
} 

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

    // loads title and tasks of a given category
    const load_mainContent_category = (categoryName) => {
        load_mainContent_category_title(categoryName);
        load_category_tasks(categoryName);
    };

    // loads title "All" and all tasks
    const load_mainContent_all = () => {
        // title
        const titleContainer = document.querySelector('.title-container');
        let all_title = DOM_constructors.mainContent_title("All");
        titleContainer.appendChild(all_title);
        
        // tasks
        const tasksContainer = document.querySelector('.tasks-container');
        let all_tasks = [];
        for (let key in categories)
        {
            let category = categories[key];
            for (let task of category.tasks)
            {
                all_tasks.push(
                    {
                        "category": category.title,
                        "task": task,
                    }
                );
            }
        }
        // sorting dates in ascending order
        all_tasks.sort((a, b) => {
            return sortDatesAsc(a.task, b.task);
        });

        for (let task of all_tasks)
        {
            let taskItem = DOM_constructors.taskItem(task.category, task.task);
            tasksContainer.appendChild(taskItem.cloneNode(true));
        }
    };

    const load_mainContent_category_title = (categoryName) => {
        const titleContainer = document.querySelector('.title-container');
        let mainContent_category_title = DOM_constructors.mainContent_title(categoryName);
        titleContainer.appendChild(mainContent_category_title);

        if (categoryName !== DEFAULT)
        {
            let deleteCategory_button = DOM_constructors.deleteCategory_button(categoryName);
            titleContainer.appendChild(deleteCategory_button);
        }
    };  

    const load_category_tasks = (categoryName) => {
        const tasksContainer = document.querySelector('.tasks-container');

        const category = categories[categoryName];
        let tasks = category.tasks;
        
        // sorting dates in ascending order
        tasks.sort(sortDatesAsc);

        for (let task of tasks)
        {
            let taskItem = DOM_constructors.taskItem(categoryName, task);
            tasksContainer.appendChild(taskItem.cloneNode(true));
        }
    }

    return {
        load_navBar_categories,
        load_mainContent_category,
        load_mainContent_all,
    }
})();

export default DOMController;