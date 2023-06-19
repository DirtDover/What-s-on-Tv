import React from 'react';
import '../styles/header.css'
import Nav from './Nav';

const Header = () => {
    return (
        <div className='header_container'>
            <div className='title_container'>
                <i class="ri-film-line logo"></i>
                <h1 className='title'>What's on Tv</h1>
            </div>
        <Nav />
        </div>
    );
};

export default Header;