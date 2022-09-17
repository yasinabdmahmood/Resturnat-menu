import catagories from "./data_base.js";
import populateMeals from "./populateMeals.js";
import orderList from "./orderList.js";
const plIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode;
    const cardInfo=catagories[parseInt(card.getAttribute('cat'))].list[parseInt(card.getAttribute('id2'))];
    console.log(cardInfo)
    console.log(orderList.list)
    const order=orderList.add(cardInfo);
    card.querySelector('.order-number').innerHTML=order
    card.querySelector('.pl').style.display='none';
    card.querySelector('.quantity').style.display='flex';
}
const plusIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode.parentNode;
    const cardInfo=catagories[parseInt(card.getAttribute('cat'))].list[parseInt(card.getAttribute('id2'))];
    const order=orderList.add(cardInfo);
    card.querySelector('.order-number').innerHTML=order
    console.log(orderList.list)

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
    
}
const check1=()=>{
   if(document.querySelector('.second-page').innerHTML===""){
    document.querySelector('.meals').style.display='flex';
    document.querySelector('.arrow').style.display="none";
   
   } 
   else if(document.querySelector('.second-page').style.display==='none') {
    document.querySelector('.second-page').style.display='flex';
    const nameOfMeal=document.querySelector('.second-page h1').innerHTML;
    const index = catagories.findIndex((el)=>el.name===nameOfMeal);
    const dom=populateMeals(index);
    document.querySelector('.second-page').innerHTML=dom;
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
   else{
    document.querySelector('.meals').style.display='flex';
    document.querySelector('.second-page').style.display='none';
    document.querySelector('.arrow').style.display="none";
   }
   document.querySelector('.orders').style.display="none";
}
export default check1;