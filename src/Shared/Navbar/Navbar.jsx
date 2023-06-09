import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Avatar from '../../Components/Avatar/Avatar';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

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
                    to="/instructor"
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



            {
                user && 
                   <div className='mx-4'>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-sky-500 font-semibold" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                  </div>
            }


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
                    <Avatar></Avatar>
                    {
                        user ? <>

                            <button onClick={handleLogOut} className='btn btn-primary '>Log Out</button>
                        </> :
                            <>
                                <button className='btn btn-primary'><Link to="/login">Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;