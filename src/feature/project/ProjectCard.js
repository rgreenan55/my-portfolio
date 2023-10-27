import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Box, Button, Card, CardActionArea, CardContent, Collapse, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { TypeAnimation } from 'react-type-animation';

const ProjectCard = ({ title, description }) => {
    const [isActivated, setIsActivated] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (isSelected) {
            const timer = setTimeout(() => {
                setOpen(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setOpen(false);

            const timer = setTimeout(() => {
                setIsActivated(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isSelected])

    return (
        <Card
            component={motion.div}
            initial={{ width: '40%' }}
            animate={{ width: isSelected ? '75%' : '40%' }}
            transition={{ width: { duration: 0.5, delay: open ? '0.5' : '' } }}
            layout='position'
        >
            {/* Title of Project */}
            <CardActionArea onClick={() => {setIsSelected(!isSelected)}} disableRipple>
                <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant='h5'> {title} </Typography>
                        {isSelected ? <CloseFullscreenIcon /> : <OpenInFullIcon /> }
                    </Box>
                </CardContent>
            </CardActionArea>

            <Collapse in={open} timeout={750} unmountOnExit>
                <Divider variant='middle' sx={{ backgroundColor: 'black' }} />
                <CardContent>
                    <Grid container spacing={2} height='50vh'>
                        
                        {/* Tags, Links, Etc */}
                        <Grid item xs={3} height={1}>
                            <Box component={Paper} height={0.9} padding='16px' backgroundColor='#1f1f1f' style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', color: 'white' }}>
                                {title}
                                <Divider sx={{ backgroundColor: 'white', mb: '16px' }} />
                                Tags{'\n'}
                                {['a', 'b', 'c', 'd'].map(tag => ('____' + tag + '\n'))}
                                {'\n'}
                                Links{'\n'}
                                {['a', 'b', 'c', 'd'].map(tag => ('____' + tag + '\n'))}
                            </Box>
                        </Grid>

                        {/* Description + Demo? */}
                        <Grid item xs={9} height={0.9}>
                            <Box component={Paper} height={1} padding='16px' backgroundColor='#1f1f1f'>
                                {isActivated ? (
                                    <TypeAnimation
                                        style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', color: 'white' }}
                                        sequence={[
                                            `Line One\nLine Two\nLine Three\nLine Four\nLine Five`
                                        ]}
                                    />
                                ) : (
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Button variant='contained' onClick={() => setIsActivated(true)} size='large'>
                                            Activate
                                        </Button>
                                    </Box>
                                )
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}

export default ProjectCard;