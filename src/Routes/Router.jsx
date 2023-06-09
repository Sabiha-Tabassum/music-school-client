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
import Classes from "../Pages/Classes/Classes";
import MyClass from "../DashboardPages/MyClass/MyClass";
import EnrollClass from "../DashboardPages/EnrollClass/EnrollClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },

      {
        path: 'classes',
        element: <Classes></Classes>
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
      },

      {
        path: 'myclass',
        element: <MyClass></MyClass>
      },

      {
        path: 'enrolledclass',
        element: <EnrollClass></EnrollClass>
      }

    ]

  }
]);