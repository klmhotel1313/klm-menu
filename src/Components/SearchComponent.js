import React,{useState} from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
import data from '../MenuData/data.json';
import CategoryCardComponent from './CategoryCardComponent.js'
import './CSS/SearchBar.css'
import {Heading} from '../pojo.js';

function SearchComponent(props) {
  let heading=new Heading()
  let [counter,setCounter]=React.useState(JSON.parse(window.sessionStorage.getItem("counter")===null||typeof window.sessionStorage.getItem("counter")===undefined?"{}":window.sessionStorage.getItem("counter")))

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
    console.log(counter);
    window.sessionStorage.setItem("counter",JSON.stringify({
      ...counter,
      [item[heading.dishName]+item[heading.type]]:[count,item[heading.price]]
    }))
  }
  let decreaseCounter=(item,index)=>{
    let count=0
    if(counter[item[heading.dishName]+item[heading.type]]>0){
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
  const [food,setFood]=useState({})
  let categoryComponent=Object.keys(food).map((category,index)=>{
    return(<CategoryCardComponent counter={counter} key={index} data={food} category={category} header={category} decreaseCounter={decreaseCounter} increaseCounter={increaseCounter}/>)
  })
  let findFood=(e)=>{
    let value=e.target.value
    let filterResult={}
    if(value!==""){
      value=value.toLowerCase();
      Object.keys(data).map((category)=>{
        let items = data[category].filter(item=>{
          return item[heading.dishName].toLowerCase().includes(value);
        });
        if(items.length>0){
          filterResult={
            ...filterResult,
            [category]:items
          }
        }

      });
    }
    setFood(filterResult);

  }
  return (
    <div className="searchbar">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Dish's Name" onChange={e=>findFood(e)}/>
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      {categoryComponent}
    </div>
  );
}

export default SearchComponent;
