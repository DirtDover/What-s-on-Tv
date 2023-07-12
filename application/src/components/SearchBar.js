import React from 'react';
import '../styles/searchbar.css'

const SearchBar = () => {
    return (
        <div className='searchbar_container'>
              <form action="/" method="get">
                <label htmlFor="header_search">
                    <span className="search_title">Recherchez votre film</span>
                </label>
                <input 
                type='text'
                id='search_field'
                placeholder='Recherchez'
                name='search'
                />
                <button className='search_btn' type='submit'></button>
                </form>          
        </div>
    );
};

export default SearchBar;