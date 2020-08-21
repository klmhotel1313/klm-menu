import React from 'react';
import {Carousel} from 'react-bootstrap';
import imageList from '../MenuData/imagesList.json'
import './CSS/Image.css'
function ImageComponent() {

  let images=imageList.map((name,index)=>{
      return(
        <Carousel.Item key={index}>
          <img thumbnail={"true"} style={{overflow:"hidden"}}
            className="d-block w-100 imgslider"
            src={require("../MenuData/images/"+name)}
            alt=""
            />
        </Carousel.Item>
      )
  })
  return (
    <div className="imgslider">
      <Carousel>
          {images}
      </Carousel>
    </div>
  );
}

export default ImageComponent;
