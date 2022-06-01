import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TeenStyles.css';
import { ButtonGroup, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, Link, OutlinedInput, Radio, RadioGroup } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function RegistrationForm() {
    return (
        <div>
            <Box
                component="form"
                sx={{ width: '35rem', boxShadow: '0 0 15px #2270b44d', mt: 3, ml: '5rem' }}
            >
                <Box sx={{ mb: '5rem' }}>
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
                            sx={{ width: '12.4rem', mr: 0.1, mt: 1.5 }}
                        />
                        <TextField
                            required
                            type={'text'}
                            id="LName"
                            label="Last Name"
                            sx={{ width: '12.4rem', ml: 0.1, mt: 1.5 }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'email'}
                            label="Email ID"
                            id="Email-ID"
                            sx={{ width: '25rem', mt: 1.5 }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'password'}
                            label="Password"
                            id="Password"
                            sx={{ mt: 1.5, width: '25rem' }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'text'}
                            label="Confirm Password"
                            id="C-Password"
                            sx={{ mt: 1.5, width: '25rem' }}
                        />
                    </div>
                    <div>
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
                            type={"date"}
                            label="Date Of Birth"
                            id='DOB'
                            sx={{ mt: 1.5, width: '25rem' }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type={'text'}
                            label="SSN Number"
                            id='SSN-Number'
                            sx={{ mt: 1.5, width: '25rem' }}
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
                                <FormControlLabel value="female" control={<Radio />} label="Male" />
                                <FormControlLabel value="male" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            required
                            fullWidth
                            type={'file'}
                            sx={{ mt: 1.5, width: '25rem' }}
                            label="Upload Profile"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            fullWidth
                            type={'file'}
                            sx={{ mt: 1.5, width: '25rem' }}
                            label="Upload Resume"
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'text'}
                            label="Parent/Guardian Name"
                            id="P/G-Name"
                            sx={{ mt: 1.5, width: '25rem' }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'number'}
                            label="Parent/Guardian Number"
                            id="P/G-Number"
                            sx={{ mt: 1.5, width: '25rem' }}

                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            type={'email'}
                            label="Parent/Guardian Email"
                            id="P/G-Email"
                            sx={{ mt: 1.5, width: '25rem' }}
                        />
                    </div>
                    <div className='headText'>
                        <span>Address</span>
                        <div>
                            <TextField
                                required
                                label="House Number"
                                sx={{ mt: 2, mb: 2, mr: 0.2, width: '9.6rem' }}
                            />
                            <TextField
                                label="Street Name"
                                sx={{ ml: 0.2, mt: 2, mb: 2, width: '15rem' }}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="City"
                                sx={{ mt: 2, mb: 2, mr: 0.1, width: '8.2rem' }}
                            />
                            <TextField
                                label="State"
                                sx={{ ml: 0.1, mt: 2, mb: 2, mr: 0.1, width: '8.2rem' }}
                            />
                            <TextField
                                label="ZIP CODE"
                                type={'number'}
                                sx={{ ml: 0.1, mt: 2, mb: 2, width: '8.2rem' }}
                            />
                        </div>
                    </div>
                    <div className='Btext'>
                        <Checkbox {...label} /> I accept TERMS & CONDITIONS
                    </div>
                    <Button variant="contained" type={'submit'} sx={{ ml: '20rem', height: '3rem' }} >Register</Button>
                    <div className='Btext Blink'>
                        Already a User <Link>Sign IN</Link>
                    </div>
                </Box>
            </Box>
        </div >
    );
}
