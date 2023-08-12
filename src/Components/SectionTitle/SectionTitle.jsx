import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SectionTitle = ({heading}) => {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    return (
        <div className='text-center my-16 font-semibold text-4xl text-indigo-500 ' data-aos="zoom-in">
            {heading}
        </div>
    );
};

export default SectionTitle;