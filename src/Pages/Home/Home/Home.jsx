import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../../../Components/Slider/Slider';
import PopularTeacher from '../../PopularTeacher/PopularTeacher';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Music School</title>
            </Helmet>
            <Slider></Slider>
            <PopularTeacher></PopularTeacher>
        </div>
    );
};

export default Home;