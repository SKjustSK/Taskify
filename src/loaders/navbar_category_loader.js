// Loads the categories displayed under "My Categories";

import {getCAT} from '../modules/localStorage.js';

function create_categoryItem (categoryName)
{
    // <button class="category-item general">
    //     # General
    // </button>

    let button = document.createElement('button');
    button.classList.add("category-item", categoryName);
    button.innerText = `# ${categoryName}`;
    return button;
}

function load_navBar_categories () {
    
    let categoriesWrapper = document.querySelector('.categories-wrapper');
    
    let categories = getCAT();
    for (let key in categories)
    {
        let button = create_categoryItem(key); 
        categoriesWrapper.appendChild(button);
    }
}

export default load_navBar_categories;