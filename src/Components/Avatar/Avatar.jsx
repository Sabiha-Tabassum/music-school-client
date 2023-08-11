import React, { useContext } from 'react';
import avatar from '../../images/avatar.jpg';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <img className='rounded-full mr-1'
            src={user && user.photoURL ? user.photoURL : avatar } 
            alt="avatar"
            height='50'
            width='50' />
        </div>
    );
};

export default Avatar;