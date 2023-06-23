import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Categories from './pages/catégories/categories';
import Apropos from './pages/a propos/apropos';
import Contact from './pages/contact/contact';
import Erreur from './pages/erreur/erreur';
import Film from './pages/film/film';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />}></Route> 
               <Route path='/categories' element={<Categories />}></Route>
               <Route path='/apropos' element={<Apropos />}></Route>
               <Route path='/contact' element={<Contact />}></Route>
               <Route path='*' element={<Erreur />}></Route>
               <Route path='/:id' element={<Film />}></Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;