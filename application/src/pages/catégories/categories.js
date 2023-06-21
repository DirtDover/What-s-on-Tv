import React from 'react';
import '../catégories/categories.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner'

const categories = () => {
    return (
        <div className='categories_container'>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default categories;