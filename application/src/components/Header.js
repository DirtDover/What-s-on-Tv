import React from 'react';
import '../styles/header.css'

const Header = () => {
    return (
        <div className='header_container'>
            <div className='title_container'>
                <i class="ri-film-line"></i> 
                <h1 className='title'>What's on Tv</h1>
            </div>
            <div className='nav_menu_container' id='nav-menu'>
                <ul className='nav_menu_list'>
                    <li className='nav_menu_item'>
                        <a href='*' className='nav_link'>Acceuil</a>
                    </li>
                    <li className='nav_menu_item'>
                        <a href='*' className='nav_link'>Catégories</a>
                    </li>
                    <li className='nav_menu_item'>
                        <a href='*' className='nav_link'>A propos</a>
                    </li>
                    <li className='nav_menu_item'>
                        <a href='*' className='nav_link'>Contact</a>
                    </li>
                </ul>
                <div className='nav_toggle' id='nav-toggle'>
                    <i class="ri-menu-2-line"></i>
                </div>
                <div className='nav_close' id='nav-close'>
                    <i class="ri-close-line"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;