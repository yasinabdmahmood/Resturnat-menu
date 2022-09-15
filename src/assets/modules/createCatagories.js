const createCatagories=(arr)=>{
    const result=arr.map(element => {
      let div =document.createElement('div');
      div.innerText=element.name;
      div.classList.add('meal');
      div.id=element.id;
      div.style.background=`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${element.src})`;
      div.style.backgroundSize='cover';
      div.style.backgroundRepeat='no-repeat';
      div.style.backgroundPosition='50%';
      return div
    });
    return result
  }

  export default createCatagories;