import Category from "../modules/category.js";
import { getCAT, updateCAT } from "../modules/localStorage.js";

const CATEGORIES = "categories";
const DEFAULT = "General";

const CategoryController = (() => {
  // Initializes a "categories" object with a default "General" category, if no such object is present.
  const initialize_default_category = () => {
    if (localStorage.getItem(CATEGORIES) === null) {
      let categories = {};
      let general = new Category(DEFAULT);
      categories[DEFAULT] = general;
      updateCAT(categories);
    }
  };

  const insertCategory = (categoryName) => {
    let categories = getCAT();
    if (categories[categoryName] === undefined) {
      categories[categoryName] = new Category(categoryName);
      updateCAT(categories);
    }
  };

  const deleteCategory = (categoryName) => {
    let categories = getCAT();
    if (categories[categoryName] !== undefined) {
      delete categories[categoryName];
      updateCAT(categories);
    }
  };

  return {
    initialize_default_category,
    insertCategory,
    deleteCategory,
  };
})();

export default CategoryController;
