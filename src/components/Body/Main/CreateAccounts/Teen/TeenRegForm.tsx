import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TeenStyles.css';
import { ButtonGroup, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, Link, OutlinedInput, Radio, RadioGroup, TextareaAutosize } from '@mui/material';
import { useState } from 'react';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Register() {


    var ValidateName = "^(?=.*[a-z])(?=.*[A-Z])";
    var ValidateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{5,}$/i;
    var ValidatePassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";

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
        ZIPCode: ''
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
        ZIPCode
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
            ZIPCode: ''
        })
        alert('Your Registration Successfully Completed')
    }


    return (
        <div>
            <Box
                component="form"
                sx={{ width: '35rem', boxShadow: '0 0 15px #2270b44d', ml: '5rem' }}
            >
                <Box sx={{ ml: '5rem', mb: '5rem', mt: 2 }}>
                    <form onSubmit={formDetails}>
                        <ButtonGroup
                            sx={{ borderRadius: 5, justifyContent: 'center', m: 2 }}
                        >
                            <Button
                                sx={{ backgroundColor: '#f5f5f5', width: '10rem', border: 'none' }}
                            >
                                Login
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
                                id="FName"
                                label="First Name"
                                name='FirstName'
                                value={FirstName}
                                sx={{ width: '12.4rem', mr: 0.1, mt: 1.5 }}
                                onChange={formInputValidation}
                            />
                            <TextField
                                required
                                type={'text'}
                                id="LName"
                                label="Last Name"
                                name='LastName'
                                value={LastName}
                                sx={{ width: '12.4rem', ml: 0.1, mt: 1.5 }}
                                onChange={formInputValidation}
                            />
                        </div>
                        { (FirstName.length == 0 || !FirstName.match(ValidateName)) || (LastName.length == 0 || !LastName.match(ValidateName)) ? 
                            <pre className='PreText'>The name should start with UpperCase and follow with LowerCase</pre> : null }


                        {/* <pre className='PreText'>The name should start with UpperCase and follow with LowerCase</pre> */}
                        {!FirstName.match(ValidateName) && FirstName.length != 0 ? <span style={{ color: 'red' }}>Enter valid First name </span> : null}
                        {!LastName.match(ValidateName) && LastName.length != 0 ? <span style={{ color: 'red' }}>Enter valid Last name </span> : null}
                        {(FirstName.length < 4 || LastName.length < 4) && (FirstName.length != 0 || LastName.length != 0) ? <span style={{ color: 'red' }}>Name should contain minimum 4 characters</span> : null}
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'email'}
                                label="Email ID"
                                id="Email-ID"
                                name='EmailID'
                                value={EmailID}
                                sx={{ width: '25rem', mt: 1.5 }}
                                onChange={formInputValidation}
                            />
                            {!EmailID.match(ValidateEmail) && EmailID.length != 0 ? <p style={{ color: 'red' }}>Enter valid Email ID </p> : null}
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'number'}
                                label="Contact Number"
                                id="Contact-Number"
                                name='ContactNumber'
                                value={ContactNumber}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            {(ContactNumber.length < 10 || ContactNumber.length > 10) && ContactNumber.length != 0 ? <p style={{ color: 'red' }}>, It should be 10 digits</p> : null}
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'password'}
                                label="Password"
                                id="Password"
                                name='Password'
                                value={Password}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            {(Password.length < 6 || Password.length > 15) && Password.length != 0 ? <p style={{ color: 'red' }}>Contains characters min 8  and max 14 </p> : null}
                            {!Password.match(ValidatePassword) && Password.length != 0 ? <p style={{ color: 'red' }}>Contains one special character,one upper case, one lower case</p> : null}
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'text'}
                                label="Confirm Password"
                                id="Confirm-Password"
                                name='ConfirmPassword'
                                value={ConfirmPassword}
                                onChange={formInputValidation}
                                sx={{ mt: 1.5, width: '25rem' }}
                            />
                            {Password != ConfirmPassword ? <p style={{ color: 'red' }}>Password is not matched</p> : null}

                        </div>
                        <div>
                            <fieldset style={{ height: '3rem', width: '23rem' }}>
                                <legend>Date of Birth</legend>

                                {/* <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            /> */}
                                <TextField
                                    fullWidth
                                    required
                                    variant="standard"
                                    type={"date"}
                                    // label="Date Of Birth"
                                    id='DOB'
                                    name='DOB'
                                    value={DOB}
                                    sx={{mt: 1,  width: '23rem', border: 'none' }}
                                    onChange={formInputValidation}
                                />
                            </fieldset>
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type={'text'}
                                label="SSN Number"
                                id='SSN-Number'
                                name='SSN'
                                value={SSN}
                                sx={{ mt: 1.5, width: '25rem', border: 'none' }}
                                onChange={formInputValidation}
                            />

                        </div>
                        <div>
                            <FormControl
                                sx={{ m: 2 }}
                            >
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" name='Gender' />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" name='Gender' />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <fieldset style={{ height: '3rem', width: '23rem' }}>
                                <legend>Upload Profile</legend>
                                <TextField
                                    required
                                    fullWidth
                                    variant='standard'
                                    type={'file'}
                                    sx={{ mt: 1, width: '23rem' }}
                                    // label="Upload Profile"
                                    name='ProfilePhoto'
                                    value={ProfilePhoto}
                                    onChange={formInputValidation}
                                />
                            </fieldset>
                        </div>
                        <div>
                            <fieldset style={{ height: '3rem', width: '23rem' }}>
                                <legend>Upload Resume</legend>
                                <TextField
                                    required
                                    fullWidth
                                    variant='standard'
                                    type={'file'}
                                    sx={{ mt: 1, width: '23rem' }}
                                    // label="Upload Resume"
                                    name='Resume'
                                    value={Resume}
                                    onChange={formInputValidation}
                                />
                            </fieldset>
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'text'}
                                label="Parent/Guardian Name"
                                id="P/G-Name"
                                name='PGName'
                                value={PGName}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            { PGName.length == 0 || !PGName.match(ValidateName) ? 
                            <pre className='PreText'>The name should start with UpperCase and follow with LowerCase</pre> : null }
                            {!PGName.match(ValidateName) && PGName.length != 0 ? <p style={{ color: 'red' }}>Enter valid Parent/Guardian Name </p> : null}
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'number'}
                                label="Parent/Guardian Number"
                                id="P/G-Number"
                                name='PGNumber'
                                value={PGNumber}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                            {(PGNumber.length < 10 || PGNumber.length > 10) && PGNumber.length != 0 ? <p style={{ color: 'red' }}>, It should be 10 digits</p> : null}
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                required
                                type={'email'}
                                label="Parent/Guardian Email"
                                id="P/G-Email"
                                name='PGEmailID'
                                value={PGEmailID}
                                sx={{ mt: 1.5, width: '25rem' }}
                                onChange={formInputValidation}
                            />
                        </div>
                        <div className='headText'>
                            <span>Address</span>
                            <div>
                                <TextareaAutosize
                                    style={{ width: '25rem' }}
                                    minRows={3}
                                    required
                                    placeholder="Enter Your Address"
                                    value={Address}
                                    name='Address'
                                    onChange={formInputValidation}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    label="City"
                                    name='City'
                                    value={City}
                                    onChange={formInputValidation}
                                    sx={{ mt: 2, mb: 2, mr: 0.1, width: '8.2rem' }}
                                />
                                <TextField
                                    label="State"
                                    required
                                    name='State'
                                    value={State}
                                    sx={{ ml: 0.1, mt: 2, mb: 2, mr: 0.1, width: '8.2rem' }}
                                    onChange={formInputValidation}
                                />
                                <TextField
                                    label="ZIP CODE"
                                    required
                                    type={'number'}
                                    name='ZIPCode'
                                    value={ZIPCode}
                                    sx={{ ml: 0.1, mt: 2, mb: 2, width: '8.2rem' }}
                                    onChange={formInputValidation}
                                />
                                {(ZIPCode.length < 10 || ZIPCode.length > 10) && ZIPCode.length != 0 ? <p style={{ color: 'red' }}>Enter valid ZIP Code, It should be 5 digits</p> : null}
                            </div>
                        </div>
                        <div className='Btext'>
                            <Checkbox {...label} name='Checkbox' /> I accept TERMS & CONDITIONS
                        </div>
                        <Button variant="contained" type={'submit'} sx={{ ml: '20rem', height: '3rem' }} >Register</Button>
                        <div className='Btext Blink'>
                            Already a User <Link>Sign IN</Link>
                        </div>
                    </form>
                </Box>
            </Box>
        </div >
    );
}
