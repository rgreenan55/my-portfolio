import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import WorkLinkButton from './WorkLinkButton.js';

import { Card, CardActionArea, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

// Inspired by https://brittanychiang.com/#experience
const WorkCard = ({ title, link, dates, subtitle, description, links, tags }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
                <CardActionArea
                    onMouseOver={() => { setIsHovered(true) }}
                    onMouseOut={() => { setIsHovered(false)}}
                    onClick={() => window.open(link, '_blank')}
                    disableRipple
                >
                    <CardContent>
                        <Grid container>
                            <Grid item xs={4}>
                                {dates.map(date => (
                                    <Typography key={date} variant='body2' color='text.secondary'>
                                        {date}
                                    </Typography>
                                ))}
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color={isHovered ? 'primary' : 'text.secondary'} sx={{ textDecoration: isHovered ? 'underline' : '',}}>
                                    {title} <CallMadeIcon fontSize='2' color={isHovered ? '' : 'grey'} />
                                </Typography>

                                <Typography variant='caption' color='text.secondary'>
                                    {subtitle}
                                </Typography>

                                {description.split('<br/>').map((paragraph,i) => (
                                    <Typography key={i} variant='body2' mb={2.5}> {paragraph} </Typography>
                                ))}

                                {links && <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
                                    {links.map(link => <WorkLinkButton key={link} {...link} />)}
                                </Stack>}

                                {tags && <Stack direction='row' spacing={0.5} useFlexGap flexWrap='wrap' mt={1}>
                                    {tags.map(tag => <Chip key={tag} label={tag} size='small' color='primary' variant='outlined' />)}
                                </Stack>}
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </motion.div>
    )
}

WorkCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string, // Required?
    dates: PropTypes.arrayOf(PropTypes.string).isRequired,
    role: PropTypes.string,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default WorkCard;