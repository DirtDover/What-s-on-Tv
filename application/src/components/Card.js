import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/card.css'


const Card = ({id, title, name,}) => {
 
    
        return (
        <Link to={`/${id}`} className='card' key={id}>
            <h2 className='title_card'>{title}</h2>
        </Link>
    );
};

export default Card;