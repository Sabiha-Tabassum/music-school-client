import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import loginPic from '../assets/111594-login.json';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [passwordEye, setPasswordEye] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handlePasswordEye = () => {
        setPasswordEye(!passwordEye)
    }

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(result.user);
               
            })
            
        Swal.fire({
            title: 'User Login successful',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }

        });

        navigate(from, { replace: true });

    }

    return (
        <>
            <Helmet>
                <title>
                    Login Page-Music School
                </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div>
                            <div>
                                <Lottie animationData={loginPic} loop={true} />
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 mt-2 mx-2 h-52">




                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={(passwordEye === false) ? "password" : "text"} {...register("password", {
                                    required: true
                                })}
                                    placeholder="password" className="input input-bordered" />
                                
                                <div className='absolute top-16 right-2'>
                                    {
                                        (passwordEye === false) ? <FaEyeSlash className='cursor-pointer' onClick={ handlePasswordEye}></FaEyeSlash> :  <FaEye className='cursor-pointer' onClick={ handlePasswordEye}></FaEye>
                                    }
                                   
                                    
                                </div>



                            </div>
                            <div className="form-control mt-6">
                                <input className="btn hover:bg-indigo-400" type="submit" value='Login' />
                            </div>
                        </form>
                        <p className='mx-8 font-semibold  mt-8'>Don't have an Account<Link className='ml-2 text-indigo-500 hover:bg-indigo-300 p-2 rounded-lg ' to="/signup">Sign Up</Link></p>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;