import React from 'react';
import { Box } from '@mui/material';
import '../logInForm.css';
import Forma from './Forma';

const HomeComponent = () => {
    return (
        <div className='page-container'>
            <Box
                sx={{
                    width: '40%',
                    height: '80%',
                    backgroundColor: '#d4d9f2',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Forma />
            </Box>
        </div >
    );
};

export default HomeComponent;