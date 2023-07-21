import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import '../logInForm.css'
import { useNavigate } from 'react-router-dom';


const Forma = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (username && password) {
            setUsername('');
            setPassword('');
        }
        navigate('/secondary');
    }

    return (
        <div className='forma-container'>
            <div className='input-container'>
                <TextField id='usernameInput' value={username} variant='outlined' size='small' required label='Username' onChange={e => setUsername(e.target.value)} />
            </div>

            <div className='input-container'>
                <TextField id='passwordInput' value={password} variant='outlined' size='small' required type='password' label='Password' onChange={e => setPassword(e.target.value)} />
            </div>

            <div className='btn'>
                <Button id='buttonLogIn' variant='outlined' onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
};

export default Forma;