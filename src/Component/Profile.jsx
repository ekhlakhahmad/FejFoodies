import React from "react";
import profile from "../Assests/profile.svg";

const Contact = () => {
	return (
		<div>
			<div className="flex justify-center items-center my-10 px-10 gap-10">
				<img className="w-1/2 h-[80vh]" src={profile} alt="contactimage" />
				<div className="flex flex-col items-center gap-10">
					<div className="flex flex-col gap-2 border-2 p-4 rounded-md">
						<img src="" alt="" />
						<div>
							<h1 className="font-bold">Name: </h1>
							<p>Ekhlakh Ahmad</p>
						</div>
						<div>
							<h1 className="font-bold">Order: </h1>
							<ul>
								<li>demo testing</li>
								<li>demo testing</li>
								<li>demo testing</li>
								<li>demo testing</li>
								<li>demo testing</li>
							</ul>
						</div>
						<div>
							<h1 className="font-bold">Address: </h1>
							<p>Phagwara punjab pin code - 841411</p>
						</div>
						<div>
							<h1 className="font-bold">Mobile NO.: </h1>
							<p>+91 9576650491</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
