import React from 'react';
import PropTypes from 'prop-types';
import { LayoutGroup, motion, stagger } from 'framer-motion';

import { Box, Card, CardActionArea, CardContent, Collapse, Divider, Grid, Hidden, IconButton, Item, Paper, Typography } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

// TODO: Make my own Carousel Component - Then remove this.
import Carousel from 'react-material-ui-carousel';
import Figure from '../../assets/images/figure.png'

const ProjectCard = ({ title, description }) => {
    const [isSelected, setIsSelected] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (isSelected) {
            const timer = setTimeout(() => {
                setOpen(true);
            }, 500)
            return () => clearTimeout(timer);
        } else {
            setOpen(false);
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
            <CardActionArea
                onClick={() => {setIsSelected(!isSelected)}}
                disableRipple
            >
                <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography fontSize='32px'> {title} </Typography>
                        {isSelected ? <CloseFullscreenIcon /> : <OpenInFullIcon /> }
                    </Box>
                </CardContent>
                <Collapse in={open} timeout={750}>
                    <Divider variant='middle' sx={{ backgroundColor: 'black' }} />
                    <CardContent>
                        <Typography> {description} </Typography>
                        <ImageItem />
                    </CardContent>
                </Collapse>
            </CardActionArea>
        </Card>
    )
}

const ImageItem = ({ name, image }) => {
    return (
        <Paper align='center'>
            <Box component='img' alt='' src={Figure} />
        </Paper>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}

export default ProjectCard;