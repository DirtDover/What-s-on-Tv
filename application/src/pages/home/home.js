import React from 'react';
import "../home/home.css"
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from '../../components/Banner';


const home = () => {
    return (
        <div className='home_container'>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default home;