import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assests/img1.png";
import FastDelivery from "../Assests/FastDelivery.png";
import BestQuality from "../Assests/BestQuality.png";
import EasyToOrder from "../Assests/EasyToOrder.png";

const Home = () => {
	return (
		<div>
			<div className="flex justify-between items-center px-20 py-10 gap-5">
				<div className="w-1/2 flex flex-col items-start gap-10">
					<h1 className="font-bold text-6xl">
						Enjoy Our <span className="text-green-700">Delicious Meal</span>
					</h1>
					<p>
						Lorem ipsum dolor sit consectetur, adipisicing elit. Tempora debitis
						inventore provident deserunt blanditiis praesentium illo dolore hic.
						Quis commodi voluptates unde sint in! Quia, odio! Officiis nesciunt
						magni accusantium.
					</p>
					<button>
						<Link
							to="/login"
							className="px-6 py-4 rounded-full border-green-700 border bg-transparent hover:bg-green-700 hover:text-white transition-all">
							Get Started
						</Link>
					</button>
					<div className="flex justify-evenly gap-8 items-center">
						<div className="flex flex-col justify-center items-center ">
							<p>500+</p>
							<p>Happy customer</p>
						</div>
						<div className="flex flex-col justify-center items-center ">
							<p>800K+</p>
							<p>Food Delivered</p>
						</div>
					</div>
				</div>
				<div>
					<img
						src="https://img.freepik.com/premium-photo/family-breaking-fast_8595-15021.jpg"
						alt="image"
						className="w-[500px] h-[500px] rounded-[50%] object-cover"
					/>
				</div>
			</div>
			<div className="flex px-20 gap-5 py-10">
				<div className="flex flex-col justify-center items-center gap-4 bg-[#b7ffcc92] rounded-xl px-4 py-8">
					<img
						className="w-[100px] object-cover"
						src="https://www.wfp.org/sites/default/files/styles/media_embed/public/2021-07/gfl-320x320_op.png?itok=s20GPAxq"
						alt=""
					/>
					<h1>Good Food</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border-green-700 border rounded-full hover:bg-green-700 hover:text-white ">
						Read more...
					</button>
				</div>

				<div className="flex flex-col justify-center items-center gap-4 bg-[#b7ffcc92] rounded-xl px-4 py-8">
					<img
						className="w-[100px]"
						src="https://static.vecteezy.com/system/resources/previews/012/871/553/original/certified-halal-food-logo-best-for-food-packaging-islamic-food-logo-png.png"
						alt=""
					/>
					<h1>Halal Food</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border-green-700 border rounded-full hover:bg-green-700 hover:text-white ">
						Read more...
					</button>
				</div>
				<div className="flex flex-col justify-center items-center gap-4 bg-[#b7ffcc92] rounded-xl px-4 py-8">
					<img
						className="w-[100px] h-[100px] rounded-[50%]"
						src="https://www.rewardsnetwork.com/wp-content/uploads/2016/01/Servers_Main1.jpg"
						alt=""
					/>
					<h1>Serve Fast</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border-green-700 border rounded-full hover:bg-green-700 hover:text-white ">
						Read more...
					</button>
				</div>
			</div>

			<div className="flex justify-between items-center px-20 py-8">
				<div>
					<img src={img1} alt="image" />
				</div>
				<div className="w-1/2 flex flex-col gap-4">
					<h1 className="font-bold text-4xl">Fasted Delivery & easy Pickup</h1>
					<p>
						Best cooks and best delivery guys all at your service, Hot tasty
						food reach you in 25 minutes
					</p>
					<ul className="list-disc">
						<li className="list-disc">Fresh Ingredients</li>
						<li className="list-disc">Proper Seasoning</li>
						<li className="list-disc">Consistent Flavors</li>
						<li className="list-disc">Texture and Doneness</li>
						<li className="list-disc">Plate Presentations</li>
					</ul>
					<button>
						<Link
							to="/"
							className="px-6 py-4 rounded-full border-green-700 border-2 hover:bg-green-700 hover:text-white ">
							Order Now
						</Link>
					</button>
				</div>
			</div>
			<div className="flex flex-col px-20 py-32 bg-green-100">
				<h1 className="text-4xl font-bold text-center py-10">
					How Does It Work?
				</h1>
				<div className="flex justify-between">
					<div className="flex flex-col justify-center items-center gap-4 p-4 border-2 rounded-2xl border-green-700">
						<img src={EasyToOrder} alt="" className="w-[100px] rounded" />
						<h1>Easy to order</h1>
						<p>you only need a few steps in ordering fodd</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-4 p-4 border-2 rounded-2xl border-green-700">
						<img src={FastDelivery} alt="" className="w-[100px] rounded" />
						<h1>Fastest Delivery</h1>
						<p>Delivery that it always ontime even faster</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-4 p-4 border-2 rounded-2xl border-green-700">
						<img src={BestQuality} alt="" className="w-[100px] rounded" />
						<h1>Best Quality</h1>
						<p>Not only fast for us quality is also number one</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
