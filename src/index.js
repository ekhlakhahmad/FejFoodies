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
				element: <Body />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/gallary",
				element: <Gallary />,
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


