import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/cardFilmCat.css'


const CardFilmCat = ({id, title, name, cover}) => {
 
        const baseUrl = 'https://image.tmdb.org/t/p/original'
        const imagePath = `${cover}`
        const imgUrl = `${baseUrl}/${imagePath}`
    
        return (
        <Link to={`/film/${id}`} className='cardFilmCat' key={id}>
            <img className='img_card2' src={imgUrl} alt={title} />
            <h2 className='title_card2'>{title}</h2>
        </Link>
    );
};

export default CardFilmCat;