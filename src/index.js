import './SCSS/style.scss';
import catagories from './assets/modules/data_base.js';
import createCatagories from './assets/modules/createCatagories.js';
import populateMeals from './assets/modules/populateMeals.js';
import orderList from './assets/modules/orderList.js';
import displayOrder from './assets/modules/displayOrder.js';
import check1 from './assets/modules/check1.js';
import check2 from './assets/modules/check2.js'
document.body.style.backgroundImage='url(./assets/images/mainPicture.jpg)' ;
document.querySelector('.arrow').src="./assets/images/arrow-left.svg";
const plIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode;
    const cardInfo=catagories[parseInt(card.getAttribute('cat'))].list[parseInt(card.getAttribute('id2'))];
    console.log(cardInfo)
    console.log(orderList.list)
    const order=orderList.add(cardInfo);
    card.querySelector('.order-number').innerHTML=order
    card.querySelector('.pl').style.display='none';
    card.querySelector('.quantity').style.display='flex';
    check2();
}
const plusIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode.parentNode;
    const cardInfo=catagories[parseInt(card.getAttribute('cat'))].list[parseInt(card.getAttribute('id2'))];
    const order=orderList.add(cardInfo);
    card.querySelector('.order-number').innerHTML=order
    console.log(orderList.list)
    check2();

}
const minusIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode.parentNode
    console.log(orderList.list)
    const cardInfo=catagories[parseInt(card.getAttribute('cat'))].list[parseInt(card.getAttribute('id2'))];
    const order=orderList.remove(cardInfo);
    if(order===0){
        card.querySelector('.pl').style.display='block';
        card.querySelector('.quantity').style.display='none';
        
    }
    else{
        card.querySelector('.order-number').innerHTML=order
    }
    check2();
}

const meals=createCatagories(catagories);
document.querySelector('.arrow').onclick=()=>{
    check1();
// document.querySelector('.meals').style.display='flex';
// document.querySelector('.arrow').style.display="none";
// document.querySelector('.second-page').innerHTML="";
}
meals.forEach(element => {
    element.onclick=(e)=>{
        document.querySelector('.arrow').style.display="block";
        document.querySelector('.meals').style.display="none";
        const dom=populateMeals(e.target.id);
        document.querySelector('.second-page').innerHTML=dom;
        document.querySelector('.second-page').style.display='flex';
        document.querySelectorAll('.pl').forEach((element)=>{
            element.onclick=plIcon;
        })
        document.querySelectorAll('.plus').forEach((element)=>{
            element.onclick=plusIcon;
        })
        document.querySelectorAll('.minus').forEach((element)=>{
            element.onclick=minusIcon;
        })
    }
    document.querySelector('.meals').appendChild(element);
});
document.querySelector('.show-order').onclick=displayOrder;


