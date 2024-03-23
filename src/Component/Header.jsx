import React, { useState } from 'react'
import LOGO from '../Assests/FEJ LOGO.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [login, SetLogin] = useState("Login");
  return (
    <div className="header-sec">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallary">Gallary</Link>
          </li>
          <li>Grocery</li>
          <li>Cart</li>
          <button
            onClick={() => {
              login == "Login" ? SetLogin("Logout") : SetLogin("Login");
            }}>
            {login}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header
