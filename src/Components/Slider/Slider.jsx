import React, { useContext } from 'react';
import image1 from '../../images/soulmusic.jpg';
import image2 from '../../images/lifetune.jpg';
import image3 from '../../images/music-banner.jpg';
import { motion } from "framer-motion"




const Slider = () => {
   
    
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-96">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-black mt-10 mx-40 ml-96'>
                     <p>“Music is a language that doesn't speak in particular words. It speaks in emotions, and if it's in the bones, it’s in the bones.” - Keith Richards </p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-96">
                <img src={image2} className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-indigo-700 mt-20 mx-20'>
                     <p>"A painter paints pictures on canvas. But musicians paint their pictures on silence.” - Leopold Stokowski .</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-96">
                <img src={image3}
                className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white mt-72 mx-20'>
                     <p>“Music produces a kind of pleasure which human nature cannot do without.” - Confucius  </p>
                </div>
            </div>
           
        </div>
    );
};

export default Slider;