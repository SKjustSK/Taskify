import { isSameWeek , isSameDay, isAfter , isBefore } from "date-fns";
import { getCAT } from "../modules/localStorage";
import CategoryController from "./categoryController";
import DOM_constructors from "../modules/DOM_constructors";

const DEFAULT = "General";

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
        clear_navbar_categories();
        const categoriesWrapper = document.querySelector('.categories-wrapper');
        
        const categories = getCAT();
        for (let key in categories)
        {
            let button = DOM_constructors.navbar_categoryItem(key); 
            categoriesWrapper.appendChild(button);
        }
    };
    // loads title and tasks of a given category
    const load_mainContent_category = (categoryName) => {
        let categories = getCAT();
        if (categories[categoryName] === undefined)
        {
            console.log(`Category ${categoryName} does not exist.`);
            return;
        }
        clear_mainContent();
        load_mainContent_category_title(categoryName);
        load_category_tasks(categoryName);
    };

    // loads common use buttons like "All", "Today", etc.
    // To add more, make sure to add the (commonUseName) in load_navBar_commonUse and (commonUseName, task filter function) in load_mainContent_commonUse 
    const load_navBar_commonUse = () => {
        clear_navbar_commonUseItems();
        const commonUseItemNames = [
            "All", "Today", "This Week", "Past Due", "Completed"
        ];
        const commonUseContainer = document.querySelector('.common-use-container');
        for (let commonUseItemName of commonUseItemNames)
        {
            let button = DOM_constructors.navbar_commonUseItem(commonUseItemName);
            commonUseContainer.appendChild(button);
        }
    };
    // loads title and tasks of a common use section
    const load_mainContent_commonUse = (commonUseName) => {
        const commonUseObject = {
            // "commonUseName": taskFilter function
            "All": (task) => {
                let today = new Date();
                return (
                    isAfter(task.task.deadline, today) || 
                    isSameDay(task.task.deadline, today)
                );
            },
            "Today": (task) => {
                let today = new Date();
                return (
                    isSameDay(today, task.task.deadline)
                );
            },
            "This Week": (task) => {
                let today = new Date();
                return (
                    isSameWeek(today, task.task.deadline) && 
                        (
                            isAfter(task.task.deadline, today) || 
                            isSameDay(task.task.deadline, today) 
                        )
                );
            },
            "Past Due": (task) => {
                let today = new Date();
                return (
                    isBefore(task.task.deadline, today) && 
                    !isSameDay(task.task.deadline, today) &&
                    task.task.completion == false
                );
            },
            "Completed": (task) => {
                return task.task.completion == true;
            },
        };

        const load_commonUse_template = (commonUseName, taskFilter) => {
            clear_mainContent();
            // title
            const titleContainer = document.querySelector('.title-container');
            let title = DOM_constructors.mainContent_title(commonUseName);
            titleContainer.appendChild(title);
            // Tasks
            const categories = getCAT();
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
            
            let required_tasks = all_tasks.filter(taskFilter);
            // sorting tasks in ascending order in terms of date
            required_tasks.sort((a, b) => {
                return sortDatesAsc(a.task, b.task);
            });
            // appending them to DOM
            for (let task of required_tasks)
            {
                let taskItem = DOM_constructors.taskItem(task.category, task.task);
                tasksContainer.appendChild(taskItem);
            }
        }

        load_commonUse_template(commonUseName, commonUseObject[commonUseName]);
    };

    const load_navBar = () => {
        clear_navBar();
        load_navBar_commonUse();
        load_navBar_categories();
    }
    const clear_mainContent = () => {
        let titleContainer = document.querySelector('.title-container');
        let tasksContainer = document.querySelector('.tasks-container');
        titleContainer.innerHTML = "";
        tasksContainer.innerHTML = "";
    } 
    const clear_navBar = () => {
        clear_navbar_categories();
        clear_navbar_commonUseItems();
    }
    const refresh = () => {
        CategoryController.initialize_default_category();
        load_navBar();
        load_mainContent_commonUse("All");
    };
    // Not imported //
    const clear_navbar_categories = () => {
        let categories = document.querySelectorAll('.category-item');
        for (let category of categories)
        {
            category.remove();
        }
    };

    const clear_navbar_commonUseItems = () => {
        let commonUseItems = document.querySelectorAll('.common-use-item');
        for (let commonUseItem of commonUseItems)
        {
            commonUseItem.remove();
        }
    }

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

        const categories = getCAT();
        const category = categories[categoryName];
        let tasks = category.tasks;
        
        // remove old tasks
        let required_tasks = [];
        let today = new Date();
        for (let task of tasks)
        {
            if (isAfter(task.deadline, today) || isSameDay(task.deadline, today))
            {
                required_tasks.push(task);
            }
        }
        required_tasks.sort(sortDatesAsc);

        for (let task of required_tasks)
        {
            let taskItem = DOM_constructors.taskItem(categoryName, task);
            tasksContainer.appendChild(taskItem);
        }
    }

    return {
        load_navBar_categories,
        load_navBar_commonUse,
        load_mainContent_category,
        load_mainContent_commonUse,
        load_navBar,
        clear_mainContent,
        clear_navBar,
        refresh,
    };
})();

export default DOMController;