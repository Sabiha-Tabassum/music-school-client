import React from 'react';
import image1 from '../../images/soulmusic.jpg';
import image2 from '../../images/images2.jpg';
import image3 from '../../images/images3.jpg';


const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white'>
                     <p>The courses aim for students' better understanding of music theory, helping them to better connect and understand the musical works in their practical life & With world-class facilities and the most updated international music/performing arts curricula available</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white'>
                     <p>Our beat-making and hip-hop program gives you the skills you need to pursue a career in Hip Hop.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3}
                className="w-full h-60" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute'>
                     <p>The best online platform for Folk Music! Learn from some of the very best traditional musicians with high-quality. </p>
                </div>
            </div>
           
        </div>
    );
};

export default Slider;