import React, { useEffect } from 'react';
import Container from '../../Shared/Container/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <Container>
            <div className='md:flex mb-4 mt-24 ml-24'>
                <div>
                    <img className='h-60' data-aos="fade-right" src="https://i.ibb.co/Ln3mZjD/istockphoto-1127326292-612x612.jpg" alt="" />
                </div>
                <div className='md:ml-2 '>
                    <h1 className='font-bold text-4xl text-indigo-500' data-aos="zoom-in">About Us</h1>
                    <p data-aos="zoom-in">Our AIM is to promote music through education. <br /> We can help you get going! We offer in-person, <br /> private lessons in Aurora, CO, as well as virtual lessons <br /> via Zoom. In-Person & Virtual. 30, 45, & 60-min Lessons. <br /> Free Trial Music Lesson. Courses: Piano, Voice, Violin.</p>
                    <div  className='flex ' data-aos="fade-left">
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