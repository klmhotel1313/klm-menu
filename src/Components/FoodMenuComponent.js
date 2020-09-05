import React from 'react';
import CategoryCardComponent from './CategoryCardComponent.js'
import data from '../MenuData/data.json';
import {Heading} from '../pojo.js';
import ItemCounter from './Counter.jsx';


function FoodMenuComponent(props) {
  let [counter,setCounter]=React.useState(JSON.parse(window.sessionStorage.getItem("counter")===null||typeof window.sessionStorage.getItem("counter")===undefined?"{}":window.sessionStorage.getItem("counter")))

  let heading=new Heading();
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
      setCounter({
        ...counter,
        [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
      })
      window.sessionStorage.setItem("counter",JSON.stringify({
        ...counter,
        [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
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
    let categoryComponent=Object.keys(data).map((category,index)=>{
      return(<CategoryCardComponent key={index} counter={counter} data={data} cat={props.cat[category]} category={category} header={category} decreaseCounter={decreaseCounter} increaseCounter={increaseCounter}/>)
    })


    return (
      <div>
        {categoryComponent}
        <ItemCounter counter={counter}/>
      </div>
    );
  }

  export default FoodMenuComponent;
