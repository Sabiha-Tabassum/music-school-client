import React from 'react';



const PopularClassData = ({ popularClass }) => {
    const { image, class_name, seats, price } = popularClass;
    return (
        <div className='relative transition duration-700 transform hover:-translate-y-1'>


            <img className='h-40 rounded-lg mt-1 object-cover' src={image} alt="" />

            <div className='bg-red-950 bg-opacity-80 opacity-0 hover:opacity-100 text-white absolute inset-0 w-60'>
                <div className='my-4 mx-4'>
                    <p>{class_name}</p>
                    <br />
                    <p>Seats:{seats}</p>
                    <br />
                    <p>Price:{price}</p>
                </div>

            </div>
        </div>
    );
};

export default PopularClassData;