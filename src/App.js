import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import MyRouter from './Router';
import './index.css';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#473364',
        },
        secondary: {
            main: '#000000',
        },
        error: {
            main: '#af1d0f',
        },
        background: {
            default: 'rgba(230,230,230,1)',
            paper: '#ffffff',
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <MyRouter />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;