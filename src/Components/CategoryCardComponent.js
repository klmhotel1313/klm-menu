import React from 'react';
import {Card} from 'react-bootstrap';
import './CSS/Category.css';
import veg from '../icons/veg.png';
import nonVeg from '../icons/non-veg.png';

function CategoryCardComponent(props) {
  const ref=React.useRef(null);
  React.useEffect(()=>{

    if(props.cat!==""&&ref.current){
      console.log(ref)
      console.log(window.pageYOffset);
      console.log(ref.current.scrollTop)
      ref.current.scrollIntoView();

    }
    },[props.cat]);
    let items=props.data[props.category].map((item,index)=>{
      return(
        <div style={{width:'100%'}} key={index}>
          <div className="categoryContainer">
            <div className="div1">
              <Card.Body >
                <Card.Title>
                  {item["Type"]=="VEG"?<img className="type" src={veg}/>:<img src={nonVeg}/>}
                  {item["Dish Name"]}
                </Card.Title>
                <Card.Text className="price">

                  {item["Description"]}
                  {"₹"+item["Price"]}
                </Card.Text>
              </Card.Body>
            </div>
            <div className="div2">
              <div className="divButton"><span style={{paddingRight:"2px"}}>-</span>Add<span style={{paddingLeft:"2px"}}>+</span></div>
            </div>
          </div>
          <div className="line">
          </div>
        </div>
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
