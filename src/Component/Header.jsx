import React, { useState } from 'react'
import { LOGO_URL } from '../Utility/Content'

const Header = () => {
    const [login, SetLogin]=useState("Login")
  return (
    <div className='header-sec'>
          <div className='logo'>
              <img src={LOGO_URL} alt="logo" /></div>
          <nav>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Grocery</li>
                  <li>Cart</li>
                  <button onClick={() => {
                    login == "Login" ? SetLogin ("Logout") : SetLogin ("Login")
                  }}>{login}</button>
              </ul>
          </nav>
    </div>
  )
}

export default Header
