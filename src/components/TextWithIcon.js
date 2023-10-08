import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Stack, Typography } from '@mui/material';

const TextWithIcon = ({ text, textAnimate, icon, iconAnimate, onClick, noUnderline }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <motion.div initial='initial' animate='initial' whileHover='animate'>
            <Stack
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                onClick={onClick}   
                direction='row'
                alignItems='center'
                mb={2}
                gap={1}
            >
                <motion.div variants={textAnimate}>
                    <Typography sx={noUnderline ? null: { textDecoration: hovered ? 'underline' : '',}}>
                        {text}
                    </Typography>
                </motion.div>
                
                <motion.div variants={iconAnimate}>
                    {icon}
                </motion.div>
            </Stack>
        </motion.div>

    )
}

TextWithIcon.defaultProps = {
    noUnderline: false,
}

TextWithIcon.propTypes = {
    text: PropTypes.string.isRequired,
    textAnimate: PropTypes.object,
    icon: PropTypes.object.isRequired,  // MUI Icons are Objects
    iconAnimate: PropTypes.object,
    onClick: PropTypes.func,
    noUnderline: PropTypes.bool,
}


export default TextWithIcon;