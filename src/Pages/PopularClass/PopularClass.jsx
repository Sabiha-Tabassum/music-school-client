import React from 'react';

import PopularClassData from '../PopularClassData/PopularClassData';
import Container from '../../Shared/Container/Container';
import AddByTeacher from '../../hooks/AddByTeacher/AddByTeacher';

const PopularClass = () => {
    const [classes] = AddByTeacher();
    const allClasses = classes.filter(allClass => allClass.status === 'Approved');
    return (
        <div>
            <div className='grid md:grid-cols-3 ml-28'>
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