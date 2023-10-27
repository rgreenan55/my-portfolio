import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import useIsMobile from '../hooks/useIsMobile.js';

const MainLayout = () => {
    const isMobile = useIsMobile();

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout;