import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/cardCategorie.css'


const CardCategorie = ({id, title, name, cover}) => {
 
        const baseUrl = 'https://image.tmdb.org/t/p/original'
        const imagePath = `${cover}`
        const imgUrl = `${baseUrl}/${imagePath}`
    
        return (
        <Link to={`/categories/${id}`} className='card_categorie' key={id}>
            <h2 className='title_card_categorie'>{title}</h2>
        </Link>
    );
};

export default CardCategorie;