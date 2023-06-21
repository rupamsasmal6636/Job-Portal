import ReactDOM from "react-dom";
//import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Job from "./pages/Job";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

 

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
        path: "/job",
        element: <Job />,
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
        element: <Login/>,
      },
      
  ]);

ReactDOM.render(
//<App />,
<RouterProvider router={router} />,
 document.getElementById("root"));

 