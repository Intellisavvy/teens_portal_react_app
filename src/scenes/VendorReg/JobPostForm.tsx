import * as React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './JobPostForm.css';
import { Checkbox, Select, MenuItem, BadgeMark, TextFieldProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangePicker, LocalizationProvider, DateRange } from '@mui/lab';





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const JobPostForm = (props: any) => {

    var ValidateName = "^[A-Z a-z]+$";
    const [DateLimit, setDateLimit] = React.useState<DateRange<Date>>([null, null]);



    const [check, setCheck] = React.useState(false);
    const [data, setdata] = useState({
        VenueName: '',
        TypeOfPostAppliedFor: '',
        JobDescription: '',
        CashPayment: '',
        NetBanking: '',
        ChequePayment: '',
        CashApp_ZelleApp_PayPal: '',
        WorkStartingDate: '',
        WorkEndingDate: '',
        WorkingTime: '',
        LocatedState: '',
        LocatedCity: '',
        ZipCode: '',
        ContactingDetails: ''

    })


    const [love, setlove] = useState('');
    // const Post=e=>{
    //     const hike=e.target.value;
    //     setlove(hike);
    // }
    const checkboxref = useRef('');
    const {
        VenueName,
        TypeOfPostAppliedFor,
        JobDescription,
        CashPayment,
        NetBanking,
        ChequePayment,
        CashApp_ZelleApp_PayPal,
        WorkStartingDate,
        WorkEndingDate,
        WorkingTime,
        LocatedState,
        LocatedCity,
        ZipCode,
        ContactingDetails
    } = data;
    const [checkbox, setCheckBox] = useState(false);
    const onJobPostInput = (e: any) => {
        // setcheckbox(checkboxref.current.checked);

        setdata({ ...data, [e.target.name]: e.target.value });
        const hike = e.target.value;
        setlove(hike);
    };


    const onVRFormSubmit = (e: any) => {
        e.preventDefault();
        props.onflow(
            VenueName,
            TypeOfPostAppliedFor,
            JobDescription,
            CashPayment,
            NetBanking,
            ChequePayment,
            CashApp_ZelleApp_PayPal,
            WorkStartingDate,
            WorkEndingDate,
            WorkingTime,
            LocatedState,
            LocatedCity,
            ZipCode,
            ContactingDetails
        );
        setdata({
            VenueName: '',
            TypeOfPostAppliedFor: '',
            JobDescription: '',
            CashPayment: '',
            NetBanking: '',
            ChequePayment: '',
            CashApp_ZelleApp_PayPal: '',
            WorkStartingDate: '',
            WorkEndingDate: '',
            WorkingTime: '',
            LocatedState: '',
            LocatedCity: '',
            ZipCode: '',
            ContactingDetails: ''
        })
    }


    return (
        <div >
            <Grid container>
                <Box className='BoxContainer'>
                    <h1>JOB POSTING FORM</h1>

                    <form onSubmit={onVRFormSubmit} className="VRForm">
                        <div className="VRFormInput">
                            <TextField
                                name='VenueName'
                                value={VenueName}
                                placeholder='Enter Name Of The Organization'
                                type={'text'}
                                sx={{ mt: 3 }}
                                onChange={onJobPostInput}
                                className="FIFWidth"
                            />
                            {(VenueName.length < 0 || !VenueName.match(ValidateName)) ?
                                <pre className='ErrorMsg'>The name should start with UpperCase and follow with LowerCase</pre> : null}

                        </div>
                        <div className="VRFormInput">
                            <div >
                                <label style={{ marginLeft: '-26rem' }}><b>JOB Title</b></label>
                                {/* {love === 70 && 
                                (
                                    <div >
                                        <TextField placeholder='Enter job category ' value="sel" />
                                        </div>
                                    
                                )
                                } */}
                            </div>
                            <div >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={TypeOfPostAppliedFor}
                                    name="TypeOfPostAppliedFor"
                                    onChange={onJobPostInput}
                                    className="FIFWidth"
                                >
                                    <MenuItem value="none">---None---</MenuItem>
                                    <MenuItem value="Babysiter">Baby Sitter</MenuItem>
                                    <MenuItem value="Gardener">Gardener</MenuItem>
                                    <MenuItem value="Pizza delivery">Pizza Delivery</MenuItem>
                                    <MenuItem value="Coffee day">Coffee Day Waiter</MenuItem>
                                    <MenuItem value="Type writer">Type Writer</MenuItem>
                                    <MenuItem value="Online tution">Online Tutions</MenuItem>
                                    <MenuItem value="cook">Cook</MenuItem>
                                    <MenuItem value="crew members">Crew members</MenuItem>
                                    <MenuItem value="cashier">Cashier</MenuItem>
                                    <MenuItem value="clerk helper">Clerk Helper</MenuItem>
                                    <MenuItem value="sales crew">Sales crew</MenuItem>
                                    <MenuItem value="Dish washer">Dish washer</MenuItem>
                                    <MenuItem value="Beverage supplier">Beverage supplier</MenuItem>
                                    <MenuItem value="pool cleaning">Pool cleaning</MenuItem>
                                    <MenuItem value="none ">None of Above</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div >
                            <div>
                                <label style={{ marginLeft: '-23rem' }}><b>Job Description</b></label>
                            </div>
                            <div>
                                <textarea
                                    value={JobDescription}
                                    name="JobDescription"
                                    onChange={onJobPostInput}
                                    required
                                    className='FIFWidth'
                                />
                            </div>
                        </div>
                        <div className='FIAlignment'>
                            <label><b>Payment</b></label>
                            <div>
                                <FormControlLabel
                                    label="CashPayment"
                                    control={<Checkbox />}
                                    style={{ marginLeft: "3%" }}
                                    name="CashPayment"
                                    value="CashPayment"
                                    onChange={onJobPostInput}
                                /><br />
                                <FormControlLabel
                                    label="NetBanking"
                                    control={<Checkbox />}
                                    style={{ marginLeft: "3%" }}
                                    name="NetBanking"
                                    value="NetBanking"
                                    onChange={onJobPostInput}
                                /><br />
                                <FormControlLabel
                                    label="ChequePayment"
                                    control={<Checkbox />}
                                    style={{ marginLeft: "3%" }}
                                    name="ChequePayment"
                                    value="ChequePayment"
                                    onChange={onJobPostInput}
                                /><br />
                                <FormControlLabel
                                    label="CashApp/ZelleApp/PayPal"
                                    control={<Checkbox />}
                                    style={{ marginLeft: "3%" }}
                                    name="CashApp_ZelleApp_PayPal"
                                    value="CashApp/ZelleApp/PayPal"
                                    onChange={onJobPostInput}
                                /><br />
                            </div>
                        </div>
                        <div >
                            <div>
                                <label style={{ marginLeft: '-23rem' }}><b>Total Time Period</b></label>
                            </div>
                            <div style={{ display: 'flex', marginLeft: '4.5rem' }}>
                                <div >
                                    {/* <TextField
                                        value={WorkStartingDate}
                                        name="WorkStartingDate"
                                        onChange={onJobPostInput}
                                        className='DRFeild'
                                        type={'date'}
                                    />
                                </div>
                                <div className='flip'>
                                    <TextField
                                        type={'date'}
                                        value={WorkEndingDate}
                                        name="WorkEndingDate"
                                        onChange={onJobPostInput}
                                        className='DRFeild'
                                    />
                                </div> */}
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateRangePicker
                                            startText=""
                                            endText=""
                                            value={DateLimit}
                                            onChange={(newValue: any) => {
                                                setDateLimit(newValue);
                                            }}
                                            renderInput={(startProps: JSX.IntrinsicAttributes & TextFieldProps, endProps: JSX.IntrinsicAttributes & TextFieldProps) => (
                                                <React.Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{ mx: 2 }}> to </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                        />
                                    </LocalizationProvider>

                                </div>
                            </div>
                            <div >
                                <div>
                                    <label style={{ marginLeft: '-24.5rem' }}><b>Work Timings</b></label>
                                </div>
                                <TextField
                                    value={WorkingTime}
                                    name="WorkingTime"
                                    onChange={onJobPostInput}
                                    className="FIFWidth"
                                />
                            </div>
                            <div >
                                <div>
                                    <label style={{ marginLeft: '-25rem' }}><b>Job Location</b></label>
                                </div>
                                <div style={{ display: 'flex', marginLeft: '5rem' }}>
                                    <div >
                                        <TextField
                                            value={LocatedState}
                                            name="LocatedState"
                                            onChange={onJobPostInput}
                                            className='LTFWidth'
                                            placeholder='State' />

                                    </div>
                                    <div className='flip'>
                                        <TextField
                                            placeholder='city'
                                            value={LocatedCity}
                                            name="LocatedCity"
                                            onChange={onJobPostInput}
                                            className='LTFWidth'
                                        />
                                    </div>
                                    <div className='flip'>
                                        <TextField
                                            type={'number'}
                                            id="outlined-password-input"
                                            placeholder='Zip code'
                                            value={ZipCode}
                                            name="ZipCode"
                                            onChange={onJobPostInput}
                                            className='LTFWidth'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='FIFWidth'>
                                <div>
                                    <label style={{ marginLeft: '-14rem' }}><b>Contact Details</b></label><br />
                                </div>
                                <div>
                                    <textarea
                                        value={ContactingDetails}
                                        name="ContactingDetails"
                                        className='FIFWidth'
                                        onChange={onJobPostInput}
                                        style={{ marginLeft: '5rem' }}
                                    />
                                </div>
                            </div>
                            <div style={{ marginLeft: '-15rem' }}>
                                <input type={'checkbox'} /> I accept TERMS & CONDITIONS

                            </div>
                            <div className='button'>
                                <Button
                                    variant="contained"
                                    type={'submit'}
                                >
                                    Post Job
                                </Button>
                            </div>
                        </div>
                    </form>
                </Box>
            </Grid>
        </div>
    );
}

export default JobPostForm;


