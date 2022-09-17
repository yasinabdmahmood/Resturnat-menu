const createMealCard=(el,id,index)=>{
    let visibility=false
    if(el.order>0){
        visibility=true;
    }
    const card= ` <div class="card" id2=${index} cat=${id}>
    <h2>${el.name}</h2>
    <img src=${el.src} alt="">
    <p>${el.discription}</p>
    <div class="price-order">
        <div class="price">${el.price} $</div>
        <div class="pl" style="display:${visibility? 'none':'block'}"><img src="./assets/images/plus-circle.svg" alt=""></div>
        <div class="quantity" style="display:${visibility? 'flex':'none'}">
            <span class="minus"><img src="./assets/images/dash.svg" alt=""></span>
            <span class="order-number">${el.order}</span>
            <span class="plus"><img src="./assets/images/plus.svg" alt=""></span>
        </div>
    </div>
</div>`;
return card
}
export default createMealCard;