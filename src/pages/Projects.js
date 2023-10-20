import React from 'react';
import PageAnimation from './PageAnimation.js';
import { Box, Grid, Stack } from '@mui/material';
import ProjectCard from '../feature/project/ProjectCard.js';
import project_data from '../config/project_data.js';

const Projects = () => {

    return (
        <PageAnimation> 
            <Grid container p={4}>
                <Stack spacing={5} width='100%'>
                    {project_data.map((project, i) => (
                        <Box key={project.title} width='100%' sx={i%2 == 1 && { display: 'flex', justifyContent: 'flex-end'}}>
                            <Box width='75%' justifySelf='flex-end'>
                                <ProjectCard {...project} />
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Grid>
        </PageAnimation>
    )
}

export default Projects;