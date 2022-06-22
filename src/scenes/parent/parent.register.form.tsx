import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonGroup, Checkbox, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../images_css/RegStyles.css';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function ParentRegister() {


    var ValidatePassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";

    const [data, setData] = useState({
        ParentName: '',
        ParentEmailID: '',
        ParentContactNumber: '',
        ParentPassword: '',
        ParentConfirmPassword: ''
    })
    const {
        ParentName,
        ParentEmailID,
        ParentContactNumber,
        ParentPassword,
        ParentConfirmPassword
    } = data;
    const formInputValidation = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const formDetails = (e: any) => {
        e.preventDefault();

        setData({
            ParentName: '',
            ParentEmailID: '',
            ParentContactNumber: '',
            ParentPassword: '',
            ParentConfirmPassword: ''
        })
        alert('Your Registration Successfully Completed')
    }


    return (
        <div>
            <Box
                component="form"
                sx={{ width: '35rem', boxShadow: '0 0 15px #2270b44d', pb: 2, margin: 'auto', mt: 5, mb: 2 }}
                onSubmit={formDetails}
            >
                <Box sx={{}}>
                    <ButtonGroup
                        sx={{ borderRadius: 5, justifyContent: 'center', m: 2 }}
                    >
                        <Button
                            sx={{ backgroundColor: '#f5f5f5', width: '10rem', border: 'none' }}
                        >
                            <Link to='' className='link'>Login</Link>
                        </Button>
                        <Button
                            variant='contained'
                            sx={{ width: '10rem' }}
                        >
                            Register
                        </Button>
                    </ButtonGroup>
                    <div className='name'>
                        <TextField
                            required
                            disabled
                            type={'text'}
                            id="PName"
                            placeholder="Parent Full Name"
                            name='ParentName'
                            value={ParentName}
                            sx={{ width: '25rem', mt: 1.5 }}
                            onChange={formInputValidation} />
                    </div>
                    <div>
                        <TextField
                            required
                            disabled
                            type={'email'}
                            placeholder="Parent Email ID"
                            id="Parent-Email-ID"
                            name='PEmailID'
                            value={ParentEmailID}
                            sx={{ width: '25rem', mt: 1.5 }}
                            onChange={formInputValidation} />
                    </div>
                    <div>
                        <TextField
                            required
                            disabled
                            type={'number'}
                            placeholder="Parent Contact Number"
                            id="Parent-Contact-Number"
                            name='ParentContactNumber'
                            value={ParentContactNumber}
                            sx={{ mt: 1.5, width: '25rem' }}
                            onChange={formInputValidation} />
                    </div>
                    <div>
                        <TextField
                            required
                            type={'password'}
                            placeholder="Password"
                            id="Password"
                            name='ParentPassword'
                            value={ParentPassword}
                            sx={{ mt: 1.5, width: '25rem' }}
                            onChange={formInputValidation} />
                        {(ParentPassword.length < 8 || ParentPassword.length > 15) && ParentPassword.length != 0 ? <p className='errorMsg'>Contains characters min 8  and max 14 </p> : null}
                        {!ParentPassword.match(ValidatePassword) && ParentPassword.length != 0 ? <p className='errorMsg'>Contains atleast one special character,one upper case, one lower case & one number</p> : null}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'text'}
                            placeholder="Confirm Password"
                            id="Confirm-Password"
                            name='ParentConfirmPassword'
                            value={ParentConfirmPassword}
                            onChange={formInputValidation}
                            sx={{ mt: 1.5, width: '25rem' }} />
                        {ParentPassword != ParentConfirmPassword ? <p className='errorMsg' >Password is not matched</p> : null}

                    </div>
                    <div>
                        <Checkbox {...label} name='Checkbox' required sx={{ ml: -20 }} /> I accept TERMS & CONDITIONS
                    </div>
                    <Button variant="contained" type={'submit'} sx={{ ml: '20rem', height: '3rem' }}>Register</Button>
                    <div className=''>
                        Already a User <Link to="">Sign IN</Link>
                    </div>
                </Box>
            </Box>
        </div>
    );
}
