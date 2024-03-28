import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import flag from "../Assests/flag.png";
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
				<h1>ZOMATO</h1>
				<div className="lan">
					<select name="in" id="in">
						<option value="india">
							<span>
								<img
									src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
									alt=""
								/>
							</span>
							India
						</option>
					</select>
					<select name="en" id="en">
						<option value="english">
							<span>
								<MdOutlineLanguage />
							</span>
							English
						</option>
					</select>
				</div>
			</div>
			<div className="footerLink">
				<div>
					<ul>
						<p>ABOUT ZOMATO</p>
						<li> <a href="#">Who We Are</a></li>
						<li> <a href="#">Blog</a></li>
						<li> <a href="#">Work With Us</a></li>
						<li> <a href="#">Investor Relations</a></li>
						<li> <a href="#">Report Fraud</a></li>
						<li> <a href="#">Press Kit</a></li>
						<li> <a href="#">Contact Us</a></li>
					</ul>
				</div>
				<div>
					<ul>
						<p>ZOMAVERSE</p>
						<li> <a href="#">Zomato</a></li>
						<li> <a href="#">Blinkit</a></li>
						<li> <a href="#">Feeding India</a></li>
						<li> <a href="#">Hyperpure</a></li>
                        <li> <a href="#">Zomaland</a></li>
					</ul>
				</div>
				<div>
					<ul>
						<p>FOR RESTAURANTS</p>
						<li> <a href="#">Parter With Us</a></li>
						<li> <a href="#">Apps For You</a></li>
					</ul>
				</div>
				<div>
					<ul>
						<p>LEARN MORE</p>
						<li> <a href="#">Privacy</a></li>
						<li> <a href="#">Security</a></li>
						<li> <a href="#">Term</a></li>
						<li> <a href="#">Sitemap</a></li>
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
						<div>
							<a href="#">1</a>
							<a href="#">1</a>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
