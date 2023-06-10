import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../../../Components/Slider/Slider';
import PopularTeacher from '../../PopularTeacher/PopularTeacher';
import About from '../../About/About';
import PopularClass from '../../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Music School</title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularTeacher></PopularTeacher>
            <About></About>
        </div>
    );
};

export default Home;