import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/LandingPage/Components/Home";
import About from "./Pages/LandingPage/Components/About";
import Service from "./Pages/LandingPage/Components/Service";
import Signup from "./Pages/LandingPage/Components/Signup";
import Contact from "./Pages/LandingPage/Components/Contact";
import Login from "./Pages/LandingPage/Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
