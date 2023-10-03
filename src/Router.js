import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import Home from './pages/Home.js';

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />}/>
                <Route path='/a' element={<> Hiii </>}/>
            </Route>
        </Routes>
    )
}

export default MyRouter;