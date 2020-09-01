import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import Items from './Items.jsx';
import data from '../MenuData/data.json';
import emptyCartImage from '../icons/EmptyCart.png'
import {Heading} from '../pojo.js';

function CartItems(props) {
  let heading=new Heading();
  let cartItems=Object.keys(props.counter===undefined||props.counter==null?{}:props.counter).map((name)=>{
    return Object.keys(data).map(category=>{
      return data[category].map((item,index)=>{
        if(item[heading.dishName]+item[heading.type]===name){
          return(
            <Items key={index} counter={props.counter[name]} item={item} index={index} decreaseCounter={props.decreaseCounter} increaseCounter={props.increaseCounter}/>
          )
        }
        else{
          return null;
        }
      })
    })

  });


  return(
    props.counter===null||props.counter===undefined||Object.keys(props.counter).length===0?
    <div style={{overflow:"hidden",width:"100%",height:"100%"}}>
      <img style={{width:"100%",height:"100%"}} src={emptyCartImage} alt=""/>
    </div>
    :
    <Card>
      {cartItems}
    </Card>


  );
}

export default CartItems;
