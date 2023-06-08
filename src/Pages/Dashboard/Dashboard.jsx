import React from 'react';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* Page content here */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}

                    


                    
                    <li><NavLink to='/manageuser'> Manage User </NavLink></li>
                    <li><NavLink to="/"></NavLink></li>
                    <li><NavLink to='/'></NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;