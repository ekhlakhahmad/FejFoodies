import React from "react";
import signin from "../Assests/SignInpage.svg";

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
						<input className="w-full" type="submit" />
						<br />
						<p>
							Don't have an account? <a href="#">Signup now</a>
						</p>
					</div>
					<div className="btn">
						<button className="w-full">Google</button>
						<button className="w-full">Facebook</button>
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
