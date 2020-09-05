import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './CSS/Nav.css';
import {Link} from "react-router-dom";
import searchIcon from "../icons/searchIcon.png"
import cart from "../icons/cart.png"
import klmlogo from "../icons/klmlogo.png"
import { useLocation } from 'react-router-dom'





function NavBarComponent(props) {
  let location = useLocation()
  React.useEffect(()=>{
  },[location.pathname]);

  let header=()=>{
    switch(location.pathname) {
      case "klm-menu/":
      return "KLM";
      case "/klm-menu":
      return "KLM";
      case "/search":
      return "Search";
      case "/cart":
      return "My-Cart";
      // code block
    }
  }
  return (
    <div className="navbar">
      <Row className="navbarRow">
        <Col className="navbarName">{header()}</Col>
        <Col className="navbarCol navbarLogo">
          <Link to="/klm-menu"><img style={{width:"30px",height:"30px"}} src={klmlogo} alt=""/></Link>
        </Col>
        <Col className="navbarCol navbarIcon">
          <Link to="/search" hidden={header()==="Search"}><img src={searchIcon} alt=""/></Link>
          <Link to="/cart" hidden={header()==="My-Cart"}><img src={cart} alt=""/></Link>
        </Col>
      </Row>
    </div>
  );
}

export default NavBarComponent;
