import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {

    const { user } = useContext(AuthContext);

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://music-school-server-sabiha-tabassum.vercel.app/user/instructor/${user?.email}`);
            console.log('is instructor response', res);
            return res.json();
        }
    })

    return [isInstructor, isInstructorLoading]

};

export default UseInstructor;