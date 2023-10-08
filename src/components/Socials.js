import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Divider, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Socials = ({ size }) => {
    const Icons = [
        { icon: <GitHubIcon /> , link: 'https://github.com/rgreenan55'},
        { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/robert-greenan/'},
    ]

    return (
        <Stack direction='row' gap={1} divider={<Divider orientation='vertical' flexItem />}>
            {Icons.map((icon,i) => (
                <motion.div key={i} whileHover={{ scale: 1.2 }}>
                    <IconButton
                        onClick={() => window.open(icon.link, '_blank')}
                        size={size}
                        color='secondary'
                    >
                        {icon.icon}
                    </IconButton>
                </motion.div>
            ))}
        </Stack>
    )
}

Socials.defaultProps ={
    size: 'medium',
}

Socials.propTypes = {
    size: PropTypes.string,
}

export default Socials;