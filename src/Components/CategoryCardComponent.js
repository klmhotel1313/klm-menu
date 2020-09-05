import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import Items from './Items.jsx';
import {Heading} from '../pojo.js';

function CategoryCardComponent(props) {
  const ref=React.useRef(null);
  let heading=new Heading();

  React.useEffect(()=>{

    if(props.cat!==""&&ref.current){
      console.log(ref)
      console.log(window.pageYOffset);
      console.log(ref.current.scrollTop)
      ref.current.scrollIntoView();

    }
    console.log("rendered");
  },[props.cat]);


    let items=props.data[props.category].map((item,index)=>{
      return(
        <Items key={index} counter={props.counter[item[heading.dishName]+item[heading.type]]} item={item} index={index} decreaseCounter={props.decreaseCounter} increaseCounter={props.increaseCounter}/>
      )
    });
    return (
      <div>
        <Card ref={ref}>
          <Card.Header className="cardHeader">{props.header}</Card.Header>
          {items}
        </Card>
      </div>
    );
  }

  export default CategoryCardComponent;
