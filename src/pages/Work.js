import React from 'react';
import WorkCard from '../feature/work/WorkCard';
import jobs_data from '../config/job_data';

const Work = () => {
    return (
        <>
            {jobs_data.map(job => (
                <WorkCard key={job.title} {...job} />
            ))}
        </>
    )
}

export default Work; 