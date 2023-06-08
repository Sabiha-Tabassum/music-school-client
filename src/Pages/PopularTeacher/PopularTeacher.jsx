import React from 'react';
import AllUser from '../../hooks/AllUser/AllUser';
import PopularTeacherImg from './PopularTeacherImg';
import Container from '../../Shared/Container/Container';

const PopularTeacher = () => {
    const [user] = AllUser();


    const role = user.filter(instructor => instructor.role === 'Instructor');
    console.log(role);

    return (
        <Container>
            <div className='grid grid-cols-3'>
                {role.slice(0,6).map(img => <PopularTeacherImg
                    key={img._id}
                    img={img}></PopularTeacherImg>)}
            </div>
        </Container>
    );
};

export default PopularTeacher;