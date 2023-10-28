import React from 'react';
import PropTypes from 'prop-types';

import { TypeAnimation } from 'react-type-animation';
import { Box, Button, Paper } from '@mui/material';

const ProjectCardDescription = ({ description }) => {
    const [isActivated, setIsActivated] = React.useState(false);

    return (
        <Box component={Paper} height={1} padding='16px' backgroundColor='#1f1f1f'>
            {isActivated ?(
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', color: 'white' }}
                    sequence={description}
                    speed={75}
                />
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