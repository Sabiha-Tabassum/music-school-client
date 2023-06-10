import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import MyClassHook from '../../hooks/MyClassHook/MyClassHook';
import {  FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyClass = () => {
   
    const { user } = useContext(AuthContext);
    const [myClasses, refetch] = MyClassHook();
    // console.log(myClasses)
    const studentClasses = myClasses.filter(studentClass => studentClass.email === user?.email)


    const handleDelete = (classes) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/myclass/${classes._id}`, {
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your selected class has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>My EmailId</th>
                           


                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Delete</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentClasses.map((classes, index) => <tr key={classes._id}>
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
                                <td><button onClick={() => handleDelete(classes)}> <FaTrash></FaTrash> </button></td>
                                <td><button>Pay</button></td>





                            </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;