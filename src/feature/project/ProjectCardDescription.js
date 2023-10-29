import React from 'react';
import PropTypes from 'prop-types';

import { TypeAnimation } from 'react-type-animation';
import { Box, Button, IconButton, Paper } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { motion } from 'framer-motion';

import Image from '../../assets/images/figure.png';

const ProjectCardDescription = ({ description }) => {
    const [isActivated, setIsActivated] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Box component={Paper} height={1} padding='16px' backgroundColor='#1f1f1f'>
            {isActivated ?(
                <Box position='relative' display='flex' height='100%' width='100%'>
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', color: 'white' }}
                        sequence={description}
                        speed={75}
                    />
                    <Box 
                        component={motion.div}
                        initial={{ y: -50, opacity: 0, width: '40%', height: '50%' }}
                        animate={{ 
                            y: 0, opacity: 1, 
                            width: isOpen ? '100%' : '40%',
                            height: isOpen ? '100%' : '50%',
                        }}
                        transition={{ duration: 0.7 }}
                        layout='position'
                        position='absolute' bottom='0px' right='0px'
                    >
                        <Box component={Paper} height={1}>
                            {isOpen ? (
                                <IconButton onClick={() => setIsOpen(false)}> <ArrowBackIcon /> </IconButton>
                            ) : (
                                <Box component="img" src={Image} height={1} width={1} />
                            )}
                        </Box>
                    </Box>
                </Box>
            ):(
                <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                    <Button variant='contained' onClick={() => setIsActivated(true)} size='large'>
                        Activate
                    </Button>
                </Box>
            )}
        </Box>
    )
}

ProjectCardDescription.propTypes = {
    description: PropTypes.array.isRequired,
};

export default ProjectCardDescription;
