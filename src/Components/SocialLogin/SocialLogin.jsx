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
           const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
           fetch('https://music-school-server-sabiha-tabassum.vercel.app/user', {
               method: 'POST',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(() => {
              
                  
                   navigate(from, {replace: true});
               
              })
           

        })
       
   }

    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button  onClick={handleGoogleSignIn}  className="btn hover:bg-indigo-400">
                    <FaGoogle className='text-indigo-800'></FaGoogle><span className='text-indigo-800'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;