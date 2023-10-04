import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import { Home, About, Work, Projects, Interests, Contact } from './pages';

// On new pages - add to Navbar list
const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index path='/Home' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Work' element={<Work />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Interests' element={<Interests />} />
                <Route path='/Contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default MyRouter;