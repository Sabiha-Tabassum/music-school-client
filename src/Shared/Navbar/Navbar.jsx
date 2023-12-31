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
                        isPending ? "pending" : isActive ? "text-indigo-400 hover:bg-slate-200 font-semibold" : ""
                    }
                >
                    Home
                </NavLink>
            </div>

            <div className='mx-4'>
                <NavLink
                    to="/instructor"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-indigo-400 hover:bg-slate-200 font-semibold" : ""
                    }
                >
                    Instructors
                </NavLink>
            </div>


            <NavLink
                to="/classes"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-indigo-400 hover:bg-slate-200 font-semibold" : ""
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
                            isPending ? "pending" : isActive ? "text-indigo-400 hover:bg-indigo-200 font-semibold" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                  </div>
            }


        </>
    return (
        <div>
            <div className="navbar bg-slate-100 mb-1 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-sm text-indigo-400">Life Tune <br  /> music academy</Link>
                   
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

                            <button onClick={handleLogOut} className='btn border-b-indigo-600 bg-indigo-200 '>Log Out</button>
                        </> :
                            <>
                                <button className='btn border-b-indigo-600 bg-indigo-200 text-indigo-500'><Link to="/login">Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;