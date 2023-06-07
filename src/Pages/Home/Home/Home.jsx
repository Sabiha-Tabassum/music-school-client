import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Music School</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;