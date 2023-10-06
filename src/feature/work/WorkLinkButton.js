import React from 'react';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const WorkLinkButton = ({ title, link }) => {
    return (
        <Button
            key={title} 
            size='small'
            onClick={event => {
                // Prevent Card Action when Clicking
                event.stopPropagation();
                event.preventDefault();
                window.open(link, '_blank');
            }}
            startIcon={<OpenInNewIcon fontSize='small' />}
            sx={{ textTransform: 'none' }}
        >
            {title}
        </Button>
    )
}

export default WorkLinkButton;