import {
  createBrowserRouter,

} from "react-router-dom";


import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";


import Dashboard from "../Layout/Dashboard";
import ManageUser from "../DashboardPages/ManageUser/ManageUser";
import Instructor from "../Pages/Instructor/Instructor";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'signup',
        element: <SignUp></SignUp>
      },

      {
        path: 'login',
        element: <Login></Login>
      },

      {
        path: 'instructor',
        element: <Instructor></Instructor>
      }

      
    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
            path: 'manageuser',
            element: <ManageUser></ManageUser>
      }
    ]

  }
]);