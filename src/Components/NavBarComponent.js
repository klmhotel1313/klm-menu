import React from 'react';
import {Nav} from 'react-bootstrap';
import './CSS/Nav.css';
import {Link} from "react-router-dom";
import searchIcon from "../icons/searchIcon.png"
import cart from "../icons/cart.png"



function NavBarComponent(props) {

  return (
    <div className="navbar">
      <Nav className="justify-content-end navbar-child" variant="pills">
        <Nav.Item>
          <Nav>
            <Link to="/search"><img src={searchIcon} alt=""/></Link>
          </Nav>
        </Nav.Item>
        <Nav.Item>
          <Nav>
            <Link to="/search"><img src={cart} alt=""/></Link>
          </Nav>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBarComponent;
