import React from 'react';
import AllUser from '../../hooks/AllUser/AllUser';
import PopularTeacherImg from './PopularTeacherImg';
import Container from '../../Shared/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const PopularTeacher = () => {
    const [user] = AllUser();


    const role = user.filter(instructor => instructor.role === 'Instructor');
    console.log(role);

    return (
        <Container>
            <SectionTitle heading='Popular Instructors'></SectionTitle>
            <div className='grid md:grid-cols-3 gap-1'>
                {role.slice(0,6).map(img => <PopularTeacherImg
                    key={img._id}
                    img={img}></PopularTeacherImg>)}
            </div>
        </Container>
    );
};

export default PopularTeacher;