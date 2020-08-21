import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import veg from '../icons/veg.png';
import nonVeg from '../icons/non-veg.png';

function Items(props) {
  return(
    <div style={{width:'100%'}} key={props.index}>
      <div className="categoryContainer">
        <div className="div1">
          <Card.Body >
            <Card.Title>
              {props.item["Type"].toLowerCase()==="VEG".toLowerCase()?<img className="type" alt={props.item["Type"]} src={veg}/>:<img alt={props.item["Type"]} src={nonVeg}/>}
              {props.item["Dish Name"]}
            </Card.Title>
            <Card.Text className="price">

              {props.item["Description"]}
              {"₹"+props.item["Price"]}
            </Card.Text>
          </Card.Body>
        </div>
        <div className="div2">
          <div className="divButton">
            <span className="spanSign" onClick={()=>props.decreaseCounter(props.item,props.index)} hidden={props.counter===undefined}>-</span>
            <span className="spanSign" style={{paddingLeft:"6px",paddingRight:"6px"}}>{props.counter!==undefined?props.counter:"ADD"}</span>
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
