import React, { useLayoutEffect } from 'react';
import debounce from 'lodash/debounce';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    
    useLayoutEffect(() => {
        const updateSize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', debounce(updateSize, 250));
        return () => window.removeEventListener('resize', updateSize);
    })

    return isMobile;
};

export default useIsMobile;