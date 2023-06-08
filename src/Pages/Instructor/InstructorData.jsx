import React from 'react';
import InstructorAllData from './InstructorAllData';

const InstructorData = ({instructor}) => {
    console.log(instructor);
   
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                instructor.map(data => <InstructorAllData key={data._id}
                instructor={data}></InstructorAllData>)
            }
        </div>
    );
};

export default InstructorData;