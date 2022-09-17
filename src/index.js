import './SCSS/style.scss';
import catagories from './assets/modules/data_base.js';
import createCatagories from './assets/modules/createCatagories.js';
import populateMeals from './assets/modules/populateMeals.js';
document.body.style.backgroundImage='url(./assets/images/mainPicture.jpg)' ;
document.querySelector('.arrow').src="./assets/images/arrow-left.svg";


const meals=createCatagories(catagories);
document.querySelector('.arrow').onclick=()=>{
document.querySelector('.meals').style.display='flex';
document.querySelector('.arrow').style.display="none";
document.querySelector('.second-page').innerHTML="";
}
meals.forEach(element => {
    element.onclick=(e)=>{
        document.querySelector('.arrow').style.display="block";
        document.querySelector('.meals').style.display="none";
        const dom=populateMeals(e.target.id);
        document.querySelector('.second-page').innerHTML=dom;
    }
    document.querySelector('.meals').appendChild(element);
});


