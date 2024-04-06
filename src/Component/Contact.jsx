import React from "react";
import contactimg from "../Assests/contact.svg";

const Contact = () => {
	return (
		<div>
			<div className="flex justify-between items-center my-10 px-10 gap-10">
				<img className="w-1/2 h-[80vh]" src={contactimg} alt="contactimage" />
				<div>
					<form className="w-5/6">
						<input
							className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600"
							type="text"
							placeholder="name"
						/>
						<input
							className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600"
							type="email"
							placeholder="example@gmail.com"
						/>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Message"
							className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600">
							{" "}
						</textarea>
						<input
							className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600 cursor-pointer hover:bg-blue-300 hover:text-black"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
