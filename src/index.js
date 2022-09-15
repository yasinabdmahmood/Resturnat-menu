import './SCSS/style.scss'
import catagories from './assets/modules/data_base.js'
document.body.style.backgroundImage='url(./assets/images/mainPicture.jpg)' ;
const createCatagories=(arr)=>{
  const result=arr.map(element => {
    let div =document.createElement('div');
    div.innerText=element.name;
    div.classList.add('meal');
    div.style.background=`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${element.src})`;
    div.style.backgroundSize='cover';
    div.style.backgroundRepeat='no-repeat';
    div.style.backgroundPosition='50%';
    return div
  });
  return result
}
const meals=createCatagories(catagories);
meals.forEach(element => {
    console.log('success')
    document.querySelector('.meals').appendChild(element);
});

console.log(meals)
