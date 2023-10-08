import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import { Home, About, Work, Projects, Contact } from './pages';
import { AnimatePresence } from 'framer-motion';

// On new pages - add to Navbar list
const MyRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default MyRouter;