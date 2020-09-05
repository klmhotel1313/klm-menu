import React from 'react';
import CartItems from './CartItems.jsx';
import {Heading} from '../pojo.js';
function Cart(props) {
  let [counter,setCounter]=React.useState({})
  let heading=new Heading()
  React.useEffect(()=>{
    let session=window.sessionStorage.getItem("counter");
    setCounter(JSON.parse(session===null||session===undefined?"{}":session))
  },[])

  let increaseCounter=(item,index)=>{
    let count=0;
    if(Object.keys(counter).length!==0&&counter[item[heading.dishName]+item[heading.type]]!==undefined){
      count=counter[item[heading.dishName]+item[heading.type]][0]
      count+=1
    }
    else{
      count=1;
    }
    setCounter({
      ...counter,
      [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
    })
    window.sessionStorage.setItem("counter",JSON.stringify({
      ...counter,
      [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
    }))
  }
  let decreaseCounter=(item,index)=>{
    let count=0

    if(counter[item[heading.dishName]+item[heading.type]][0]>0){
      count=counter[item[heading.dishName]+item[heading.type]][0]
      count-=1

    }
    if(count===0){
      let dishName=item[heading.dishName]+item[heading.type]
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
      [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
    })
    window.sessionStorage.setItem("counter",JSON.stringify({
      ...counter,
      [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
    }))
  }

}

return(
  <CartItems counter={counter} decreaseCounter={decreaseCounter} increaseCounter={increaseCounter}/>
);
}

export default Cart;
