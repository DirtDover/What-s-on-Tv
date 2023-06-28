import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/cardinfos.css'


const CardInfos = ({id, title, cover, overview}) => {
 
        const baseUrl = 'https://image.tmdb.org/t/p/original'
        const imagePath = `${cover}`
        const imgUrl = `${baseUrl}/${imagePath}`
    
        return (
        <Link to={`/film/${id}`} className='cardinfos' key={id}>
            <img className='img_cardinfos' src={imgUrl} alt={title} />
            <h2 className='title_cardinfos'>{title}</h2>
            <p className='resume_cardinfos'>{overview}</p>
        </Link>
    );
};

export default CardInfos;