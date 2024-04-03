import React, { useState } from 'react'
import LOGO from "../Assests/COMPUTER (4)-modified.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdHistory, MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";


import {
	FaRegHeart,
	FaRegStar,
	FaRegUserCircle,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiCoupon4Line } from "react-icons/ri";
import Login from "./Login";

const Header = () => {
	const [login, setLogin] = useState("Login");
	const [dark, setDark] = useState(<MdOutlineLightMode />);

	const [isShow, setIsShow] = useState(false);

	return (
		<div className="header-sec">
			<img src={LOGO} alt="logo" />
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
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
				<div
					className="darkMode"
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
				<button>
					<Link className="loginBtn" to="/login">
						Login
					</Link>
				</button>

				<div
					className="cursor-pointer"
					onClick={() => {
						setIsShow(true);
					}}>
					<VscThreeBars />
				</div>
				<div className="logo">
					{isShow && (
						<div className="sidebar">
							<div className="top">
								<div className="topprofile">
									<p>
										<FaRegUserCircle />
									</p>
									<p>Ekhlakh Ahmad</p>
									<p
										className="cursor-pointer"
										onClick={() => {
											setIsShow(false);
										}}>
										<RxCross1 />
									</p>
								</div>
							</div>
							<div className="middle">
								<ul>
									<li>
										<a href="#">
											<span>
												<CgProfile />
											</span>
											Profile
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<CiDeliveryTruck />
											</span>
											Order
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<FaRegHeart />
											</span>
											Wish List
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<IoMdNotificationsOutline />
											</span>
											Notification
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<MdHistory />
											</span>
											History
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<FaRegStar />
											</span>
											Star
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<RiCoupon4Line />
											</span>
											Coupon
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<IoLocationOutline />
											</span>
											Address
										</a>
									</li>
									<li>
										<a href="#">
											<span>
												<HiOutlineDevicePhoneMobile />
											</span>
											Mobile No.
										</a>
									</li>
								</ul>
							</div>
							<div className="buttom">
								<button>
									<Link to="/" className="LogoutBtn">
										Logout
									</Link>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header
