import React from 'react';
import AddByTeacher from '../../hooks/AddByTeacher/AddByTeacher';
import ClassesData from './ClassesData';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';



const Classes = () => {
    const [classes] = AddByTeacher();
    const allClasses = classes.filter(allClass => allClass.status === 'Approved');
    console.log(allClasses);
    return (
       <div>
          <SectionTitle heading='All Approved Classes'></SectionTitle>
           <div className='grid md:grid-cols-3 gap-2'>
            {
               allClasses.map(classes => <ClassesData 
               key={classes._id}
               allClass={classes}></ClassesData>) 
            }

            

           
        </div>
       </div>
    );
};

export default Classes;