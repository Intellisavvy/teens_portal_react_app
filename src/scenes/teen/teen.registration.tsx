
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonGroup, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ReactInputMask from 'react-input-mask';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import '../../images_css/RegStyles.css';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function TeenRegistration() {


    var ValidateName = "^[A-Z a-z]+$";
    var ValidateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var ValidatePassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";

    const [dob, setDOB] = React.useState<Date | null>(null);
    const mnDate = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())
    const mxDate = new Date(new Date().getFullYear() - 12, new Date().getMonth(), new Date().getDate())

    // API Key
    const APIKey = "AIzaSyAmBHhXsFA7Zs12luX1Ve6QMgC5dpq1RVI";

    const [searchBox, setSearchBox ] = useState('');

    const onAddress = (ref: any) => {
        setSearchBox(ref)
    };




    const [data, setData] = useState({
        FirstName: '',
        LastName: '',
        EmailID: '',
        ContactNumber: '',
        Password: '',
        ConfirmPassword: '',
        DOB: '',
        SSN: '',
        Gender: '',
        ProfilePhoto: '',
        Resume: '',
        PGName: '',
        PGNumber: '',
        PGEmailID: '',
        Address: '',
        City: '',
        State: '',
        ZIPCode: '',
        Location: ''
    })
    const {
        FirstName,
        LastName,
        EmailID,
        ContactNumber,
        Password,
        ConfirmPassword,
        DOB,
        SSN,
        Gender,
        ProfilePhoto,
        Resume,
        PGName,
        PGNumber,
        PGEmailID,
        Address,
        City,
        State,
        ZIPCode,
        Location
    } = data;
    const formInputValidation = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const formDetails = (e: any) => {
        e.preventDefault();

        setData({
            FirstName: '',
            LastName: '',
            EmailID: '',
            ContactNumber: '',
            Password: '',
            ConfirmPassword: '',
            DOB: '',
            SSN: '',
            Gender: '',
            ProfilePhoto: '',
            Resume: '',
            PGName: '',
            PGNumber: '',
            PGEmailID: '',
            Address: '',
            City: '',
            State: '',
            ZIPCode: '',
            Location: ''
        })
        alert('Your Registration Successfully Completed');
    }


    return (
        <div>
            <Box
                component="form"
                sx={{ width: '35rem', boxShadow: '0 0 15px #2270b44d', margin: 'auto' }}
            >
                <Box sx={{ mb: '5rem', mt: 2 }}>
                    <form onSubmit={formDetails}>
                        <ButtonGroup
                            sx={{ justifyContent: 'center', m: 2 }}
                        >
                            <Button
                                sx={{ backgroundColor: '#f5f5f5', width: '10rem' }}
                            >
                                <Link to='' className='link'>Login</Link>
                            </Button>
                            <Button
                                variant='contained'
                                sx={{ width: '10rem' }}
                            >
                                Registration
                            </Button>
                        </ButtonGroup>
                        <div className='name'>
                            <TextField
                                required
                                type={'text'}
                                autoComplete='none'
                                id="FName"
                                placeholder="First Name"
                                name='FirstName'
                                value={FirstName}
                                sx={{ width: '12.2rem', mr: 0.3, mt: 1.5 }}
                                onChange={formInputValidation}
                            />
                            <TextField
                                required
                                type={'text'}
                                autoComplete='none'
                                id="LName"
                                placeholder="Last Name"
                                name='LastName'
                                value={LastName}
                                sx={{ width: '12.2rem', ml: 0.3, mt: 1.5 }}
                                onChange={formInputValidation}
                            />
                        </div>
                        {(FirstName.length == 0 || !FirstName.match(ValidateName)) || (LastName.length == 0 || !LastName.match(ValidateName)) ?
                            <pre className='PreText'>The name should start with UpperCase and follow with LowerCase</pre> : null}

                        {!FirstName.match(ValidateName) && FirstName.length != 0 ? <span className='errorMsg'>Enter valid First name, Allow characters only<br /></span> : null}
                        {!LastName.match(ValidateName) && LastName.length != 0 ? <span className='errorMsg'>Enter valid Last name, Allow characters only<br /> </span> : null}
                        {(FirstName.length < 2 || LastName.length < 2) && (FirstName.length != 0 || LastName.length != 0) ? <span className='errorMsg'>Name should contain minimum 2 characters</span> : null}
                        <div>
                            <TextField
                                required
                                type={'email'}
                                placeholder="Email ID"
                                id="Email-ID"
                                name='EmailID'
                                autoComplete='none'
                                value={EmailID}
                                sx={{ width: '25rem', mt: 1.5 }}
                                onChange={formInputValidation}
                            />
                            {!EmailID.match(ValidateEmail) && EmailID.length != 0 ? <p className='errorMsg'>Enter valid Email ID </p> : null}
                        </div>
                        <div>
                            <ReactInputMask
                                mask='(999) 999-9999'
                                type='text'
                                autoComplete='none'
                                placeholder="Contact Number"
                                id="Contact-Number"
                                name='ContactNumber'
                                value={ContactNumber}
                                className="reactInputMask"
                                onChange={formInputValidation}
                                {...(props: JSX.IntrinsicAttributes & TextFieldProps) => <TextField label='cc number' {...props} />}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                type={'password'}
                                placeholder="Password"
                                id="Password"
                                name='Password'
                                value={Password}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            {(Password.length < 8 || Password.length > 15) && Password.length != 0 ? <p className='errorMsg'>Contains characters min 8  and max 14 </p> : null}
                            {!Password.match(ValidatePassword) && Password.length != 0 ? <p className='errorMsg'>Contains one special character,one upper case, one lower case and one number</p> : null}
                        </div>
                        <div>
                            <TextField

                                required
                                type={'password'}
                                placeholder="Confirm Password"
                                id="Confirm-Password"
                                name='ConfirmPassword'
                                value={ConfirmPassword}
                                onChange={formInputValidation}
                                sx={{ mt: 1.5, width: '25rem' }}
                            />
                            {Password != ConfirmPassword ? <p className='errorMsg'>Password is not matched</p> : null}

                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker
                                    label="Date of Birth"
                                    value={dob}
                                    minDate={mnDate}
                                    maxDate={mxDate}
                                    onChange={(newValue) => {
                                        setDOB(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} sx={{ mt: 1.5, width: '25rem' }} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <ReactInputMask
                                mask='999 99 9999'
                                type={'text'}
                                placeholder="SSN Number"
                                id='SSN-Number'
                                autoComplete='none'
                                name='SSN'
                                value={SSN}
                                className="reactInputMask"
                                onChange={formInputValidation}
                            >
                            </ReactInputMask>
                        </div>
                        <div>
                            <FormControl
                                sx={{ mt: 2 }}
                            >
                                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mr: 40 }}>Gender</FormLabel>
                                <RadioGroup
                                    row
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" name='Gender' />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" name='Gender' />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                required
                                type={'text'}
                                placeholder="Parent/Guardian Name"
                                autoComplete='none'
                                id="P/G-Name"
                                name='PGName'
                                value={PGName}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            {PGName.length == 0 || !PGName.match(ValidateName) ?
                                <pre className='PreText'>The name should start with UpperCase and follow with LowerCase</pre> : null}
                            {!PGName.match(ValidateName) && PGName.length != 0 ? <p className='errorMsg'>Enter valid Parent/Guardian Name </p> : null}
                        </div>
                        <div>
                            <ReactInputMask
                                mask='(999) 999-9999'
                                type='text'
                                autoComplete='none'
                                placeholder="Parent/Guardian Contact Number"
                                id="P/G-Number"
                                name='PGNumber'
                                value={PGNumber}
                                className="reactInputMask"
                                onChange={formInputValidation}
                                {...(props: JSX.IntrinsicAttributes & TextFieldProps) => <TextField label='cc number' {...props} />}
                            />
                        </div>

                        <div>
                            <TextField
                                required
                                type={'email'}
                                placeholder="Parent/Guardian Email"
                                autoComplete='none'
                                id="P/G-Email"
                                name='PGEmailID'
                                value={PGEmailID}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            {!PGEmailID.match(ValidateEmail) && PGEmailID.length != 0 ? <p className='errorMsg'>Enter valid Email ID </p> : null}
                        </div>
                        <div>
                            <TextField
                                required
                                placeholder="Address"
                                name='Address'
                                value={Address}
                                autoComplete='none'
                                onChange={formInputValidation}
                                sx={{ mt: 1.5, width: '25rem' }}
                            />
                        </div>
                        <div>
                            <LoadScript
                                googleMapsApiKey={APIKey}
                                libraries={["places"]}
                            >
                                <StandaloneSearchBox
                                    onLoad={onAddress}
                                >
                                    <TextField
                                        placeholder="Autofill Address location"
                                        type={'text'}
                                        sx={{ mt: 1.5, width: '25rem' }}
                                        id='Location'
                                    />
                                </StandaloneSearchBox>
                            </LoadScript>
                        </div>

                        <div className='Btext'>
                            <Checkbox {...label} name='Checkbox' required  sx={{ ml: -20 }}/> I accept TERMS & CONDITIONS
                        </div>
                        <Button variant="contained" type={'submit'} sx={{ ml: '20rem', height: '3rem' }} >Register</Button>
                        <div className='Btext Blink'>
                            Already a User <Link to="" className='link'>Sign IN</Link>
                        </div>
                    </form>
                </Box>
            </Box>
        </div >
    );
}
