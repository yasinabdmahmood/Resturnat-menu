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
export default createMealCard;