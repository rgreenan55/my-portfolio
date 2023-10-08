import React from 'react';
import PageAnimation from './PageAnimation';

import WorkCard from '../feature/work/WorkCard';
import Socials from '../components/Socials';
import jobs_data from '../config/job_data';

import ResumePDF from '../assets/Resume.pdf';
import Figure from '../assets/images/figure.png';

import { Box, Grid, Stack, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import TextWithIcon from '../components/TextWithIcon';

const Work = () => {

    return (
        <PageAnimation>
            <Grid container p={12} spacing={2}>
                <Grid item xs={5} position='fixed'>
                    <Stack spacing={12}>
                        <Box width='50%' minWidth='325px'>
                            <Typography variant='h3'> Robert Greenan </Typography>
                            <Typography variant='subtitle1'> Student at the University of New Brunswick </Typography>
                            <Typography variant='body1' mt={2}>
                                I'm a developer with a deep passion and desire to continuously expand my knowlede base
                                in both the field of Software Engineering as well as Life itself.
                            </Typography>
                        </Box>
                        <Box
                            component='img'
                            sx={{ width: '25%', minWidth: '125px' }}
                            alt=''
                            src={Figure}
                        />
                        <Box>
                            <TextWithIcon
                                text='View Full Resume'
                                textAnimate={{ animate: { scale: 1.075 }}}
                                icon={<EastIcon fontSize='small' />}
                                iconAnimate={{initial: { x: -5, opacity: 0 }, animate: { x: 10, opacity: 1 }}}
                                onClick={() => window.open(ResumePDF)}
                            />
                           <Socials />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={6} />    {/* In place of Fixed Grid for Spacing */}
                <Grid item xs={6}>
                    <Stack spacing={6}>
                        {jobs_data.map(job => (
                            <WorkCard key={job.title} {...job} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </PageAnimation>
    )
}

export default Work; 