import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AddByTeacher = () => {
    const { data: classes = [], refetch } = useQuery(['class'], async () => {
        const res = await fetch('https://music-school-server-sabiha-tabassum.vercel.app/class/')
        return res.json();
    })

    return[classes, refetch]
};

export default AddByTeacher;