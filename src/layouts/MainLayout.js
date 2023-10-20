import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import MouseTrail from './MouseTrail.js';

import useIsMobile from '../hooks/useIsMobile.js';

const MainLayout = () => {
    {/* FIXME: Mouse Trail resetting to True on page change */}
    const [mouseTrail, setMouseTrail] = React.useState(false);
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