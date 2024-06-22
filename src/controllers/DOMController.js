import { isSameWeek, isSameDay, isAfter, isBefore } from "date-fns";
import { getCAT } from "../modules/localStorage";
import CategoryController from "./categoryController";
import DOM_constructors from "../modules/DOM_constructors";

const DEFAULT = "General";

function priority_to_num(priority) {
  if (priority === "high") {
    return 3;
  } else if (priority === "medium") {
    return 2;
  } else if (priority === "low") {
    return 1;
  } else {
    return 0;
  }
}

function sortDatesAsc(a, b) {
  if (a.deadline - b.deadline == 0) {
    let a_priority = priority_to_num(a.priority);
    let b_priority = priority_to_num(b.priority);
    return b_priority - a_priority;
  }
  return a.deadline - b.deadline;
}

const DOMController = (() => {
  // Refreshes to given argument
  const refresh = (tab = "All") => {
    CategoryController.initialize_default_category();
    load_navBar();
    const categories = getCAT();
    if (categories[tab]) {
      load_mainContent_category(tab);
    } else {
      load_mainContent_commonUse(tab);
    }
  };

  // Loads navbar and main content
  const load_navBar = () => {
    clear_navBar();
    clear_mainContent();
    load_navBar_commonUse();
    load_navBar_categories();
  };

  const load_navBar_categories = () => {
    clear_navbar_categories();

    // Header + Add Category button
    const categoriesHeader = document.querySelector(".categories-header");
    let categoriesHeaderItems = DOM_constructors.navbar_categoryHeader();
    categoriesHeader.appendChild(categoriesHeaderItems);

    // Category tabs/menus
    const categoriesWrapper = document.querySelector(".categories-wrapper");
    const categories = getCAT();
    for (let key in categories) {
      let button = DOM_constructors.navbar_categoryItem(key);
      categoriesWrapper.appendChild(button);
    }
  };

  const load_mainContent_category = (categoryName) => {
    let categories = getCAT();
    if (categories[categoryName] === undefined) {
      return;
    }
    clear_mainContent();
    load_mainContent_category_title(categoryName);
    load_addTask_button_form();
    load_category_tasks(categoryName);
  };

  // To add more, make sure to add the (commonUseName) in load_navBar_commonUse and (commonUseName, task filter function) in load_mainContent_commonUse
  const load_navBar_commonUse = () => {
    clear_navbar_commonUseItems();
    const commonUseItemNames = [
      "All",
      "Today",
      "This Week",
      "Overdue",
      "Completed",
    ];
    const commonUseContainer = document.querySelector(".common-use-container");
    for (let commonUseItemName of commonUseItemNames) {
      let button = DOM_constructors.navbar_commonUseItem(commonUseItemName);
      commonUseContainer.appendChild(button);
    }
  };

  const load_mainContent_commonUse = (commonUseName) => {
    const commonUseObject = {
      // "commonUseName": taskFilter function
      All: () => {
        return true;
      },
      Today: (task) => {
        let today = new Date();
        return isSameDay(today, task.task.deadline);
      },
      "This Week": (task) => {
        let today = new Date();
        return (
          isSameWeek(today, task.task.deadline) &&
          (isAfter(task.task.deadline, today) ||
            isSameDay(task.task.deadline, today))
        );
      },
      Overdue: (task) => {
        let today = new Date();
        return (
          isBefore(task.task.deadline, today) &&
          !isSameDay(task.task.deadline, today) &&
          task.task.completion == false
        );
      },
      Completed: (task) => {
        return task.task.completion == true;
      },
    };

    const load_commonUse_template = (commonUseName, taskFilter) => {
      clear_mainContent();
      // title
      const titleContainer = document.querySelector(".title-container");
      let title = DOM_constructors.mainContent_title(commonUseName);
      titleContainer.appendChild(title);
      // add task button and form
      load_addTask_button_form();
      // Tasks
      const categories = getCAT();
      const tasksContainer = document.querySelector(".tasks-container");
      let all_tasks = [];
      for (let key in categories) {
        let category = categories[key];
        for (let task of category.tasks) {
          all_tasks.push({
            category: category.title,
            task: task,
          });
        }
      }

      let required_tasks = all_tasks.filter(taskFilter);
      // sorting tasks in ascending order in terms of date
      required_tasks.sort((a, b) => {
        return sortDatesAsc(a.task, b.task);
      });
      // appending them to DOM
      for (let task of required_tasks) {
        let taskItem = DOM_constructors.taskItem(task.category, task.task);
        tasksContainer.appendChild(taskItem);
      }
    };

    load_commonUse_template(commonUseName, commonUseObject[commonUseName]);
  };

  // Assists loading of navbars and main content
  const load_mainContent_category_title = (categoryName) => {
    const titleContainer = document.querySelector(".title-container");
    let mainContent_category_title =
      DOM_constructors.mainContent_title(categoryName);
    titleContainer.appendChild(mainContent_category_title);

    if (categoryName !== DEFAULT) {
      let deleteCategory_button =
        DOM_constructors.deleteCategory_button(categoryName);
      titleContainer.appendChild(deleteCategory_button);
    }
  };

  const load_addTask_button_form = () => {
    // Loading Button
    const addTaskContainer = document.querySelector(".add-task-container");
    const contents = DOM_constructors.addTask_button();
    addTaskContainer.appendChild(contents);

    // Loading Form
    const addTaskFormContainer = document.querySelector(
      ".add-task-form-container"
    );
    const addTaskForm = DOM_constructors.addTask_form();
    addTaskFormContainer.appendChild(addTaskForm);

    // Pop-up form to add tasks
    addTaskContainer.addEventListener("click", (event) => {
      addTaskFormContainer.classList.remove("invisible");
      event.stopPropagation();
    });

    // handles outside clicks
    document.addEventListener("click", (event) => {
      if (addTaskForm && !addTaskForm.contains(event.target)) {
        addTaskFormContainer.classList.add("invisible");
      }
    });

    // To stop form from closing if clicked inside it, as the click would propogate to addTaskFormContainer
    addTaskForm.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  };

  const load_category_tasks = (categoryName) => {
    const tasksContainer = document.querySelector(".tasks-container");

    const categories = getCAT();
    const category = categories[categoryName];
    let tasks = category.tasks;

    tasks.sort(sortDatesAsc);

    for (let task of tasks) {
      let taskItem = DOM_constructors.taskItem(categoryName, task);
      tasksContainer.appendChild(taskItem);
    }
  };

  const clear_mainContent = () => {
    let titleContainer = document.querySelector(".title-container");
    let addTaskContainer = document.querySelector(".add-task-container");
    let tasksContainer = document.querySelector(".tasks-container");
    titleContainer.innerHTML = "";
    addTaskContainer.innerHTML = "";
    tasksContainer.innerHTML = "";

    let addTaskFormContainer = document.querySelector(
      ".add-task-form-container"
    );
    addTaskFormContainer.innerHTML = "";
    addTaskFormContainer.classList.add("invisible");
  };

  const clear_navBar = () => {
    clear_navbar_categories();
    clear_navbar_commonUseItems();
  };

  const clear_navbar_categories = () => {
    let navbar_categoryHeader = document.querySelector(".categories-header");
    navbar_categoryHeader.innerHTML = "";

    let categories = document.querySelectorAll(".category-item");
    for (let category of categories) {
      category.remove();
    }
  };

  const clear_navbar_commonUseItems = () => {
    let commonUseItems = document.querySelectorAll(".common-use-item");
    for (let commonUseItem of commonUseItems) {
      commonUseItem.remove();
    }
  };

  // Funnily enough, I did not plan on creating this module just to export one function. But hey that's the only thing I actually used in the end.
  return {
    refresh,
  };
})();

export default DOMController;
