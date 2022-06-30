import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './JobPostForm.css';
import { Checkbox, Select, MenuItem, TextFieldProps } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { validateName } from '../../lib/utils';



const JobPostForm = (props: any) => {

    const [DateLimit, setDateLimit] = React.useState<DateRange<Date>>([null, null]);

    const arr = [
            "Baby Sitter",
            "Gardener",
            "Pizza Delivery",
            "Coffee Day",
            "Type Writer",
            "Online Tutions",
            'Pool Cleaning',
            "Beverage Supplier",
            "Dish Washer",
            "Sales Crew",
            "Clerk Helper",
            "Casher",
            "Crew Members",
            "Cook / Cheif",
            "Paper Supplier",
            "Grocery Supplier"
        ]
    

    const [data, setData] = useState({
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


    const [, setLoadingValue] = useState('');
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
    const onJobPostInput = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
        const LoadValue = e.target.value;
        setLoadingValue(LoadValue);
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
        setData({
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
                <Box className='boxContainer'>
                    <h1>JOB POSTING FORM</h1>
                    <form onSubmit={onVRFormSubmit} className="vrForm">
                        <div className="vrFormInput">
                            <TextField
                                name='VenueName'
                                value={VenueName}
                                placeholder='Enter Name Of The Organization'
                                type={'text'}
                                sx={{ mt: 3 }}
                                onChange={onJobPostInput}
                                className="fifWidth"
                            />
                            {(VenueName.length < 0 || !validateName(VenueName)) ?
                                <pre className='errorMsg'>The name should start with UpperCase and follow with LowerCase</pre> : null}
                        </div>

                        <div className="vrFormInput">
                            <div >
                                <label className='mr26'><b>JOB Title</b></label>
                            </div>
                            <div >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={TypeOfPostAppliedFor}
                                    name="TypeOfPostAppliedFor"
                                    onChange={onJobPostInput}
                                    className="fifWidth"
                                >
                                    {arr.map(item => {
                                        return  <MenuItem value={item}>{item}</MenuItem>
                                    })}
                                </Select>
                            </div>
                        </div>

                        <div className="vrFormInput">
                            <div>
                                <label className='mr23'><b>Job Description</b></label>
                            </div>
                            <div>
                                <textarea
                                    value={JobDescription}
                                    name="JobDescription"
                                    onChange={onJobPostInput}
                                    required
                                    className='fifWidth'
                                />
                            </div>
                        </div>
                        
                        <div className='fiAlignment'>
                            <label><b>Payment</b></label>
                            <div>
                                <FormControlLabel
                                    label="CashPayment"
                                    control={<Checkbox />}
                                    sx={{ ml: 3 }}
                                    name="CashPayment"
                                    value="CashPayment"
                                    onChange={onJobPostInput}
                                /><br />
                                <FormControlLabel
                                    label="NetBanking"
                                    control={<Checkbox />}
                                    sx={{ ml: 3 }}
                                    name="NetBanking"
                                    value="NetBanking"
                                    onChange={onJobPostInput}
                                /><br />
                                <FormControlLabel
                                    label="ChequePayment"
                                    control={<Checkbox />}
                                    sx={{ ml: 3 }}
                                    name="ChequePayment"
                                    value="ChequePayment"
                                    onChange={onJobPostInput}
                                /><br />
                                <FormControlLabel
                                    label="CashApp/ZelleApp/PayPal"
                                    control={<Checkbox />}
                                    sx={{ ml: 3 }}
                                    name="CashApp_ZelleApp_PayPal"
                                    value="CashApp/ZelleApp/PayPal"
                                    onChange={onJobPostInput}
                                /><br />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label className='mr22'><b>Total Time Period</b></label>
                            </div>
                            <div className='ml5 d_flex'>
                                <div >
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
                                                    <Box sx={{ mx: 1 }}> to </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                        />
                                    </LocalizationProvider>

                                </div>
                            </div>
                            <div >
                                <div>
                                    <label className='mr23-5'><b>Work Timings</b></label>
                                </div>
                                <TextField
                                    value={WorkingTime}
                                    name="WorkingTime"
                                    onChange={onJobPostInput}
                                    className="fifWidth"
                                />
                            </div>
                            <div >
                                <div>
                                    <label className='mr24'><b>Job Location</b></label>
                                </div>
                                <div className='ml5 d_flex'>
                                    <div >
                                        <TextField
                                            value={LocatedState}
                                            name="LocatedState"
                                            onChange={onJobPostInput}
                                            className='ltfWidth'
                                            placeholder='State'
                                        />
                                    </div>
                                    <div className='flip'>
                                        <TextField
                                            placeholder='city'
                                            value={LocatedCity}
                                            name="LocatedCity"
                                            onChange={onJobPostInput}
                                            className='ltfWidth'
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
                                            className='ltfWidth'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='fifWidth'>
                                <div>
                                    <label className='mr18-3'><b>Contact Details</b></label><br />
                                </div>
                                <div>
                                    <textarea
                                        value={ContactingDetails}
                                        name="ContactingDetails"
                                        className='fifWidth ml5'
                                        onChange={onJobPostInput}
                                    />
                                </div>
                            </div>
                            <div className='ml_15'>
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


