import * as React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './App.css';
import { Checkbox, Select, MenuItem, BadgeMark } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { red } from '@mui/material/colors';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const JobPost = (props: any) => {

    const [check, setcheck] = React.useState(false);
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
    const [checkbox, setcheckbox] = useState(false);
    const onJobPostInput = (e: any) => {
        // setcheckbox(checkboxref.current.checked);

        setdata({ ...data, [e.target.name]: e.target.value });
        const hike = e.target.value;
        setlove(hike);
    };


    const hello = (e: any) => {
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
                <Box className='well'>
                    <form onSubmit={hello} className="side">
                        <div className="sall">
                            <TextField
                                name='VenueName'
                                value={VenueName}
                                placeholder='Enter Name Of The Organization / Location'
                                type={'text'}
                                onChange={onJobPostInput}
                                className="fieldsize"
                            />
                        </div>
                        <div >
                            <div >
                                <label ><b >JOB Title</b></label>
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
                                    className="fieldsize"
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
                                <label><b>Job Description</b></label>
                            </div>
                            <div>
                                <textarea
                                    value={JobDescription}
                                    name="JobDescription"
                                    onChange={onJobPostInput}
                                    required
                                    className='size'
                                />
                            </div>
                        </div>
                        <div>
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
                                <label><b>Total Time Period</b></label>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div >
                                    <TextField
                                        value={WorkStartingDate}
                                        name="WorkStartingDate"
                                        onChange={onJobPostInput}
                                        className='flow'
                                        type={'date'}
                                    />

                                </div>
                                <div className='flip'>
                                    <TextField
                                        type={'date'}
                                        value={WorkEndingDate}
                                        name="WorkEndingDate"
                                        onChange={onJobPostInput}
                                        className='flow'
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div>
                                <label><b>Work Timings</b></label>
                            </div>
                            <TextField
                                value={WorkingTime}
                                name="WorkingTime"
                                onChange={onJobPostInput}
                                className="fieldsize"
                            />
                        </div>
                        <div >
                            <div>
                                <label><b>Job Location</b></label>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div >
                                    <TextField
                                        value={LocatedState}
                                        name="LocatedState"
                                        onChange={onJobPostInput}
                                        className='flow'
                                        placeholder='State' />

                                </div>
                                <div className='flip'>
                                    <TextField
                                        placeholder='city'
                                        value={LocatedCity}
                                        name="LocatedCity"
                                        onChange={onJobPostInput}
                                        className='flow'
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
                                        className='flow'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='fieldsize'>
                            <div>
                                <label><b>Contact Details</b></label><br />
                            </div>
                            <div>
                                <textarea
                                    value={ContactingDetails}
                                    name="ContactingDetails"
                                    className='size'
                                    onChange={onJobPostInput}
                                />
                            </div>
                        </div>
                        <div>
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
                    </form>
                </Box>
            </Grid>
        </div>
    );
}

export default JobPost;


