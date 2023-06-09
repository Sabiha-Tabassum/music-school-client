import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import MyClassHook from '../../hooks/MyClassHook/MyClassHook';
import {  FaTrash } from 'react-icons/fa';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses] = MyClassHook();
    // console.log(myClasses)
    const studentClasses = myClasses.filter(studentClass => studentClass.email === user?.email)

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
                            <th>Email</th>
                           


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
                                <td><button> <FaTrash></FaTrash> </button></td>
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