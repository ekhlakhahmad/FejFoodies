import React from "react";
import signin from "../Assests/SignInpage.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
	return (
		<div className="mainContainer">
			<div className="formContainer">
				<form action="">
					<div>
						<label htmlFor="email">Email Address</label>
						<br />
						<input
							className="w-full"
							type="text"
							placeholder="example@gmaiil.com"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<br />
						<input className="w-full" type="password" placeholder="Password" />
					</div>
					<div>
						<input type="checkbox" id="remember" />
						<label htmlFor="remember">Remember me</label>
					</div>
					<div>
						<input
							type="submit"
							value="Login"
							className="w-full bg-[#5be983] cursor-pointer hover:bg-[#5bd87f]"
						/>
						<br />
						<p>
							Don't have an account?{" "}
							<a className="text-blue-800 underline" href="#">
								Signup now
							</a>
						</p>
					</div>
					<div className="btn">
						<button className="w-full bg-transparent border-4">
							<span className="flex items-center gap-1 justify-center py-1 text-red-900">
								<FcGoogle />
								Google
							</span>
						</button>
						<button className="w-full bg-transparent border-4">
							<span className="flex items-center gap-1 justify-center py-1 text-blue-900">
								<FaFacebookF />
								Facebook
							</span>
						</button>
					</div>
				</form>
			</div>
			<div className="imgContainer">
				<img src={signin} alt="sign" />
			</div>
		</div>
	);
};

export default Login;
