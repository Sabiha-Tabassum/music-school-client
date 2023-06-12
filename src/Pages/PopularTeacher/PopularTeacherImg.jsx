import React from 'react';

const PopularTeacherImg = ({img}) => {
    const{imgURL} = img;
    return (
        <div style={{height: '400px'}} className=''>
            <img className='' src={imgURL} alt="" />
        </div>
    );
};

export default PopularTeacherImg;