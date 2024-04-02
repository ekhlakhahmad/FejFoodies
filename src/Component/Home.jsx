import React from "react";
import { Link } from "react-router-dom";

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
						<Link to="/" className="px-5 py-2 rounded-md border bg-[#92e3a9]">Get Started</Link>
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
						src="https://c8.alamy.com/comp/RE91AB/young-and-beautiful-woman-feeling-happy-sitting-at-the-table-full-of-healthy-food-on-the-green-wall-background-healthy-eating-and-wellness-concept-RE91AB.jpg"
						alt="image"
						className="w-[500px] h-[500px] rounded-[50%]"
					/>
				</div>
			</div>
			<div className="flex px-20 gap-5 py-10">
				<div className="flex flex-col justify-center items-center gap-4 bg-[#92e3a9] rounded-xl px-4 py-8">
					<img
						className="w-[100px]"
						src="https://www.wfp.org/sites/default/files/styles/media_embed/public/2021-07/gfl-320x320_op.png?itok=s20GPAxq"
						alt=""
					/>
					<h1>Faster Delivary</h1>
					<p>
						Lorem ipsum dolor sit consectetur adipisicing elit.Lorem ipsum dolor
						sit consectetur adipisicing elit.Lorem ipsum dolor sit consectetur
						adipisicing elit.
					</p>
					<button className="px-4 py-2 border rounded-full hover:bg-[#58c076]">
						Read more...
					</button>
				</div>
				<div className="flex flex-col justify-center items-center gap-4 bg-[#92e3a9] rounded-xl px-4 py-8">
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
					<button className="px-4 py-2 border rounded-full hover:bg-[#58c076]">
						Read more...
					</button>
				</div>
				<div className="flex flex-col justify-center items-center gap-4 bg-[#92e3a9] rounded-xl px-4 py-8">
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
					<button className="px-4 py-2 border rounded-full hover:bg-[#58c076]">
						Read more...
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
