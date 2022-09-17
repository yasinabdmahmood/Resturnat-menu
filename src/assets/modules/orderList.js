const orderList={
    list:[],
    getIndex:(obj)=>{
     const index=orderList.list.findIndex(el=>obj.name===el.name)
     return index;
    },
    add:(obj)=>{
       const index = orderList.getIndex(obj);
       if(index<0){
         const newObj=obj ;
         newObj.order=1
           orderList.list.push(newObj);
           return 1
       }
       else{
           orderList.list[index].order+=1;
           return  orderList.list[index].order
       }
       

    },
    remove:(obj)=>{
       const index=orderList.getIndex(obj);
       orderList.list[index].order-=1;
       if(orderList.list[index].order<1){
           orderList.list.splice(index, 1);
           return 0
       }
       else{
          
           return  orderList.list[index].order
       }
    }

};
export default orderList;