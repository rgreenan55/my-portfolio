import React from 'react';
import WorkCard from '../feature/work/WorkCard';
import jobs_data from '../config/job_data';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

const Work = () => {
    return (
        <Grid container mt={16}>
            <Grid item xs={6} position='fixed'>
                <Box m={8}>
                    <Typography variant='h3'> Robert Greenan </Typography>
                    <Typography variant='subtitle1'> Student at the University of New Brunswick </Typography>
                    <Typography variant='body1' mt={2}> Words about working and stuff </Typography>
                </Box>
            </Grid>
            <Grid item xs={6} />    {/* In place of Fixed Grid for Spacing */}
            <Grid item xs={6}>
                <Stack spacing={2}>
                    {jobs_data.map(job => (
                        <WorkCard key={job.title} {...job} />
                    ))}
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Work; 