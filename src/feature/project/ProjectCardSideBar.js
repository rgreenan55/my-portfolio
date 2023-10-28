import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Box, Divider, Paper } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// FIXME: Animate Colors Warning
const ProjectCardSideBar = ({ title, links, tags }) => {
    return (
        <Box
            component={Paper}
            height={0.9}
            padding='16px'
            backgroundColor='#1f1f1f'
            style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', color: 'white' }}
        >
            
            {title}
            <Divider sx={{ backgroundColor: 'white' }} />


            {'\n'}  Links  {'\n'}
            {links.map(link => (
                <motion.div key={link.title} whileHover={{ x: 10, scale: 1.1, color: 'blueviolet' }} onClick={() => window.open(link.link, '_blank')} style={{ marginBottom: '2px' }}>
                    {'____ ' + link.title}
                    <OpenInNewIcon fontSize='1' />
                    {'\n'}
                </motion.div>
            ))}


            {'\n'}  Tags  {'\n'}
            {tags.map(tag => (
                <motion.div key={tag} whileHover={{ x: 10, scale: 1.1, color: 'grey' }} style={{ marginBottom: '2px' }}>
                    {'____ ' + tag + '\n'}
                </motion.div>
            ))}                                
        </Box>
    )
}

ProjectCardSideBar.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.array,
    tags: PropTypes.array,
}

export default ProjectCardSideBar;
