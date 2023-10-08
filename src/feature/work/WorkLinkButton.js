import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const WorkLinkButton = ({ title, link }) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }}>
            <Button
                key={title} 
                size='small'
                onClick={event => {
                    // Prevent Card Action when Clicking
                    event.stopPropagation();
                    event.preventDefault();
                    window.open(link, '_blank');
                }}
                startIcon={<OpenInNewIcon fontSize='small' />}
                sx={{ textTransform: 'none' }}
            >
                {title}
            </Button>
        </motion.div>
    )
}

WorkLinkButton.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default WorkLinkButton;