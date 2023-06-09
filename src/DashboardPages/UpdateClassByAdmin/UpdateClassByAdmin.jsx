import React from 'react';
import AddByTeacher from '../../hooks/AddByTeacher/AddByTeacher';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const UpdateClassByAdmin = () => {
    const [classes, refetch] = AddByTeacher();



    const handleMakeApprove = classes => {
        fetch(`http://localhost:5000/class/approve/${classes._id}`,{
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
                    title: `${classes.class_name} is approved by admin!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeDeny = classes => {
        fetch(`http://localhost:5000/class/deny/${classes._id}`,{
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
                    title: `${classes.class_name} is denied by admin!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDenyFeedback = classes => {
        fetch(`http://localhost:5000/class/denyFeedback/${classes._id}`,{
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
                    title: 'Feedback done',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    const handleApproveFeedback = classes => {
        fetch(`http://localhost:5000/class/approveFeedback/${classes._id}`,{
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
                    title: 'Feedback done ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>Add class by Instructor</title>
            </Helmet>
            <h3 className='text-3xl font-semibold'>Total Class:  {classes.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Name</th>
                            <th>Email</th>
                           
                            
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Send Feedback</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classes, index) => <tr key={classes._id}>
                                <th>{index + 1}</th>
                               
                               
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>{classes.class_name}</td>
                                <td>{classes.name}</td>
                                <td>{classes.email}</td>
                                <td>{classes.price}</td>
                                <td>{classes.seats}</td>
                                
                                
                                <td>{classes.status === 'Approved' ? 'Approved' :
                                    <button disabled={classes.status === 'Denied'} onClick={() => handleMakeApprove(classes)} className="btn btn-ghost btn-sm">Pending</button>}
                                </td>

                                <td>{classes.status === 'Denied' ? 'Denied' :
                                    <button disabled={classes.status === 'Approved'} onClick={() => handleMakeDeny(classes)} className="btn btn-ghost btn-sm">Pending</button>}
                                </td>
                                <td>
                                    { classes.status === 'Denied' ? <button onClick={() => handleDenyFeedback(classes)}  >This class is not opening yet</button> : '' || classes.status === 'Approved' ? <button onClick={() => handleApproveFeedback(classes)}  >This class is going on successfully</button> : ''}
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

export default UpdateClassByAdmin;