import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import MouseTrail from './MouseTrail.js';

import useIsMobile from '../hooks/useIsMobile.js';

const MainLayout = () => {
    const [mouseTrail, setMouseTrail] = React.useState(true);
    const isMobile = useIsMobile();

    return (
        <>
            {!isMobile && mouseTrail && <MouseTrail />}
            <Navbar setMouseTrail={setMouseTrail} />
            <Outlet />
        </>
    )
}

export default MainLayout;