import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    const pages = ['home', 'about', 'work', 'projects', /*'contact'*/]
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Box display='flex' alignItems='center' sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">
                            Robert Greenan
                        </Typography>
                    </Box>
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