
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AllUser from '../../hooks/AllUser/AllUser';

const ManageUser = () => {
   const [user, refetch] = AllUser();
   
    const handleMakeAdmin = user => {
        fetch(`https://music-school-server-sabiha-tabassum.vercel.app/user/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user => {
        fetch(`https://music-school-server-sabiha-tabassum.vercel.app/user/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Instructor now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Manage User</title>
            </Helmet>
            <h3 className='text-3xl font-semibold'>Total Users:  {user.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'Admin' ? 'Admin' :
                                    <button disabled={user.role === 'Instructor'} onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg"><FaUserShield></FaUserShield></button>}
                                </td>

                                <td>{user.role === 'Instructor' ? 'Instructor' :
                                    <button disabled={user.role === 'Admin'} onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-lg"><FaUserShield></FaUserShield></button>}
                                </td>

                               
                            </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;