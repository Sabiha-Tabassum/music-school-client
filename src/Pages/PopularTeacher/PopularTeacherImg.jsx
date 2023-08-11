import React from 'react';

const PopularTeacherImg = ({img}) => {
    const{imgURL} = img;
    return (
        <div  className=''>
            <img className='object-cover w-full h-96 rounded-2xl' src={imgURL} alt="Instructor" />
        </div>
    );
};

export default PopularTeacherImg;



// style={{height: '400px'}}