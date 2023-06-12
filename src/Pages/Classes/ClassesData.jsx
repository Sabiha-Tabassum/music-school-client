import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import AddByTeacher from '../../hooks/AddByTeacher/AddByTeacher';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAdmin from '../../hooks/UseAdmin/UseAdmin';
import UseInstructor from '../../hooks/UseInstructor/UseInstructor';



const ClassesData = ({allClass}) => {

    const { _id, image, class_name, name, price, seats} = allClass;

    const {user} = useContext(AuthContext);
    const [, refetch] = AddByTeacher();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [isAdmin] = UseAdmin();
    const [isInstructor] = UseInstructor();
    



    const handleSelectClass = allClass => {

        console.log(allClass);

        if(user && user.email){
         const selectClass = {classId: _id, name, class_name, image, price, seats, email: user.email }
         console.log(selectClass)
         fetch('https://music-school-server-sabiha-tabassum.vercel.app/myclass', {
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(selectClass)
         })
         .then(res => res.json())
         .then(data => {
             if(data.insertedId){
                 refetch();
                 Swal.fire({
                     position: 'top-end',
                     icon: 'success',
                     title: 'This class is selected by you',
                     showConfirmButton: false,
                     timer: 1500
                   })
             }
         })
        }

       else{
         Swal.fire({
             title: 'Please login before select the class',
           
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'LogIn now'
           }).then((result) => {
             if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
             }
           })
       }
 }


    return (
        <div className="card w-80 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={image} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Instructor Name: {name}</h2>
                
                <h4>Class Name: {class_name}</h4>
                <p className='font-semibold'>Price: {price}</p>
                <p className='font-semibold'>Available Seats: {seats}</p>
                
            </div>
            {}
            <button disabled={isAdmin?.admin || isInstructor?.instructor} onClick={() =>  handleSelectClass(allClass)} className=''>Select</button>
        </div>
    );
};

export default ClassesData;