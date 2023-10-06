import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardActionArea, CardContent, Chip, Grid, Link, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const WorkCard = ({ title, dates, secondaryTitle, description, links, tags }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseOver = () => { setIsHovered(true) }
    const handleMouseOut = () => { setIsHovered(false)}

    return (
        <Box>
            <Card>
                <CardActionArea
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    disableRipple
                >
                    <CardContent>
                        <Grid container>
                            <Grid xs={4}>
                                {dates.map(date => (
                                    <Typography variant='body2' color='text.secondary'>
                                        {date}
                                    </Typography>
                                ))}
                            </Grid>
                            <Grid xs={8}>
                                <Typography color={isHovered ? 'primary' : 'text.secondary'}>
                                    {title}
                                </Typography>
                                <Typography variant='caption' color='text.secondary'>
                                    {secondaryTitle}
                                </Typography>
                                <Typography variant='body2' mb='8px'>
                                    {description}
                                </Typography>
                                {links && <Stack direction='row' spacing={0.5} useFlexGap flexWrap='wrap'>
                                    {links.map(link => (
                                        <Button key={link.link} size='small' target='_blank' href={link.link} startIcon={<OpenInNewIcon fontSize='small' />} sx={{ textTransform: 'none'}}>
                                            {link.title}
                                        </Button>
                                    ))}
                                </Stack>}
                                {tags && <Stack direction='row' spacing={0.5} useFlexGap flexWrap='wrap'>
                                    {tags.map(tag => (
                                        <Chip key={tag} label={tag} size='small' color='primary' variant='outlined' />
                                    ))}
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
    dates: PropTypes.arrayOf(PropTypes.string).isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default WorkCard;