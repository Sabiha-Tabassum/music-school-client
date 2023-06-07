import React from 'react';
import {  FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button  className="btn  btn-outline">
                    <FaGoogle></FaGoogle><span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;