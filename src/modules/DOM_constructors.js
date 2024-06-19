// Contains all elements that are to be created

import { format } from "date-fns";
import CategoryController from "../controllers/categoryController.js";
import TaskController from "../controllers/taskController.js";
import DOMController from "../controllers/DOMController.js";

const DOM_constructors = (() => {
  const navbar_commonUseItem = (commonUseName) => {
    // <button class="common-use-item">
    //     All
    // </button>
    let commonUseItem = document.createElement("button");
    commonUseItem.classList.add("common-use-item");
    commonUseItem.innerText = commonUseName;
    commonUseItem.addEventListener("click", () => {
      DOMController.load_mainContent_commonUse(commonUseName);
    });
    return commonUseItem;
  };

  const navbar_categoryHeader = () => {

    //   <div class="categories-title">My Categories</div>
    //   <div class="add-category-container">
    //     <div class="add-category-icon"></div>
    //     <div class="add-category-dropdown invisible">
    //       <label for="new-category-text" class="new-category-label">Category Name</label>
    //       <input
    //         type="text"
    //         name="new-category-text"
    //         class="new-category-text"
    //         placeholder="Eg. Fitness"
    //       />
    //       <button class="add-new-category">Add</button>
    //     </div>
    //   </div>

    const categoriesHeader = document.createDocumentFragment();

    let categoriesTitle = document.createElement("div");
    categoriesTitle.classList.add("categories-title");
    categoriesTitle.innerText = "My Categories";

    let addCategoryContainer = addCategoryButton();

    categoriesHeader.appendChild(categoriesTitle);
    categoriesHeader.appendChild(addCategoryContainer);

    return categoriesHeader;
  };

  const addCategoryButton = () => {
    // <div class="add-category-container">
    //   <div class="add-category-icon"></div>

    //   <div class="add-category-dropdown invisible">
    //     <label for="new-category-text" class="new-category-label">Category Name</label>
    //     <input
    //       type="text"
    //       name="new-category-text"
    //       class="new-category-text"
    //       placeholder="Eg. Fitness"
    //     />
    //     <button class="add-new-category">Add</button>
    //   </div>
    // </div>

    let addCategoryContainer = document.createElement("form");
    addCategoryContainer.classList.add("add-category-container");

    let addCategoryIcon = document.createElement("div");
    addCategoryIcon.classList.add("add-category-icon");

    let dropdown = document.createElement("div");
    dropdown.classList.add("add-category-dropdown", "invisible");

    let label = document.createElement("label");
    label.htmlFor = "new-category-text";
    label.classList.add("new-category-label");
    label.innerText = "Category Name";

    let input = document.createElement("input");
    input.type = "text";
    input.name = "new-category-text";
    input.classList.add("new-category-text");
    input.placeholder = "Eg. Fitness";

    let button = document.createElement("button");
    button.classList.add("add-new-category");
    button.innerText = "Add";

    dropdown.appendChild(label);
    dropdown.appendChild(input);
    dropdown.appendChild(button);
    addCategoryContainer.appendChild(addCategoryIcon);
    addCategoryContainer.appendChild(dropdown);

    // Dropdwon logic
    addCategoryContainer.addEventListener("click", (event) => {
      dropdown.classList.remove("invisible");
      event.stopPropagation();
    });

    // handles outside clicks
    document.addEventListener("click", (event) => {
      if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.add("invisible");
      }
    });

    // submiting category name
    button.addEventListener('click', () => {
      let categoryName = input.value;
      CategoryController.insertCategory(categoryName);      
      DOMController.refresh();
    });
    addCategoryContainer.addEventListener('submit', (event) => {
      
      // Prevent page reload
      event.preventDefault();

      button.click();
    });

    return addCategoryContainer;
  };

  const navbar_categoryItem = (categoryName) => {
    // <button class="category-item general">
    //     # Fitness
    // </button>

    let button = document.createElement("button");
    button.classList.add("category-item");
    button.innerText = `# ${categoryName}`;
    button.addEventListener("click", () => {
      DOMController.load_mainContent_category(categoryName);
    });
    return button;
  };

  const mainContent_title = (categoryName) => {
    // <div class="category-title">
    //     General
    // </div>

    let categoryTitleDiv = document.createElement("div");
    categoryTitleDiv.classList.add("category-title");
    categoryTitleDiv.innerText = categoryName;

    return categoryTitleDiv;
  };

  const deleteCategory_button = (categoryName) => {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-category");

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    let deleteText = document.createElement("div");
    deleteText.classList.add("delete-text");
    deleteText.innerText = `Delete ${categoryName}`;

    deleteButton.addEventListener("click", () => {
      CategoryController.deleteCategory(categoryName);
      DOMController.load_mainContent_commonUse("All");
      DOMController.load_navBar_categories();
    });

    deleteButton.appendChild(iconContainer);
    deleteButton.appendChild(deleteText);

    return deleteButton;
  };

  const taskItem = (categoryName, task) => {
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

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    let taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.name = "task-completion";
    taskCheckbox.classList.add("task-completion");
    if (task.completion) {
      taskCheckbox.checked = true;
      TaskController.markComplete(categoryName, task);
      taskItem.classList.add("strike");
    } else {
      taskCheckbox.checked = false;
      TaskController.markIncomplete(categoryName, task);
      taskItem.classList.remove("strike");
    }
    taskCheckbox.addEventListener("click", () => {
      if (taskCheckbox.checked) {
        TaskController.markComplete(categoryName, task);
        taskItem.classList.add("strike");
      } else {
        TaskController.markIncomplete(categoryName, task);
        taskItem.classList.remove("strike");
      }
    });

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.innerText = task.title;

    let priorityCircle = document.createElement("div");
    priorityCircle.classList.add("priority-circle", task.priority);

    let editTask = document.createElement("div");
    editTask.classList.add("edit-task-icon-container");

    let deleteTask = document.createElement("div");
    deleteTask.classList.add("delete-task-icon-container");
    deleteTask.addEventListener("click", () => {
      TaskController.deleteTask(categoryName, task);
      taskItem.remove();
    });

    let taskInfoTwo = document.createElement("div");
    taskInfoTwo.classList.add("task-info-two");

    let deadline = document.createElement("div");
    deadline.classList.add("deadline");
    deadline.innerText = format(task.deadline, "d MMM, EEEE, yyyy");

    let taskCategory = document.createElement("div");
    taskCategory.classList.add("task-category-indicator");
    taskCategory.innerText = `# ${categoryName}`;

    taskInfo.appendChild(taskCheckbox);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(priorityCircle);
    taskInfo.appendChild(editTask);
    taskInfo.appendChild(deleteTask);

    taskItem.appendChild(taskInfo);

    taskInfoTwo.appendChild(deadline);
    taskInfoTwo.appendChild(taskCategory);

    taskItem.appendChild(taskInfoTwo);

    return taskItem;
  };

  return {
    navbar_commonUseItem,
    navbar_categoryHeader,
    navbar_categoryItem,
    mainContent_title,
    deleteCategory_button,
    taskItem,
  };
})();

export default DOM_constructors;
