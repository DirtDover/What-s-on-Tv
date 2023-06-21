import React from 'react';
import '../contact/contact.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const contact = () => {
    return (
        <div className='contact_container'>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default contact;