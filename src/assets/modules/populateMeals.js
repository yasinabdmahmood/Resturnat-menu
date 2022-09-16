import catagories from "./data_base.js";
import createMealCard from "./createMealCard.js";
const populateMeals=(id)=>{
    let meals=`<h1>${catagories[id].name}</h1>`;
    const data=catagories[id].list;
    data.forEach((element)=>{
        meals+=createMealCard(element);
    })
    return meals;
}

export default populateMeals;