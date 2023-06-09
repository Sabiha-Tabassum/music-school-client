import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AddByTeacher = () => {
    const { data: classes = [], refetch } = useQuery(['class'], async () => {
        const res = await fetch('http://localhost:5000/class/')
        return res.json();
    })

    return[classes, refetch]
};

export default AddByTeacher;