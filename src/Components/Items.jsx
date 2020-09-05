import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import veg from '../icons/veg.png';
import nonVeg from '../icons/non-veg.png';
import egg from '../icons/egg.png';
import {Heading} from '../pojo.js';

function Items(props) {
  let heading=new Heading();
  let checkType=()=>{
    if(props.item[heading.type]===null){
      return <img className="type" alt={props.item[heading.type]} src={veg}/>
    }
    if(props.item[heading.type].toLowerCase().includes("egg")){
      return <img className="type" alt={props.item[heading.type]} src={egg}/>
    }
    else if(props.item[heading.type].toLowerCase().includes("non")){
      return <img className="type" alt={props.item[heading.type]} src={nonVeg}/>
    }
    else{
      return <img className="type" alt={props.item[heading.type]} src={veg}/>
    }
  }
  return(
    <div style={{width:'100%'}} key={props.index}>
      <div className="categoryContainer">
        <div className="div1">
          <Card.Body >
            <Card.Title>
              {checkType()}
              {props.item[heading.dishName]}
            </Card.Title>
            <Card.Text className="description">
              {props.item[heading.description]}
            </Card.Text>
            <Card.Text className="price">
              {"₹"+props.item[heading.price]}
            </Card.Text>
          </Card.Body>
        </div>
        <div className="div2">
          <div className="divButton">
            <span className="spanSign" onClick={()=>props.decreaseCounter(props.item,props.index)} hidden={props.counter===undefined}>-</span>
            <span className="spanSign" style={{paddingLeft:"6px",paddingRight:"6px"}}>{props.counter!==undefined?props.counter[0]:"ADD"}</span>
            <span className="spanSign" onClick={()=>props.increaseCounter(props.item,props.index)}>+</span>
          </div>
        </div>
      </div>
      <div className="line">
      </div>
    </div>
  )
}

export default Items;
