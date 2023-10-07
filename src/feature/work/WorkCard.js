import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardActionArea, CardContent, Chip, Grid, Link, Stack, Typography } from '@mui/material';
import WorkLinkButton from './WorkLinkButton.js';

const WorkCard = ({ title, link, dates, subtitle, description, links, tags }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseOver = () => { setIsHovered(true) }
    const handleMouseOut = () => { setIsHovered(false)}

    return (
        <Box>
            <Card>
                <CardActionArea
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
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
                                    {title}
                                </Typography>

                                <Typography variant='caption' color='text.secondary'>
                                    {subtitle}
                                </Typography>

                                {description.split('<br/>').map(paragraph => (
                                    <Typography variant='body2' mb={2.5}> {paragraph} </Typography>
                                ))}

                                {links && <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
                                    {links.map(link => <WorkLinkButton {...link} />)}
                                </Stack>}

                                {tags && <Stack direction='row' spacing={0.5} useFlexGap flexWrap='wrap' mt={1}>
                                    {tags.map(tag => <Chip key={tag} label={tag} size='small' color='primary' variant='outlined' />)}
                                </Stack>}
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
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