import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {

    const navOptions =
        <>
            <div className='mx-4'>
                <NavLink
                    to="/"

                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-500 font-semibold" : ""
                    }
                >
                    Home
                </NavLink>
            </div>

            <div className='mx-4'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-500 font-semibold" : ""
                    }
                >
                    Instructors
                </NavLink>
            </div>

            
               <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-500 font-semibold" : ""
                    }
                >
                    Classes
                </NavLink>
            

            <div className='mx-4'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-500 font-semibold" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </div>

        </>
    return (
        <div>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;