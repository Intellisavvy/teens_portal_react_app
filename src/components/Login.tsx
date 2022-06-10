
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import pic from './images/sign.png';
import './css.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Png from './images/login.png';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
// import './App.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { configure } from '@testing-library/react';
import { color } from '@mui/system';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function Signin() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        md={5}
                        sx={{ marginTop: '5rem' }}
                        display={{ xs: "none", lg: "block" }}
                    >
                        <img src={Png} className="image" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box
                            component="form"
                            sx={{ width: '35rem', boxShadow: '0 0 15px #2270b44d', ml: '5rem' }}
                        >
                            <Box sx={{ ml: '5rem', mb: '5rem', mt: 10 }}>
                                <ButtonGroup sx={{ justifyContent: 'center', m: 2 }} >
                                    <Button sx={{ border: 'none', width: '10rem' }} variant="contained" > <Link to="/login" className='link' style={{ color: 'white' }}>SignIN</Link></Button>
                                    <Button sx={{ width: '10rem', backgroundColor: '#F5F5F5', border: 'none' }}><Link to='/createacc' className='link'>Register</Link></Button>
                                </ButtonGroup>

                                <div>
                                    <TextField
                                        required
                                        type={'email'}
                                        label="Email ID"
                                        id="Email-ID"
                                        name='EmailID'
                                        // value={EmailID}
                                        sx={{ width: '25rem', mt: 1.5 }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        type={'password'}
                                        label="Password"
                                        id="Password"
                                        name='Password'
                                        // value={Password}
                                        sx={{ width: '25rem', mt: 1.5 }}
                                    />
                                </div>                               

                                <div className='up'>
                                    <Button variant="contained" type='submit' sx={{ width: '25rem' }}>Sign-In</Button>
                                </div>
                                <div className='alignRight'>
                                    <Link to='#' className='forgot'>Forgot password ?</Link>
                                </div>
                                <div className='err'>
                                    <p>Not registered?  <Link to="/createacc" > Create Account</Link> </p>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default Signin;
