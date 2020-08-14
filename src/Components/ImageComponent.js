import React from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from '../images/image1.jpg'
import './CSS/Image.css'
function ImageComponent() {

  return (
    <div className="imgslider">
      <Carousel>
        <Carousel.Item >
          <img thumbnail={"true"} style={{overflow:"hidden"}}
            className="d-block w-100 imgslider"
            src={require("../images/image1.jpg")}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item >
          <img thumbnail={"true"} style={{overflow:"hidden"}}
            className="d-block w-100 imgslider"
            src={image1}
            alt="First slide"
            />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageComponent;
