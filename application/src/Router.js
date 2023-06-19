import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Categories from './pages/catégories/categories';
import Apropos from './pages/a propos/apropos';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />}></Route> 
               <Route path='/categories' element={<Categories />}></Route>
               <Route path='/apropos' element={<Apropos />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;