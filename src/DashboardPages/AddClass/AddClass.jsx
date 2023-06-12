import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_token;

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { price, seats, class_name, status } = data;
                    const newClass = { name: user?.displayName, email: user?.email, price: parseFloat(price), seats: parseFloat(seats), class_name, status, image: imgURL }
                    fetch('https://music-school-server-sabiha-tabassum.vercel.app/class', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })

                        .then(data => {
                            reset();
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/dashboard/instructorclasses')
                            }

                        })

                }
            })
    }


    return (
        <div>
            <SectionTitle heading='Add Class Form'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='px-10'>


                <div class="form-control w-full  ">
                    <label class="label">
                        <span class="label-text">Class Name*</span>

                    </label>
                    <input type="text" placeholder="class Name Here"
                        {...register("class_name", { required: true, maxLength: 80 })}
                        class="input input-bordered w-full " />

                </div>





                <div className='flex gap-2'>

                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Price*</span>

                        </label>
                        <input type="price" placeholder="Type here"
                            {...register("price", { required: true })}
                            class="input input-bordered w-full " />

                    </div>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Available Seats</span>

                        </label>
                        <input type="number" placeholder="Type here"
                            {...register("seats", { required: true })}
                            class="input input-bordered w-full " />


                    </div>
                </div>




                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Class Image*</span>

                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />

                </div>
                <div>
                    <label class="label">
                        <span class="label-text">Status</span>

                    </label>
                    <input {...register("status", { required: true })} type="text" value="Pending" className="file-input file-input-bordered w-full " />
                </div>

                <input type="submit" className='btn btn-sm mt-2' value="Add Class" />


            </form>
        </div>
    );
};

export default AddClass;