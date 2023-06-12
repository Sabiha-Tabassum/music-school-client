import React from 'react';

import PopularClassData from '../PopularClassData/PopularClassData';

import AddByTeacher from '../../hooks/AddByTeacher/AddByTeacher';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const PopularClass = () => {
    const [classes] = AddByTeacher();
    const allClasses = classes.filter(allClass => allClass.status === 'Approved');
    return (
        <div>
             <SectionTitle heading='Popular Classes'></SectionTitle>
            <div className='grid md:grid-cols-3 ml-28 '>
                {
                    allClasses.slice(0, 6).map(image => <PopularClassData
                        key={image._id}
                        popularClass={image}></PopularClassData>)
                }
            </div>
        </div>
    );
};

export default PopularClass;