import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ManageUser = () => {
    const { data: user = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json();
    })
    return (
        <div>
             <Helmet>
                <title>Manage User</title>
            </Helmet>
            <h3 className='text-3xl font-semibold'>Total Users:  {user.length}</h3>
        </div>
    );
};

export default ManageUser;