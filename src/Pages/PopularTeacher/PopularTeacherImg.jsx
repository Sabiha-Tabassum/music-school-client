import React from 'react';

const PopularTeacherImg = ({img}) => {
    const{imgURL,name} = img;
    return (
        <div  className='relative transition duration-400 transform hover:-translate-y-1'>
            <img className='object-cover w-full h-96 rounded-2xl' src={imgURL} alt="Instructor" />

            <div className='bg-sky-950 bg-opacity-80 opacity-0 hover:opacity-100 inset-0 absolute text-white font-bold '>
                <p className='my-48 mx-32'>{name}</p>
            </div>
        </div>
    );
};

export default PopularTeacherImg;



// style={{height: '400px'}}