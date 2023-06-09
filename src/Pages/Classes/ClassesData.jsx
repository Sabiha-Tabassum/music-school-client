import React from 'react';


const ClassesData = ({allClass}) => {

   

    const {image,class_name,name,price,seats} = allClass;
    return (
        <div className="card w-80 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={image} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Instructor Name: {name}</h2>
                
                <h4>Class Name: {class_name}</h4>
                <p className='font-semibold'>Price: {price}</p>
                <p className='font-semibold'>Available Seats: {seats}</p>
                
            </div>
            <button>Select</button>
        </div>
    );
};

export default ClassesData;