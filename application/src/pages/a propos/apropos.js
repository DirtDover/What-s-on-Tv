import React from 'react';
import '../a propos/apropos.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Collapse from '../../components/Collapse';

const apropos = () => {

    const aproposDatas = [
		{
			"id": "1",
			"title": "Fiabilité",
			"content": "lorem25"
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

    return (
        <div className='apropos_container'>
            <Header />
            <Banner />
            <main className='main_about'>
                {aproposDatas.map((data) =>
                <div key={data.id} className='collapse_about'>
                    <Collapse title={data.title} content={data.content} id={data.id} />
                </div>)}
            </main>
            <Footer />
        </div>
    );
};

export default apropos;