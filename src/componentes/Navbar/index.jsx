import React, { useState } from "react";
import "./Navbar.css";

import Cartwidget from "../Cartwidget";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Ecommerce</span>
      <div className={`nav-items ${isOpen && "open"}`}>

        <NavLink ClassName="nav_link"to="/ofertas">Ofertas</NavLink>
        <NavLink ClassName="nav_link"to="/aseo">Aseo</NavLink>
        <NavLink ClassName="nav_link"to="/abarrotes">Abarrotes</NavLink>
        <NavLink ClassName="nav_link"to="/cart">Carrito</NavLink>
          <Cartwidget/>
          <NavLink/>
        
      </div>
      <div>
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      
        <div className="bar"></div>
      </div>
    </div>
    
  );
};

export default Navbar;