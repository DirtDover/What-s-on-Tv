import React from 'react';
import '../styles/nav.css';
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = () => {
    return (
        <nav className='nav_menu_container' id='nav-menu'>
                <ul className='nav_menu_list'>
                    <NavLink to ="/" className={(nav) =>(nav.isActive ? "nav-active" : "nav_menu_item")}>
                        <li className='nav_menu_item'>Acceuil</li>
                    </NavLink>
                    <NavLink to ="/categories" className={(nav) =>(nav.isActive ? "nav-active" : "nav_menu_item")}>
                        <li className='nav_menu_item'>Catégories</li>
                    </NavLink>
                    <NavLink to ="/apropos" className={(nav) =>(nav.isActive ? "nav-active" : "nav_menu_item")}>
                        <li className='nav_menu_item'>A Propos</li>
                    </NavLink>
                    <NavLink to ="/contact" className={(nav) =>(nav.isActive ? "nav-active" : "nav_menu_item")}>
                        <li className='nav_menu_item'>Contact</li>
                    </NavLink>
                    <NavLink to ="/login" className={(nav) =>(nav.isActive ? "nav-active" : "nav_menu_item")}>
                        <li className='nav_menu_item'>Se conecter</li>
                    </NavLink>
                    <NavLink to ="/login" className={(nav) =>(nav.isActive ? "nav-active" : "nav_menu_item")}>
                        <li className='nav_menu_item'>S'inscrire</li>
                    </NavLink>
                </ul>
                <SearchBar />
                
            </nav>
    );
};

export default Nav;