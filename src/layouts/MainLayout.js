import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout;