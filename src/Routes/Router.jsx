import {
    createBrowserRouter,
    
  } from "react-router-dom";


import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";



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
        }
      ]
    },
  ]);