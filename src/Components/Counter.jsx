import React from 'react';
import './CSS/Counter.css';
import {Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
function Counter(props) {
  let totalCounter=()=>{
    let totalCount=0;
    let totalPrice=0;
    for(var key in props.counter){

      if(props.counter[key]!==undefined&&!isNaN(props.counter[key][0])){
        totalCount+=props.counter[key][0];
      }
    }
    return totalCount;
  }
  return (
    <div hidden={totalCounter()===0||isNaN(totalCounter())} className="counter">
      <Col>Total Items : {totalCounter()}</Col>
      <Col className="counterCol"><Link to="/cart">View Cart</Link></Col>
    </div>
  );
}

export default Counter;
