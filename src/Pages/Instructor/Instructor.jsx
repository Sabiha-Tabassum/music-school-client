import React from 'react';
import AllUser from '../../hooks/AllUser/AllUser';
import InstructorData from './InstructorData';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Instructor = () => {
    const[user] = AllUser();
    console.log(user);

    const role = user.filter(instructor => instructor.role === 'Instructor' );
    console.log(role);

    return (
        <div>
            <SectionTitle heading='Instructors'></SectionTitle>
            <InstructorData instructor={role}></InstructorData>
        </div>
    );
};

export default Instructor;