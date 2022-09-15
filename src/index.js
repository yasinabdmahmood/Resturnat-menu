import './SCSS/style.scss';
import catagories from './assets/modules/data_base.js';
import createCatagories from './assets/modules/createCatagories.js';
document.body.style.backgroundImage='url(./assets/images/mainPicture.jpg)' ;
const createMealCard=(el)=>{
    const card= ` <div class="card">
    <h2>${el.name}</h2>
    <img src=${el.src} alt="">
    <p>${el.discription}</p>
    <div class="price-order">
        <div class="price">${el.price} $</div>
        <div class="pl">+</div>
        <div class="quantity">
            <span class="minus">-</span>
            <span class="order-number">${el.order}</span>
            <span class="plus">+</span>
        </div>
    </div>
</div>`;
return card
}
const populateMeals=(id)=>{
    let meals=``;
    const data=catagories[id].list;
    data.forEach((element)=>{
        meals+=createMealCard(element);
    })
    return meals;
}
const meals=createCatagories(catagories);
meals.forEach(element => {
    element.onclick=(e)=>{
        const dom=populateMeals(e.target.id);
        document.querySelector('.second-page').innerHTML=dom;
    }
    document.querySelector('.meals').appendChild(element);
});


