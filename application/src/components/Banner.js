import React from 'react';
import image from '../assets/banner.jpg';
import '../styles/banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={image} alt='illustration de cinéma' className='img_banner' />
            <h1 className="title_banner">L'application qui vous aide a choisir quel film vous allez regarder ce soir !</h1>
            
        </div>
    );
};

export default Banner;