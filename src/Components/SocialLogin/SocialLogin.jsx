import React from 'react';
import {  FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useContext } from 'react';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button  onClick={handleGoogleSignIn}  className="btn  btn-outline">
                    <FaGoogle></FaGoogle><span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;