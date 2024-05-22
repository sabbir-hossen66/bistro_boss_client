import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../components/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "@/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "@/layout/Dashboard";
import Cart from "@/Pages/Dashboard/Cart/Cart";
import Bookings from "@/Pages/Dashboard/Bookings/Bookings";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <PrivateRoute><Menu></Menu></PrivateRoute>,

      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
    ],
  }
]);