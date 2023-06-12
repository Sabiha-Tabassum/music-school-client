import React from 'react';



const PopularClassData = ({popularClass}) => {
    const {image} = popularClass;
    return (
        <div>
           
            <div>
                <img className='h-40 rounded-lg' src={image} alt="" />
            </div>
        </div>
    );
};

export default PopularClassData;