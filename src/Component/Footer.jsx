import React, { useState } from "react";
import { MdLanguage, MdOutlineLanguage } from "react-icons/md";
import flag from "../Assests/flag.png";
import playstore from "../Assests/googleplaystore.png";
import appstore from "../Assests/badge-google-play-and-app-store-button.png";
import {
	FaLinkedin,
	FaInstagram,
	FaFacebook,
	FaGithub,
	FaWhatsapp,
	FaWhatsApp,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer-section">
			<div className="footerHead">
				<h1 className="text-2xl">FEJ Restaurant</h1>
				<div className="lan">
					<div className="flex border-2 bg-white text-black p-1">
						<img src={flag} alt="flag" />
						<select name="in" id="in">
							<option>India</option>
							<option>India</option>
						</select>
					</div>
					<div className="flex border-2 bg-white text-black p-1">
						<MdLanguage />
						<select name="lan" id="lan">
							<option value="language">Language</option>
							<option value="language">Language</option>
						</select>
					</div>
				</div>
			</div>
			<div className="footerLink">
				<div>
					<ul>
						<p>ABOUT ZOMATO</p>
						<li>
							<a href="#">Who We Are</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Work With Us</a>
						</li>
						<li>
							<a href="#">Investor Relations</a>
						</li>
						<li>
							<a href="#">Report Fraud</a>
						</li>
						<li>
							<a href="#">Press Kit</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>ZOMAVERSE</p>
						<li>
							<a href="#">Zomato</a>
						</li>
						<li>
							<a href="#">Blinkit</a>
						</li>
						<li>
							<a href="#">Feeding India</a>
						</li>
						<li>
							<a href="#">Hyperpure</a>
						</li>
						<li>
							<a href="#">Zomaland</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>FOR RESTAURANTS</p>
						<li>
							<a href="#">Parter With Us</a>
						</li>
						<li>
							<a href="#">Apps For You</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>LEARN MORE</p>
						<li>
							<a href="#">Privacy</a>
						</li>
						<li>
							<a href="#">Security</a>
						</li>
						<li>
							<a href="#">Term</a>
						</li>
						<li>
							<a href="#">Sitemap</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>SOCIAL LINKS</p>
						<div className="socialLinks">
							<a href="#">
								<FaLinkedin />
							</a>
							<a href="#">
								<FaInstagram />
							</a>
							<a href="#">
								<FaFacebook />
							</a>
							<a href="#">
								<FaGithub />
							</a>
							<a href="#">
								<FaWhatsapp />
							</a>
						</div>
						<div className="flex gap-6 mt-8">
							<a href="#">
								<img
									src={appstore}
									alt="appstore"
									className="w-[100px] bg-white rounded-full"
								/>
							</a>
							<a href="#">
								<img src={playstore} alt="playstore" className="w-[100px]" />
							</a>
						</div>
					</ul>
				</div>
			</div>
			<div className="text-center">Copyright © 2024 FEJ Restaurant.</div>
		</div>
	);
};

export default Footer;
