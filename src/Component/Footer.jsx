import React, { useState } from "react";
import { MdLanguage, MdOutlineLanguage } from "react-icons/md";
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
							<a className="hover:text-[#028152]" href="#">Who We Are</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Blog</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Work With Us</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Investor Relations</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Report Fraud</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Press Kit</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Contact Us</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>ZOMAVERSE</p>
						<li>
							<a className="hover:text-[#028152]" href="#">Zomato</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Blinkit</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Feeding India</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Hyperpure</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Zomaland</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>FOR RESTAURANTS</p>
						<li>
							<a className="hover:text-[#028152]" href="#">Parter With Us</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Apps For You</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>LEARN MORE</p>
						<li>
							<a className="hover:text-[#028152]" href="#">Privacy</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Security</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Term</a>
						</li>
						<li>
							<a className="hover:text-[#028152]" href="#">Sitemap</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<p>SOCIAL LINKS</p>
						<div className="socialLinks">
							<a className="hover:text-[#028152]" href="#">
								<FaLinkedin />
							</a>
							<a className="hover:text-[#028152]" href="#">
								<FaInstagram />
							</a>
							<a className="hover:text-[#028152]" href="#">
								<FaFacebook />
							</a>
							<a className="hover:text-[#028152]" href="#">
								<FaGithub />
							</a>
							<a className="hover:text-[#028152]" href="#">
								<FaWhatsapp />
							</a>
						</div>
						<div className="flex gap-6 mt-8">
							<a className="hover:text-[#028152]" href="#">
								<img
									src="https://w7.pngwing.com/pngs/30/346/png-transparent-app-store-iphone-android-apple-electronics-text-logo.png"
									alt="appstore"
									className="w-[100px] bg-white rounded-md"
								/>
							</a>
							<a className="hover:text-[#028152]" href="#">
								<img
									src="https://static.vecteezy.com/system/resources/previews/024/170/871/non_2x/badge-google-play-and-app-store-button-download-free-png.png"
									alt="playstore"
									className="w-[100px] bg-white rounded-md"
								/>
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
