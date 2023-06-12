import React from 'react';
import MyEnrollClass from '../../hooks/MyEnrollClass/MyEnrollClass';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const EnrollClass = () => {

    const { user } = useContext(AuthContext);
    const [myEnrollClass, refetch] = MyEnrollClass();
    console.log(myEnrollClass)
    const myEnrollClasses = myEnrollClass.filter(enrollClass => enrollClass.email === user?.email)
       
    return (
        <div>
            <SectionTitle heading='My Enrolled Class'></SectionTitle>
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
                            <th>TransactionId</th>
                            <th>Date</th>
                            
                           
                           


                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEnrollClasses.map((classes, index) => <tr key={classes._id}>
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
                                <td>{classes.className}</td>
                                <td>{classes.instructorName}</td>
                                <td>{classes.email}</td>
                                <td>{classes.price}</td>
                                <td>{classes.transactionId}</td>
                                <td>{classes.date}</td>
                                
                               
                               





                            </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;