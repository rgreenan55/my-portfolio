import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Figure from '../../assets/images/figure.png'

const ProjectCard = ({ title, description }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div whileHover={{ scale: 1.025 }}>
            <Card>
                <CardActionArea
                    onMouseOver={() => { setIsHovered(true) }}
                    onMouseOut={() => { setIsHovered(false)}}
                    onClick={() => window.open(null, '_blank')}
                    disableRipple
                >
                    <CardContent>
                        <Grid container>
                            <Grid xs={9}>
                                <Typography> {title} </Typography>
                                <Typography> {description} </Typography>
                            </Grid>
                            <Grid xs={3}>
                                <Box
                                    component='img'
                                    sx={{ width: '50%' }}
                                    alt=''
                                    src={Figure}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </motion.div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}

export default ProjectCard;