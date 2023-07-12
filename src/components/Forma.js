import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import '../logInForm.css'

const Forma = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(username);
        console.log(password);
        setUsername('');
        setPassword('');
    }

    return (
        <div className='forma-container'>
            <div className='input-container'>
                <TextField id='usernameInput' variant='outlined' size='small' required label='Username' onChange={e => setUsername(e.target.value)} />
            </div>

            <div className='input-container'>
                <TextField id='passwordInput' variant='outlined' size='small' required label='Password' onChange={e => setPassword(e.target.value)} />
            </div>

            <div className='btn'>
                <Button id='buttonLogIn' variant='outlined' onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
};

export default Forma;