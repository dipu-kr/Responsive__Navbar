import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="nav__main">
      <div className="logo">
        <h4>
          VPN<span>Lab</span>
        </h4>
      </div>
      <div className="menu" onClick={handleClick}>
        {clicked ? (
          <AiOutlineClose className="cross-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/demo">Demo</NavLink>
        </li>
        <li>
          <NavLink to="/keyfeature">KeyFeatures</NavLink>
        </li>
        <li>
          <NavLink to="pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="testimonial">Testimonial</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
