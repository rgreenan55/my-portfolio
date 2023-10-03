import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    const navItems = ['Home', 'About', 'Contact'];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Robert Greenan
                    </Typography>
                    <Box>
                        {navItems.map(item => (
                            <Button key={item} sx={{ color: 'white' }}>
                                {item}
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