import React, { useState } from "react";
import signin from "../Assests/SignInpage.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import register from "./Register";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

		const isValidPassword =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

		if (!isValidEmail) {
			alert("Email is not valid");
		}

		if (!isValidPassword) {
			alert("Password is not valid");
		}

		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				navigate("/");
			})
			.catch((error) => {
				setError(true);
				// setErrorMessage(error.message.substring(22, 42));
				console.log(error);
			});
	};

	return (
		// <div className="h-screen flex items-center justify-center">
		// 	<form className="w-4/12 flex flex-col gap-2" onSubmit={handleSubmit}>
		// 		<input
		// 			className="border border-black px-2 py-1 rounded-md"
		// 			type="email"
		// 			onChange={(e) => setEmail(e.target.value)}
		// 		/>
		// 		<input
		// 			className="border border-black px-2 py-1 rounded-md"
		// 			type="text"
		// 			onChange={(e) => setPassword(e.target.value)}
		// 		/>
		// 		<button className="bg-slate-500 px-2 py-1 rounded-md">Login</button>
		// 		{error && <p>{errorMessage}</p>}
		// 	</form>
		// </div>
		<div className="mainContainer">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Email Address</label>
						<br />
						<input
							onChange={(e) => setEmail(e.target.value)}
							className="w-full"
							type="text"
							placeholder="example@gmail.com"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<br />
						<input
							onChange={(e) => setPassword(e.target.value)}
							className="w-full"
							type="text"
							placeholder="Password"
						/>
					</div>

					<div>
						<input
							type="submit"
							value="Login"
							className="w-full bg-[#ffffff] cursor-pointer hover:bg-[#f4f6f4]"
						/>
						<br />
					</div>
					<div className="text-center relative bottom-6">
						Don't have an account?
						<Link to="/register">Signup</Link>
					</div>
					<div className="btn">
						<button className="w-full bg-transparent border-4 hover:bg-[#f4f6f4]">
							<span className="flex items-center gap-1 justify-center py-1 text-red-900">
								<FcGoogle />
								Google
							</span>
						</button>
						<button className="w-full bg-transparent border-4 hover:bg-[#f4f6f4]">
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
