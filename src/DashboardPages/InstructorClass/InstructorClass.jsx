import React from 'react';
import AddByTeacher from '../../hooks/AddByTeacher/AddByTeacher';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import MyClassHook from '../../hooks/MyClassHook/MyClassHook';
import Swal from 'sweetalert2';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';


const InstructorClass = () => {


    const {user} = useContext(AuthContext);
    const [classes] = AddByTeacher();
    const [myClasses] = MyClassHook();
    console.log(myClasses);

    const instructorClasses = classes.filter(instructorClass => instructorClass.email === user?.email)
    console.log(instructorClasses);


    // const handleEnrollClass = (myClasses) => {

    //     console.log(myClasses);
       
        
    //      const enrollClass = {Total_Student: myClasses.length }
    //      console.log(enrollClass)
    //      fetch('https://music-school-server-sabiha-tabassum.vercel.app/totalenroll', {
    //          method: 'POST',
    //          headers: {
    //              'content-type': 'application/json'
    //          },
    //          body: JSON.stringify(enrollClass)
    //      })
    //      .then(res => res.json())
    //      .then(data => {
    //          if(data.insertedId){
                 
    //              Swal.fire({
    //                  position: 'top-end',
    //                  icon: 'success',
    //                  title: 'enroll student',
    //                  showConfirmButton: false,
    //                  timer: 1500
    //                })
    //          }
    //      })
    //     }




    return(
        <div>

              <SectionTitle heading='My Classes'></SectionTitle>
             
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
                           
                            <th>Status by Admin</th>
                            
                            <th>Feedback by Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.map((classes, index) => <tr key={classes._id}>
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
                                
                                <td>{classes.status}</td>
                                <td>{classes.feedback}</td>
                                
                               
                                
                                
                                


                            </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )


};

export default InstructorClass;