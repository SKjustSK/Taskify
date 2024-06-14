import Category from "./category";
import { updateCAT } from "./localStorage";

// Initializes a "categories" object with a default "General" category, if no such object is present.
const CATEGORIES = "General";

function initialize_default_category () {
    if (localStorage.getItem(CATEGORIES) === null)
    {
        let categories = new Object();
        let general = new Category();
        categories["General"] = general;
        updateCAT(categories);
    }
}

export default initialize_default_category;