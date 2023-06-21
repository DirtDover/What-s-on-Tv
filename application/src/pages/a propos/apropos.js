import React from 'react';
import '../a propos/apropos.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const apropos = () => {
    return (
        <div className='apropos_container'>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default apropos;