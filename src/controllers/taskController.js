import { getCAT, updateCAT } from "../modules/localStorage.js";

const TaskController = (() => {
  const insertTask = (categoryName, task) => {
    let categories = getCAT();
    let category = categories[categoryName];
    if (category !== undefined) {
      category.addTask(task);
      updateCAT(categories);
    }
  };

  const deleteTask = (categoryName, task) => {
    let categories = getCAT();
    let category = categories[categoryName];
    if (category !== undefined) {
      category.removeTask(task);
      updateCAT(categories);
    }
  };

  const markComplete = (categoryName, task) => {
    let categories = getCAT();
    let category = categories[categoryName];
    if (category !== undefined) {
      let actualTask = category.getTask(task);
      actualTask.markComplete();
      updateCAT(categories);
    }
  };
  const markIncomplete = (categoryName, task) => {
    let categories = getCAT();
    let category = categories[categoryName];
    if (category !== undefined) {
      let actualTask = category.getTask(task);
      actualTask.markIncomplete();
      updateCAT(categories);
    }
  };

  return {
    insertTask,
    deleteTask,
    markComplete,
    markIncomplete,
  };
})();

export default TaskController;
