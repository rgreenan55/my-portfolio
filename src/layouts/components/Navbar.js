import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import NearMeDisabledIcon from '@mui/icons-material/NearMeDisabled';

const Navbar = ({ setMouseTrail }) => {
    const pages = ['home', 'about', 'work', 'projects', 'contact']
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Box display='flex' alignItems='center' sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">
                            Robert Greenan
                        </Typography>
                        <Switch
                            defaultChecked
                            label='Mouse Trail'
                            onChange={e => setMouseTrail(e.target.checked)}
                            icon={<NearMeDisabledIcon sx={{ borderRadius: '5px', backgroundColor: 'black' }} />}
                            checkedIcon={<NearMeIcon sx={{ borderRadius: '5px', backgroundColor: 'black' }} />}
                            color='default'
                        />
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