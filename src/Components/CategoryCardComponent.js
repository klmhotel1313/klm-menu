import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import Items from './Items.jsx';
import {Heading} from '../pojo.js';

function CategoryCardComponent(props) {
  const ref=React.useRef(null);
  let heading=new Heading();
  let [counter,setCounter]=React.useState(JSON.parse(window.sessionStorage.getItem("counter")!==null?window.sessionStorage.getItem("counter"):"{}"))
  React.useEffect(()=>{

    if(props.cat!==""&&ref.current){
      console.log(ref)
      console.log(window.pageYOffset);
      console.log(ref.current.scrollTop)
      ref.current.scrollIntoView();

    }
    console.log("rendered");
  },[props.cat]);


  let increaseCounter=(item,index)=>{
    let count=0;
    if(Object.keys(counter).length!==0&&counter[item[heading.dishName]+item[heading.type]]!==undefined){
      count=counter[item[heading.dishName]+item[heading.type]]
      count+=1
    }
    else{
      count=1;
    }
    setCounter({
      ...counter,
      [item[heading.dishName]+item[heading.type]]:count
    })
    console.log(counter);
    window.sessionStorage.setItem("counter",JSON.stringify({
      ...counter,
      [item[heading.dishName]+item[heading.type]]:count
    }))
  }
  let decreaseCounter=(item,index)=>{
    let count=0
    if(counter[item[heading.dishName]+item[heading.type]]>0){
      count=counter[item[heading.dishName]+item[heading.type]]
      count-=1
      setCounter({
        ...counter,
        [item[heading.dishName]+item[heading.type]]:count
      })
      window.sessionStorage.setItem("counter",JSON.stringify({
        ...counter,
        [item[heading.dishName]+item[heading.type]]:count
      }))
    }
    if(count===0){
      setCounter({
        ...counter,
        [item[heading.dishName]+item[heading.type]]:undefined
      })
      window.sessionStorage.setItem("counter",JSON.stringify({
        ...counter,
        [item[heading.dishName]+item[heading.type]]:undefined}))
      }

    }



    let items=props.data[props.category].map((item,index)=>{
      return(
        <Items key={index} counter={counter[item[heading.dishName]+item[heading.type]]} item={item} index={index} decreaseCounter={decreaseCounter} increaseCounter={increaseCounter}/>
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
