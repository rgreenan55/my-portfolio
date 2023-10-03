import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MyRouter from './Router';

const theme = createTheme({
    
})

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <MyRouter />
            </BrowserRouter>
        </ThemeProvider>
    );
}