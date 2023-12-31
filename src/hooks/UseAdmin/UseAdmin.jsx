import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';




const UseAdmin = () => {
    const {user} = useContext(AuthContext);

   
    
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://music-school-server-sabiha-tabassum.vercel.app/user/admin/${user?.email}`);
            console.log('is admin response', res);
            return res.json();
        }
    })

    return [isAdmin, isAdminLoading]
};

export default UseAdmin;