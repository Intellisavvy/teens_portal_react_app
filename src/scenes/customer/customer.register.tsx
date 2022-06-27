import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import './App.css';
import { StandaloneSearchBox } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ReactInputMask from 'react-input-mask';
import { validateEmail, validateName, validatePassword } from '../../lib/utilities';

const key = "AIzaSyCFtEPoeZg_ktUzAubSjwtHLCQCQA2LAdo";
export const CustomerRegistration = () => {
    const [, setSearchBox] = useState('');
    const onSBLoad = (ref: any) => {
        setSearchBox(ref)
    };
    const onPlacesChanged = () => {
    };
    const [display, setdisplay] = useState({
        user: '',
        number: '',
        email: '',
        create: '',
        conf: '',
        ssn: '',
        address: '',
        code: ''
    })
    const { user, number, email, create, conf, ssn, address, code } = display;
    const validation = (e: any) => {
        debugger
        setdisplay({ ...display, [e.target.name]: e.target.value });
    }
    const details = (e: any) => {
        e.preventDefault();
        setdisplay({
            user: '',
            number: '',
            email: '',
            create: '',
            conf: '',
            ssn: '',
            address: '',
            code: ''
        })
        alert('successfully submitted')
    }
    return <div>
        <Box className='well'>
            <form className="fieldsize" onSubmit={details}>
                <div className="direction">
                    <ButtonGroup >
                        <Button sx={{ border: 'none', backgroundColor: '#F5F5F5', width: '10rem', color: 'black' }} > SignIN</Button>
                        <Button sx={{ width: '10rem', color: 'white' }} variant="contained" > Register</Button>
                    </ButtonGroup>
                </div>
                <div className="down">
                    <TextField type={'text'} className="fieldsize" placeholder='Enter  Name' name="user" value={user} onChange={validation} required />
                    {!validateName(user) && user.length != 0 ? <p style={{ color: 'red' }}>Enter characters only</p> : null}
                    {(user.length < 2) && user.length != 0 ? <p style={{ color: 'red' }}>Enter characters min 2</p> : null}
                </div>
                <div >
                    <ReactInputMask
                        mask='(999) 999-9999'
                        type='text'
                        autoComplete='none'
                        placeholder="Enter Number"
                        name='number'
                        value={number}
                        style={{ marginTop: '1rem', width: '23.5rem', height: '3rem', paddingLeft: '1rem', borderColor: 'transparents' }}
                        className="effect"
                        onChange={validation}
                        {...(props: JSX.IntrinsicAttributes & TextFieldProps) => <TextField label='cc number' {...props} />} />
                </div>
                <div className="down">
                    <TextField type={'email'} className="fieldsize" placeholder='Enter Email' name="email" value={email} onChange={validation} required />
                    {!validateEmail(email) && email.length != 0 ? <p style={{ color: 'red' }}>Please enter valid Email</p> : null}
                </div>
                <div className="down">
                    <TextField type={'password'} className="fieldsize" placeholder="Create Passsword" name="create" value={create} onChange={validation} required />
                    {(!validatePassword(create)) && create.length != 0 ? <p style={{ color: 'red' }}>password requires min 7 charatcers and one special character,one upper case, one lower case,one number</p> : null}
                </div>
                <div className="down">
                    <TextField type={'password'} className="fieldsize" placeholder="Confirm Passsword" name="conf" value={conf} onChange={validation} required />
                    {create != conf ? <p style={{ color: 'red' }}>Password is not matched</p> : null}
                </div>
                <div className="down">
                    <ReactInputMask
                        mask='999 99 9999'
                        type={'text'}
                        placeholder="Enter SSN Number"
                        autoComplete='none'
                        name='ssn'
                        value={ssn}
                        style={{ width: '24.5rem', height: '3rem', borderColor: 'transparents' }}
                        onChange={validation} /
                    >
                </div>
                <div className="down">
                    <LoadScript googleMapsApiKey={key} libraries={["places"]} >
                        <StandaloneSearchBox
                            onLoad={onSBLoad}
                            onPlacesChanged={onPlacesChanged}
                        >
                            <TextField
                                type="text"
                                className='fieldsize'
                                placeholder="Enter Your Address"
                                value={address}
                                name="address"
                                onChange={validation}
                            />
                        </StandaloneSearchBox>
                    </LoadScript>
                </div>

                <div className="down">
                    <TextField type={'number'} className="fieldsize" placeholder="Enter Zipcode" name="code" value={code} onChange={validation} required />
                    {(code.length > 5) && code.length != 0 ? <p style={{ color: 'red' }}>Enter correct  Zip code</p> : null}
                </div>
                <div>
                    <Checkbox required />By clicking, I accept TERMS & CONDITIONS
                </div>
                <div className='bit'>
                    <Button variant="contained" className='button'>Register</Button>
                </div>
            </form>
            <p className='left'>Already a user?  SignIN </p>
        </Box>

    </div>
}