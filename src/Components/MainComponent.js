import React from 'react';
import FoodMenuComponent from './FoodMenuComponent.js'
import NavBarComponent from './NavBarComponent.js'
import ImageComponent from './ImageComponent.js'
import ModalComponent from './ModalComponent.js'
import data from '../MenuData/data.json';
import './CSS/Main.css';
function MainComponent() {

  const [modalShow, setModalShow] = React.useState(false);
  let catdata={};
  Object.keys(data).map(category=>{
    catdata={
      ...catdata,
      [category]:""
    }
  })
  const [cat,setCat]=React.useState(catdata);


  const scrollToCategory=(category)=>{
    setModalShow(false);
    if(cat[category]=="selected"){

      setCat({
        ...cat,
        [category]:"clicked"
      });

    }
    else{
      setCat({
        ...cat,
        [category]:"selected"
      });
    }
    console.log(cat);

  }
  return (
    <div>
      <NavBarComponent/>
      <ImageComponent/>
      <FoodMenuComponent cat={cat}/>
      <div className="floatdiv">
        <button className="float" onClick={() => setModalShow(true)}>Menu</button>
      </div>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        scrolltocategory={scrollToCategory}
        />
    </div>
  );
}

export default MainComponent;
