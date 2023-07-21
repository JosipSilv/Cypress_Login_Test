import React from 'react';
import { Box } from '@mui/material';
import '../logInForm.css';

const SecondaryComponent = () => {
    return (
        <div className='page-container'>
            <Box
                sx={{
                    width: '80%',
                    height: '30',
                    backgroundColor: '#d4d9f2',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p>uwu</p>
            </Box>
        </div>
    );
};

export default SecondaryComponent;