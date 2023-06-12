import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyEnrollClass = () => {
    const { data: myEnrollClass = [], refetch } = useQuery(['payment'], async () => {
        const res = await fetch('https://music-school-server-sabiha-tabassum.vercel.app/payment/')
        return res.json();
    })

    return[myEnrollClass, refetch]

};

export default MyEnrollClass;