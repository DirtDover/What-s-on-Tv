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
        <div className='container-error'>
            <h1 className='error-404'>404</h1>
            <h2 className='title-error'>Oups ! La page que vous demandez n'existe pas</h2>
            <a href="/" className='lien-error'>Retourner sur la page d'acceuil</a>
        </div>
            <Footer />
        </div>
    );
};

export default erreur;