import React,{useState} from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
import data from '../MenuData/data.json';
import CategoryCardComponent from './CategoryCardComponent.js'
import './CSS/SearchBar.css'


function SearchComponent(props) {
  const [food,setFood]=useState({})
  let categoryComponent=Object.keys(food).map((category,index)=>{
    return(<CategoryCardComponent key={index} data={food} category={category} header={category}/>)
  })
  let findFood=(e)=>{
    let value=e.target.value
    let filterResult={}
    if(value!==""){
      value=value.toLowerCase();
      Object.keys(data).map((category)=>{
        let items = data[category].filter(item=>{
          return item["Dish Name"].toLowerCase().includes(value);
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
