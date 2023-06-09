import React from 'react';
import Container from '../../Shared/Container/Container';

const About = () => {
    return (
        <Container>
            <div className='md:flex'>
                <div>
                    <img className='h-60' src="https://i.ibb.co/Ln3mZjD/istockphoto-1127326292-612x612.jpg" alt="" />
                </div>
                <div className='ml-4 '>
                    <h1 className='font-bold text-4xl'>About Us</h1>
                    <p>Our AIM is to promote music through education & performance. <br /> We can help you get going! We offer in-person, <br /> private lessons in Aurora, CO, as well as virtual lessons <br /> via Zoom. In-Person & Virtual. 30, 45, & 60-min Lessons. <br /> Free Trial Music Lesson. Courses: Piano, Voice, Violin.</p>
                    <div className='flex'>
                        <img className='h-20' src="https://i.ibb.co/17sW3Vj/gettyimages.jpg" alt="" />

                        <img className='h-20 mx-2' src="https://i.ibb.co/4Y4ttcX/1209-whs-band-1-t1170.jpg" alt="" />

                        <img className='h-20' src="https://i.ibb.co/zrNc6KB/images-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;