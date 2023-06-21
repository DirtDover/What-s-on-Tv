import React from 'react';
import '../erreur/erreur.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const erreur = () => {
    return (
        <div className='erreur_container'>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default erreur;