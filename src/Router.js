import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import { Home, About, Work, Projects, Interests, Contact } from './pages';

// On new pages - add to Navbar list
const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/interests' element={<Interests />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default MyRouter;