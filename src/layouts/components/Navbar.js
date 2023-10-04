import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    const pages = ['home', 'about', 'work', 'projects', 'interests', 'contact']
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Robert Greenan
                    </Typography>
                    <Box>
                        {pages.map(page => (
                            <Button key={page} sx={{ color: 'white' }} onClick={() => navigate(page)}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>

            </AppBar>
            <Toolbar /> {/* Prevents conent going under Toolbar*/}
        </Box>
    )
}

export default Navbar;