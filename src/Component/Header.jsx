import React, { useState } from 'react'
import LOGO from "../Assests/AhmadLOGO.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

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
				</ul>
			</nav>
			<div className='rightNav'>
				<div><BsCart4/></div>
				<div>DarkMode</div>
				<button
					onClick={() => {
						login == "Login" ? SetLogin("Logout") : SetLogin("Login");
					}}>
					{login}
				</button>
			</div>
		</div>
	);
};

export default Header
