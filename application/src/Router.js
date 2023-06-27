import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Categories from './pages/catégories/categories';
import Apropos from './pages/a propos/apropos';
import Contact from './pages/contact/contact';
import Erreur from './pages/erreur/erreur';
import Film from './pages/film/film';
import Acteur from './pages/acteurs/acteur'



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />}></Route> 
               <Route path='/categories' element={<Categories />}></Route>
               <Route path='/apropos' element={<Apropos />}></Route>
               <Route path='/contact' element={<Contact />}></Route>
               <Route path='*' element={<Erreur />}></Route>
               <Route path='/film/:id' element={<Film />}></Route>
               <Route path='/acteur/:id' element={<Acteur />}></Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;