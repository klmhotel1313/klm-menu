import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import Items from './Items.jsx';

function CategoryCardComponent(props) {
  const ref=React.useRef(null);
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
      setCounter({
        ...counter,
        [item["Dish Name"]]:count
      })
      window.sessionStorage.setItem("counter",JSON.stringify({
        ...counter,
        [item["Dish Name"]]:count
      }))
    }
    if(count===0){
      setCounter({
        ...counter,
        [item["Dish Name"]]:undefined
      })
      window.sessionStorage.setItem("counter",JSON.stringify({
        ...counter,
        [item["Dish Name"]]:undefined}))
      }

    }



    let items=props.data[props.category].map((item,index)=>{
      return(
        <Items key={index} counter={counter[item["Dish Name"]]} item={item} index={index} decreaseCounter={decreaseCounter} increaseCounter={increaseCounter}/>
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
