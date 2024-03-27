import React, { useState } from 'react'
import LOGO from "../Assests/Group_1.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

const Header = () => {
	const [login, setLogin] = useState("Login");
	const [dark, setDark] = useState(<MdOutlineLightMode />);
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
						<Link to="/gallary">Gallary</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
				</ul>
			</nav>
			<div className="rightNav">
				<div className="cart">
					<p>0</p>
					<BsCart4 />
				</div>
				<div className='darkMode'
					onClick={() => {
						setDark(
							dark.type === MdOutlineLightMode ? (
								<MdNightlight />
							) : (
								<MdOutlineLightMode />
							)
						);
					}}>
					{dark}
				</div>
				<button
					onClick={() => {
						login == "Login" ? setLogin("Logout") : setLogin("Login");
					}}>
					{login}
				</button>
			</div>
		</div>
	);
};

export default Header
