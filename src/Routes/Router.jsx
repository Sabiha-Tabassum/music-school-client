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
import AddClass from "../DashboardPages/AddClass/AddClass";
import PrivateRouter from "../Providers/PrivateRouter/PrivateRouter";
import UpdateClassByAdmin from "../DashboardPages/UpdateClassByAdmin/UpdateClassByAdmin";
import InstructorClass from "../DashboardPages/InstructorClass/InstructorClass";









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
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
            path: 'manageuser',
            element: <ManageUser></ManageUser>
      },

      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },

      {
        path: 'updateclassbyadmin',
        element: <UpdateClassByAdmin></UpdateClassByAdmin>
      },

      {
        path: 'instructorclasses',
        element: <InstructorClass></InstructorClass>
      }
    ]

  }
]);