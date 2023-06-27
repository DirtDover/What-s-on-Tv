import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/card.css'


const CardActeur = ({id, title, name, cover}) => {
 
        const baseUrl = 'https://image.tmdb.org/t/p/original'
        const imagePath = `${cover}`
        const imgUrl = `${baseUrl}/${imagePath}`
    
        return (
        <Link to={`/acteur/${id}`} className='card' key={id}>
            <img className='img_card' src={imgUrl} alt={title} />
            <h2 className='title_card'>{title}</h2>
        </Link>
    );
};

export default CardActeur;