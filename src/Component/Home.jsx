import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assests/img1.png";

const Home = () => {
	return (
		<div>
			<div className="flex justify-between items-center px-20 py-10 gap-5">
				<div className="w-1/2 flex flex-col items-start gap-10">
					<h1 className="font-bold text-6xl">
						We provide super fast delivary service
					</h1>
					<p>
						Lorem ipsum dolor sit consectetur, adipisicing elit. Tempora debitis
						inventore provident deserunt blanditiis praesentium illo dolore hic.
						Quis commodi voluptates unde sint in! Quia, odio! Officiis nesciunt
						magni accusantium.
					</p>
					<button>
						<Link
							to="/"
							className="px-6 py-4 rounded-full border-green-700 border bg-[#58c076]">
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
						className="w-[500px] h-[500px] rounded-[50%]"
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
					<h1>Faster Delivary</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border-green-700 border rounded-full hover:bg-[#58c076]">
						Read more...
					</button>
				</div>

				<div className="flex flex-col justify-center items-center gap-4 bg-[#b7ffcc92] rounded-xl px-4 py-8">
					<img
						className="w-[100px]"
						src="https://static.vecteezy.com/system/resources/previews/012/871/553/original/certified-halal-food-logo-best-for-food-packaging-islamic-food-logo-png.png"
						alt=""
					/>
					<h1>Faster Delivary</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border-green-700 border rounded-full hover:bg-[#58c076]">
						Read more...
					</button>
				</div>
				<div className="flex flex-col justify-center items-center gap-4 bg-[#b7ffcc92] rounded-xl px-4 py-8">
					<img
						className="w-[100px]"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Food_Network_New_Logo.png/492px-Food_Network_New_Logo.png"
						alt=""
					/>
					<h1>Faster Delivary</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border-green-700 border rounded-full hover:bg-[#58c076]">
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
							className="px-6 py-4 rounded-full border-green-700 border-2">
							Order Now
						</Link>
					</button>
				</div>
			</div>
			<div className="flex justify-between px-20 py-40 bg-green-200">
				<div className="w-1/2">
					<h1 className="text-4xl pb-4">Visit our Restuarants</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
						ratione non, distinctio temporibus fuga vel, vitae ad recusandae
						illo maxime reiciendis unde quo qui aspernatur iusto. Dolorem enim
						tempore veritatis.
					</p>
				</div>
				<div>
					<button className="w-[200px] px-8 py-4 border border-green-500 bg-transparent rounded-full text-2xl">
						Visit Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
