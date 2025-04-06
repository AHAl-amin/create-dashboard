import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Navber from "../Pages/Navber/Navber";
import Sideber from "../Pages/Sideber/Sideber";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OrderManagment from "../Pages/OrderManagment/OrderManagment";
import AddQuestions from "../Pages/AddQuestions/AddQuestions";
import MakeAdmin from "../Pages/MakeAdmin";
import ManageSubscrip from "../Pages/ManageSubscrip";
import Settings from "../Pages/Settings";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/navber",
          element: <Navber></Navber>
        },
        {
          path: "/sideber",
          element: <Sideber></Sideber>
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "/orders",
          element: <OrderManagment></OrderManagment>
        },
        {
          path: "/addquestion",
          element: <AddQuestions> </AddQuestions>
        },
        {
          path: "/makeadmin",
          element: <MakeAdmin></MakeAdmin>
        },
        {
          path: "/managesubscribers",
          element: <ManageSubscrip></ManageSubscrip>
        },
        {
          path: "/settings",
          element: <Settings></Settings>
        },

       
      ]
    },
  ]);