import './SCSS/style.scss';
import catagories from './assets/modules/data_base.js';
import createCatagories from './assets/modules/createCatagories.js';
import populateMeals from './assets/modules/populateMeals.js';
document.body.style.backgroundImage='url(./assets/images/mainPicture.jpg)' ;


const meals=createCatagories(catagories);
meals.forEach(element => {
    element.onclick=(e)=>{
        const dom=populateMeals(e.target.id);
        document.querySelector('.second-page').innerHTML=dom;
    }
    document.querySelector('.meals').appendChild(element);
});


