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
			"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi ullam aut ea quo molestiae possimus, praesentium dignissimos earum perspiciatis autem, optio excepturi cupiditate at"
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi ullam aut ea quo molestiae possimus, praesentium dignissimos earum perspiciatis autem, optio excepturi cupiditate at"
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi ullam aut ea quo molestiae possimus, praesentium dignissimos earum perspiciatis autem, optio excepturi cupiditate at"
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi ullam aut ea quo molestiae possimus, praesentium dignissimos earum perspiciatis autem, optio excepturi cupiditate at"
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