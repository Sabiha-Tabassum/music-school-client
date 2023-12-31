
import { useForm } from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import signUpPic from '../assets/106680-login-and-sign-up.json';
import Swal from 'sweetalert2';








const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_token;

const SignUp = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
       
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
        .then(imageData => {
            const imageUrl = imageData.data.display_url
            createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, imageUrl)
                .then(() => {
                    const saveUser = {name: data.name, email: data.email, imgURL: imageUrl }
                   fetch('https://music-school-server-sabiha-tabassum.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                   })
                   .then(res => res.json())
                   .then(data => {
                    if(data.insertedId){
                         
                        reset();
                        Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'User Created Successfully',
                         showConfirmButton: false,
                         timer: 1500
                        
                       })
                       navigate('/');
                    }
                   })
                  
    
                  }).catch((error) => {
                    console.log(error);
                  });
                
                
                
            }) 

            .catch(error => {
                console.log(error.message)
            })   
        })

        
        
       
                   
        
    }
  
    const password = watch("password", "");
   
    return (
        <>
         <Helmet>
            <title>
                SignUp Page-Music School
            </title>
        </Helmet>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <div>
                            <div>
                                <Lottie animationData={signUpPic} loop={true} />
                            </div>
                    </div>
                </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 mt-0 mb-4 h-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name field is required</span>}
                            </div>

                           
                            <div className="form-control">
                                <label className="label mt-0">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email field is required</span>}
                            </div>


                             <div className="form-control">
                                <label className="label mt-0">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="file" {...register("image", { required: true })}  placeholder="photoURL" className="input input-bordered" />
                                {errors.image && <span className='text-red-600'>Image field is required</span>}
                            </div>
                             

                            <div className="form-control">
                                <label className="label mt-0">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password"
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase, one lower case, one number & one special character</span>}
                               

                            </div>

                            <div className="form-control">
                                <label className="label mt-0">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirm_password", { required: true, validate: (value) =>  {
                                    if(watch("password") != value){
                                        return 'password does not match'

                                    }
                                  },
                                 })} name="confirm_password"  placeholder="confirm password" className="input input-bordered" />
                                  {errors.confirm_password?.type === 'required' && <span className='text-red-600'>Confirm Password must be required</span>}
                                  {errors.confirm_password?.type === 'validate' && <span className='text-red-600'>Password does not match</span>}
                                
                            </div>

                            <div className="form-control mt-2 mb-0">
                                <input className="btn hover:bg-indigo-400" type="submit" value='Sign Up' />
                            </div>
                        </form>
                        <p className='mx-8 font-semibold mb-0'>Already have an Account<Link className='ml-2 text-indigo-500 hover:bg-indigo-300 p-2 rounded-lg' to="/login">Login</Link></p>
                       <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
