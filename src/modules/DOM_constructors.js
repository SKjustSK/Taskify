// Contains all elements that are to be created

import { format } from "date-fns";
import Task from "./task.js";
import CategoryController from "../controllers/categoryController.js";
import TaskController from "../controllers/taskController.js";
import DOMController from "../controllers/DOMController.js";
import { getCAT } from "./localStorage.js";

const DOM_constructors = (() => {
  // Navbar elements
  const navbar_commonUseItem = (commonUseName) => {
    // <button class="common-use-item">
    //     All
    // </button>
    let commonUseItem = document.createElement("button");
    commonUseItem.classList.add("common-use-item");
    commonUseItem.innerText = commonUseName;
    commonUseItem.addEventListener("click", () => {
      DOMController.refresh(commonUseName);
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
    //      <div class="error-message"></div>
    //     <button class="add-new-category">Add</button>
    //   </div>
    // </div>

    let addCategoryContainer = document.createElement("form");
    addCategoryContainer.classList.add("add-category-container");

    let addCategoryIcon = document.createElement("div");
    addCategoryIcon.classList.add("add-category-icon");
    addCategoryContainer.appendChild(addCategoryIcon);

    let dropdown = document.createElement("div");
    dropdown.classList.add("add-category-dropdown", "invisible");

    let label = document.createElement("label");
    label.htmlFor = "new-category-text";
    label.classList.add("new-category-label");
    label.innerText = "Category Name";
    dropdown.appendChild(label);

    let input = document.createElement("input");
    input.type = "text";
    input.name = "new-category-text";
    input.classList.add("new-category-text");
    input.placeholder = "Eg. Fitness";
    dropdown.appendChild(input);

    let errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    dropdown.appendChild(errorMessage);

    let button = document.createElement("button");
    button.classList.add("add-new-category");
    button.innerText = "Add";
    button.onclick = () => {
      button.setAttribute("style", "transform: scale(0.98");
      setTimeout(() => {
        button.setAttribute("style", "transform: scale(1)");
      }, 200);
    };
    dropdown.appendChild(button);

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
    button.addEventListener("click", (event) => {
      let categoryName = input.value.trim();
      if (categoryName !== "") {
        CategoryController.insertCategory(categoryName);
        DOMController.refresh(categoryName);
      } else {
        event.preventDefault();
        const errorMessage = document.querySelector(
          ".add-category-dropdown .error-message"
        );
        errorMessage.textContent = "Invalid input";
      }
    });
    addCategoryContainer.addEventListener("submit", (event) => {
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
      DOMController.refresh(categoryName);
    });
    return button;
  };

  // Main content elements
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
      DOMController.refresh("All");
    });

    deleteButton.appendChild(iconContainer);
    deleteButton.appendChild(deleteText);

    return deleteButton;
  };

  const addTask_button = () => {
    // <div class="add-task-icon"></div>
    // <div class="add-task-text">Add Task</div>
    const addTaskContainer = document.createDocumentFragment();

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("add-task-icon");
    addTaskContainer.appendChild(iconContainer);

    let textContiner = document.createElement("div");
    textContiner.classList.add("add-task-text");
    textContiner.innerText = "Add Task";
    addTaskContainer.appendChild(textContiner);

    // click logic is in DOMController due to the fact that this element interacts with an element outside itself

    return addTaskContainer;
  };

  const addTask_form = () => {
    // <form action="" class="add-task-form">
    //   <div class="add-task-form-header">Add Task</div>

    //   <label for="task-title" class="new-task-title">Title</label>
    //   <input placeholder="Eg. Go on a walk" type="text" class="task-title-input" />

    //   <label for="task-desc" class="new-task-desc">Description</label>
    //   <textarea placeholder="Eg. Walk for atleast 5km" type="text" class="task-desc-input"></textarea>

    //   <label for="task-deadline" class="new-task-deadline">Deadline</label>
    //   <input type="date" class="task-deadline-input" />

    //   <label for="task-priority" class="new-task-priority">Priority</label>
    //   <select class="new-task-priority-input">
    //     <option value="low">Low</option>
    //     <option value="medium">Medium</option>
    //     <option value="high">High</option>
    //   </select>

    //   <label for="task-category" class="new-task-category">Category</label>
    //   <select class="new-task-category-input">
    //     <option value="General">General</option>
    //   </select>

    //   <button class="submit-task">Add Task</button>
    // </form>

    // Create the form element
    const form = document.createElement("form");
    form.classList.add("add-task-form");
    form.action = "";

    // Create the header
    const header = document.createElement("div");
    header.classList.add("add-task-form-header");
    header.textContent = "Add Task";
    form.appendChild(header);

    // Create title label and input
    const titleLabel = document.createElement("label");
    titleLabel.classList.add("new-task-title");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "task-title");

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.classList.add("task-title-input");
    titleInput.placeholder = "Eg. Go on a walk";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    // Create description label and textarea
    const descLabel = document.createElement("label");
    descLabel.classList.add("new-task-desc");
    descLabel.textContent = "Description";
    descLabel.setAttribute("for", "task-desc");

    const descTextarea = document.createElement("textarea");
    descTextarea.classList.add("task-desc-input");
    descTextarea.placeholder = "Eg. Walk for atleast 5km";

    form.appendChild(descLabel);
    form.appendChild(descTextarea);

    // Create deadline label and input
    const deadlineLabel = document.createElement("label");
    deadlineLabel.classList.add("new-task-deadline");
    deadlineLabel.textContent = "Deadline";
    deadlineLabel.setAttribute("for", "task-deadline");

    const deadlineInput = document.createElement("input");
    deadlineInput.type = "date";
    deadlineInput.classList.add("task-deadline-input");

    form.appendChild(deadlineLabel);
    form.appendChild(deadlineInput);

    // Create priority label and select
    const priorityLabel = document.createElement("label");
    priorityLabel.classList.add("new-task-priority");
    priorityLabel.textContent = "Priority";
    priorityLabel.setAttribute("for", "task-priority-input");

    const prioritySelect = document.createElement("select");
    prioritySelect.classList.add("new-task-priority-input");
    prioritySelect.name = "task-priority-input";

    const priorities = ["Low", "Medium", "High"];
    for (const priority of priorities) {
      const option = document.createElement("option");
      option.value = priority.toLowerCase();
      option.textContent = priority;
      prioritySelect.appendChild(option);
    }

    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);

    // Create category label and select
    const categoryLabel = document.createElement("label");
    categoryLabel.classList.add("new-task-category");
    categoryLabel.textContent = "Category";
    categoryLabel.setAttribute("for", "task-category-input");

    const categorySelect = document.createElement("select");
    categorySelect.classList.add("new-task-category-input");
    categorySelect.name = "task-category-input";

    // Add all category options
    const categories = getCAT();
    const categoryOptions = [];
    for (let key in categories) {
      categoryOptions.push(key);
    }
    for (let category of categoryOptions) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    }

    form.appendChild(categoryLabel);
    form.appendChild(categorySelect);

    // Create error message container
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    form.appendChild(errorMessage);

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-task");
    submitButton.textContent = "Add Task";
    submitButton.onclick = () => {
      submitButton.setAttribute("style", "transform: scale(0.98");
      setTimeout(() => {
        submitButton.setAttribute("style", "transform: scale(1)");
      }, 200);
    };

    form.appendChild(submitButton);

    // Task submission and creations logic
    submitButton.addEventListener("click", (event) => {
      const newTask = {
        taskTitle: titleInput.value.trim(),
        taskDesc: descTextarea.value.trim(),
        taskDeadline: deadlineInput.value,
        taskPriority: prioritySelect.value,
        taskCategory: categorySelect.value,
      };

      // Form validation
      let validationPassed = true;
      for (let taskItem in newTask) {
        // Task Description can be empty
        if (taskItem === "taskDesc") {
          console.log("empty taskdesc")
          continue;
        }
        if (newTask[taskItem] === "") {
          event.preventDefault();
          const errorMessage = document.querySelector(
            ".add-task-form .error-message"
          );
          errorMessage.textContent = "All inputs must be filled (except description)";
          validationPassed = false;
          break;
        }
      }

      if (validationPassed) {
        TaskController.insertTask(
          newTask.taskCategory,
          new Task(
            newTask.taskTitle,
            newTask.taskDesc,
            newTask.taskDeadline,
            newTask.taskPriority,
            false
          )
        );
        DOMController.refresh(newTask.taskCategory);
      }
    });
    form.addEventListener("submit", (event) => {
      // Prevent page reload
      event.preventDefault();

      submitButton.click();
    });

    // Return the constructed form element
    return form;
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
    addTask_button,
    taskItem,
    addTask_form,
  };
})();

export default DOM_constructors;
