import React from 'react';

const PopularTeacherImg = ({img}) => {
    const{imgURL} = img;
    return (
        <div className='m-0'>
            <img className='' src={imgURL} alt="" />
        </div>
    );
};

export default PopularTeacherImg;