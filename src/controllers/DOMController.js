import { isSameWeek , isSameDay, isAfter , isBefore } from "date-fns";
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

    // Imported //
    // loads all category buttons under the 'My Category' section
    const load_navBar_categories = () => {
        clear_navbar_categories();
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
        clear_mainContent();
        load_mainContent_category_title(categoryName);
        load_category_tasks(categoryName);
    };

    // To create more commonUse items like All, Today, This Week, etc, use the below format
    const load_mainContent_commonUse = (() => {

        const all = () => {
            const taskFilter_all = (task) => {
                let today = new Date();
                return (
                    isAfter(task.task.deadline, today) || 
                    isSameDay(task.task.deadline, today)
                );
            };
            load_commonUse_template("All", taskFilter_all);
        };
    
        const today = () => {
            const taskFilter_today = (task) => {
                let today = new Date();
                return (
                    isSameDay(today, task.task.deadline)
                );
            };
            load_commonUse_template("Today", taskFilter_today);
        }

        const thisWeek = () => {
            const taskFilter_thisWeek = (task) => {
                let today = new Date();
                return (
                    isSameWeek(today, task.task.deadline) && 
                        (
                            isAfter(task.task.deadline, today) || 
                            isSameDay(task.task.deadline, today)
                        )
                );
            }
            load_commonUse_template("This Week", taskFilter_thisWeek);
        };

        const pastDue = () => {
            const taskFilter_pastDue = (task) => {
                let today = new Date();
                return (
                    isBefore(task.task.deadline, today) && 
                    !isSameDay(task.task.deadline, today)
                );
            }
            load_commonUse_template("Past Due", taskFilter_pastDue);
        }
        
        const load_commonUse_template = (commonUseName, taskFilter) => {
            clear_mainContent();
            // title
            const titleContainer = document.querySelector('.title-container');
            let title = DOM_constructors.mainContent_title(commonUseName);
            titleContainer.appendChild(title);
            // Tasks
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
                tasksContainer.appendChild(taskItem.cloneNode(true));
            }
        }

        return {
            all,
            today,
            thisWeek,
            pastDue,
        };
    })();

    const clear_mainContent = () => {
        let titleContainer = document.querySelector('.title-container');
        let tasksContainer = document.querySelector('.tasks-container');
        titleContainer.innerHTML = "";
        tasksContainer.innerHTML = "";
    }

    // Not imported //
    const clear_navbar_categories = () => {
        let categories = document.querySelectorAll('.category-item');
        for (let category of categories)
        {
            category.remove();
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
            tasksContainer.appendChild(taskItem.cloneNode(true));
        }
    }

    
    return {
        load_navBar_categories,
        load_mainContent_category,
        load_mainContent_commonUse,
        clear_mainContent,
    };
})();

export default DOMController;