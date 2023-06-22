import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cardcategories.css'


const Cardcategories = ({id, title, name, cover}) => {
 
    
        return (
        <div className='card_categories' key={id}>
            <h2 className='title_card_categories'>{title}</h2>
        </div>
    );
};

export default Cardcategories;