import React from 'react';
import '../styles/cardacteur.css'

const Cardacteur = ({id, title, cover}) => {
    return (
        <div className='card_acteur' key={id}>
            <img className='img_card_acteur' src={cover} alt={title}/>
            <h2 className='title_card_acteur'>{title}</h2>
        </div>
    );
};

export default Cardacteur;