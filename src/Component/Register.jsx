import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpPage from "../Assests/SignUpPage.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

		const isValidPassword =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

		if (!isValidEmail) {
			alert("Email is not valid");
			return;
		}

		if (!isValidPassword) {
			alert("Password is not valid");
			return;
		}

		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				navigate("/login");
			})
			.catch((error) => {
				setIsError(true);
				setErrorMessage(error.message.substring(22, 42));
			});
	};

	return (
		<div className="mainContainer">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">E-mail:</label>
						<br />
						<input
							onChange={(e) => setEmail(e.target.value)}
							className="w-full"
							type="text"
							placeholder="example@gmaiil.com"
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
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
							value="Signup"
							className="w-full bg-[#ffffff] cursor-pointer hover:bg-[#f4f6f4]"
						/>
						<br />
					</div>
					<div className="text-center relative bottom-6">
						Already have an account?
						<Link to="/login" className="text-blue-800 underline">
							Login
						</Link>
					</div>
					{isError && alert({ errorMessage })}
				</form>
			</div>
			<div className="imgContainer">
				<img src={SignUpPage} alt="sign" />
			</div>
		</div>
	);
};

export default Register;
