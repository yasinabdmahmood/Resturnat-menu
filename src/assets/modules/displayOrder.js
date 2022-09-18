import orderList from "./orderList.js";
import createMealCard from './createMealCard.js';
import check2 from "./check2.js";
const plIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode.querySelector('h2').innerHTML;
    const name=card.querySelector('h2').innerHTML;
    const order2=e.target.parentNode.parentNode.parentNode.querySelector('order-number').innerHTML;
    const dummyObj={name:name,order:order2}
    const index=orderList.getIndex(dummyObj);
    const cardInfo=orderList.list[index];
    console.log(cardInfo);
    console.log(orderList.list)
    const order=orderList.add(cardInfo);
    card.querySelector('.order-number').innerHTML=order
    card.querySelector('.pl').style.display='none';
    card.querySelector('.quantity').style.display='flex';
    check2()
}
const plusIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode.parentNode;
    const name=card.querySelector('h2').innerHTML;
    const order2=card.querySelector('.order-number').innerHTML;
    const dummyObj={name:name,order:order2}
    const index=orderList.getIndex(dummyObj);
    const cardInfo=orderList.list[index];
    const order=orderList.add(cardInfo);
    card.querySelector('.order-number').innerHTML=order
    console.log(orderList.list)
    check2()

}
const minusIcon=(e)=>{
    const card=e.target.parentNode.parentNode.parentNode.parentNode
    const name=card.querySelector('h2').innerHTML;
    const order2=card.querySelector('.order-number').innerHTML;
    const dummyObj={name:name,order:order2}
    const index=orderList.getIndex(dummyObj);
    const cardInfo=orderList.list[index];
    const order=orderList.remove(cardInfo);
    if(order===0){
        card.remove();
    }
    else{
        card.querySelector('.order-number').innerHTML=order
    }
    check2()
}

const populateMeals=(data)=>{
    let meals=``;
    data.forEach((element,index)=>{
        meals+=createMealCard(element,"no",index);
    })
    return meals;
}

const displayOrder=()=>{
    const dom=populateMeals(orderList.list)
    document.querySelector('.arrow').style.display="block";
    document.querySelector('.orders').innerHTML=dom;
    document.querySelector('.orders').style.display='block';
    document.querySelector('.second-page').style.display='none';
    document.querySelector('.meals').style.display='none';
    document.querySelectorAll('.orders .pl').forEach((element)=>{
        element.onclick=plIcon;
    })
    document.querySelectorAll('.orders .plus').forEach((element)=>{
        element.onclick=plusIcon;
    })
    document.querySelectorAll('.orders .minus').forEach((element)=>{
        element.onclick=minusIcon;
    })

   
}
export default displayOrder;