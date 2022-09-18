import orderList from "./orderList.js"
const check2=()=>{
  const listLength= orderList.list.length;
  if(listLength>0){
   
    document.querySelector('.show-order').style.display="block";
  }
  else{
   
    document.querySelector('.show-order').style.display="none";
  }
}
export default check2;