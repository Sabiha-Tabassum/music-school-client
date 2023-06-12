import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyClassHook = () => {
    const { data: myClasses = [], refetch } = useQuery(['myclass'], async () => {
        const res = await fetch('https://music-school-server-sabiha-tabassum.vercel.app/myclass/')
        return res.json();
    })

    return[myClasses, refetch]

};

export default MyClassHook;