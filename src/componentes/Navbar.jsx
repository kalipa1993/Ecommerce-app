import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Ecommerce</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/ofertas">Ofertas</a>
        <a href="/aseo">Aseo</a>
        <a href="/abarrotes">Abarrotes</a>
        <a href="/nosotros">Nosotros</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;