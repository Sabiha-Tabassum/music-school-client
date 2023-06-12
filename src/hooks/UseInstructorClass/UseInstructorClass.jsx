import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseInstructorClass = () => {
    const { user } = useContext(AuthContext);

    const { data: classes = [], refetch, isLoading } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://music-school-server-sabiha-tabassum.vercel.app/class?email${user?.email}`);
            
            return res.json();
        }
    })

    return[classes, refetch]
};

export default UseInstructorClass;