import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageAnimation from './PageAnimation.js';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import MouseTrail from '../layouts/MouseTrail.js';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <MouseTrail />
            <PageAnimation>
                <Grid container justifyContent='center' alignItems='center' pt='15%'>
                    <Stack spacing={4}>
                        <Typography variant='h2' align='center'> Welcome </Typography>
                        <Typography variant='h4' align='center'> My name is Robert</Typography>
                        
                        <motion.div animate={{ rotate: [0, 5, -5, 0] }}  transition={{ repeat: Infinity, repeatDelay: 1 }}>
                            <motion.div whileHover={{ scale: 1.25 }}>
                            <Box display='flex' justifyContent='center'>
                                <Button variant='contained' size='large' endIcon={<EastIcon />} onClick={() => navigate('/about')}>
                                    About Me
                                </Button>
                            </Box>
                            </motion.div>
                        </motion.div>
                    </Stack>
                </Grid>
            </PageAnimation>
        </>
    )
}

export default Home;