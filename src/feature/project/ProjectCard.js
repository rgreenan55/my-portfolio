import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Box, Card, CardActionArea, CardContent, Collapse, Divider, Grid, Typography } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import ProjectCardSideBar from './ProjectCardSideBar';
import ProjectCardDescription from './ProjectCardDescription';

const ProjectCard = ({ title, description, links, tags }) => {
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
                            <ProjectCardSideBar title={title} links={links} tags={tags} />
                        </Grid>

                        {/* Description + Demo? */}
                        <Grid item xs={9} height={0.9}>
                            <ProjectCardDescription description={description} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    links: PropTypes.array,
    tags: PropTypes.array,
}

export default ProjectCard;