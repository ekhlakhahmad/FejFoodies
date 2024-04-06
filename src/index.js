import React from 'react';
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Component/Error";
import Body from "./Component/Body";
import About from "./Component/About";
import Gallary from "./Component/Gallary";
import Header from "./Component/Header";
import "./App.css";
import Footer from './Component/Footer';
import Login from './Component/Login';
import Register from "./Component/Register";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Grocery from "./Component/Grocery";

const AppLayout = () => {
	return (
		<div className="appLayout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Body />,
			},
			{
				path: "/gallary",
				element: <Gallary />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: <Grocery />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


