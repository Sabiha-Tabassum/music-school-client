import React from 'react';

const InstructorAllData = ({ instructor }) => {
    const { name, email, imgURL } = instructor;
    return (
        <div className="card w-80 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={imgURL} alt="Instructor" className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h4>An Instructor</h4>
                <p className='font-semibold'>{email}</p>
                
            </div>
        </div>
    );
};

export default InstructorAllData;