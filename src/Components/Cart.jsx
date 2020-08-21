import React from 'react';
import CartItems from './CartItems.jsx';

function Cart(props) {
  let [counter,setCounter]=React.useState({})

  React.useEffect(()=>{
    let session=window.sessionStorage.getItem("counter");
    setCounter(JSON.parse(session===null||session===undefined?"{}":session))
  },[])

  let increaseCounter=(item,index)=>{
    let count=0;
    if(Object.keys(counter).length!==0&&counter[item["Dish Name"]]!==undefined){
      count=counter[item["Dish Name"]]
      count+=1
    }
    else{
      count=1;
    }
    setCounter({
      ...counter,
      [item["Dish Name"]]:count
    })
    window.sessionStorage.setItem("counter",JSON.stringify({
      ...counter,
      [item["Dish Name"]]:count
    }))
  }
  let decreaseCounter=(item,index)=>{
    let count=0

    if(counter[item["Dish Name"]]>0){
      count=counter[item["Dish Name"]]
      count-=1

    }
    if(count===0){
      let dishName=item["Dish Name"]
      let {[dishName]:items,...rest} = counter;
      setCounter({
        ...rest
      })
      window.sessionStorage.setItem("counter",JSON.stringify({
        ...rest
      }
    ))
  }
  else{
    setCounter({
      ...counter,
      [item["Dish Name"]]:count
    })
    window.sessionStorage.setItem("counter",JSON.stringify({
      ...counter,
      [item["Dish Name"]]:count
    }))
  }

}

return(
  <CartItems counter={counter} decreaseCounter={decreaseCounter} increaseCounter={increaseCounter}/>
);
}

export default Cart;
