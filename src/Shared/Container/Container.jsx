import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-5xl mx-auto mt-10 mb-5'>
            {children}
        </div>
    );
};

export default Container;