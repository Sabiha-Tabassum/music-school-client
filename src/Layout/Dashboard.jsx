import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import UseAdmin from '../hooks/UseAdmin/UseAdmin';
import UseInstructor from '../hooks/UseInstructor/UseInstructor';

const Dashboard = () => {

    const [isAdmin] = UseAdmin();
    console.log(isAdmin);

    const[isInstructor] = UseInstructor();
    console.log(isInstructor);
    
   
    return (
        <div>
           <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        
                             <li><Link to='/dashboard/manageuser'>Manage User </Link></li>
                        

                        
                          <li><Link to='/dashboard/addclass'>Add Class </Link></li>

                          <li><Link to='/dashboard/updateclassbyadmin'>Manage Classes</Link></li>

                          <li><Link to='/dashboard/instructorclasses'>Instructor Class  </Link></li>


                          <li><Link to='/dashboard/myclass'>My Selected Class </Link></li>

                          <li><Link to='/dashboard/enrolledclass'>My Enrolled Class </Link></li>
                        
                        
                       
                        
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;