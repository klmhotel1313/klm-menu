import React from 'react';
import CategoryCardComponent from './CategoryCardComponent.js'
import data from '../MenuData/data.json';
function FoodMenuComponent(props) {
  let categoryComponent=Object.keys(data).map((category,index)=>{
    return(<CategoryCardComponent key={index} data={data} cat={props.cat[category]} category={category} header={category}/>)
  })
  return (
    <div>
      {categoryComponent}
    </div>
  );
}

export default FoodMenuComponent;
