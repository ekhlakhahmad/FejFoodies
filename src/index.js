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

const AppLayout = () => {
  return (
    <div className='appLayout'>
      <Header />
      <Outlet />
      <Footer/>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


