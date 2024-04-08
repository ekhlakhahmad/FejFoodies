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
							className="w-full p-2 outline-none border-2 my-2 text-[#1b9b86] text-xl rounded-md border-[#1b9b86]"
							type="text"
							placeholder="name"
						/>
						<input
							className="w-full p-2 outline-none border-2 my-2 text-[#1b9b86] text-xl rounded-md border-[#1b9b86]"
							type="email"
							placeholder="example@gmail.com"
						/>
						<textarea
							name="message"
							placeholder="type your message"
							id=""
							cols="20"
							rows="10"
							className="w-full p-2 outline-none border-2 my-2 text-[#1b9b86] text-xl rounded-md border-[#1b9b86]">
							{" "}
						</textarea>
						<input
							className="w-full p-2 outline-none border-2 my-2 text-[#1b9b86] text-xl rounded-md border-[#1b9b86] cursor-pointer hover:bg-[#1b9b86] hover:text-black"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
