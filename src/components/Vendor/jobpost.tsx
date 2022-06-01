import * as React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './App.css';
import { Checkbox, Select,MenuItem, BadgeMark } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 

const Jobpost=(props:any) =>{
   
    const[check,setcheck]=React.useState(false);
    const[data,setdata]=useState({
    name:'',
    option:'',
    descp:'',
   cashpayment:'',
   netbanking:'',
   checkpayment:'',
   cashapp:'',
   time:'',
   date:'',
   work:'',
   state:'',
   city:'',
   code:'',
   contact:''

    })

    
    const[love,setlove]=useState('');
    // const Post=e=>{
    //     const hike=e.target.value;
    //     setlove(hike);
    // }
    const checkboxref =useRef('');
    const{name,option,descp,cashpayment,netbanking,checkpayment,cashapp,time,date,work,state,city,code,contact}=data;
    const[checkbox,setcheckbox]=useState(false);
    const post=(e:any) =>{
        // setcheckbox(checkboxref.current.checked);
        
        setdata({...data,[e.target.name]:e.target.value});
        const hike=e.target.value;
        setlove(hike);
    };
    
    
    const hello=(e:any)=>{
        e.preventDefault();    
       props.onflow(name,option,descp,cashpayment,netbanking,checkpayment,cashapp,time,date,work,state,city,code,contact);
        setdata({
            name:'',
            option:'',
            descp:'',
            cashpayment:'',
            netbanking:'',
            checkpayment:'',
            cashapp:'',
            time:'',
            date:'',
            work:'',
            state:'',
            city:'',
            code:'',
            contact:''
        })
    }

   
    return (
      <div >
        
            <Grid container>
      
      <Box className='well'>
         <form onSubmit={hello} className="side">  
               
                <div className="sall">
                <TextField
                           
                            name='name'
                            value={name}
                            placeholder='Enter Name/Organization'
                            type={'text'}
                            onChange={post}
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
                    <Select  labelId="demo-simple-select-label" id="demo-simple-select"
                           value={option}   name="option" onChange={post} className="fieldsize">
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
                        <textarea  value={descp}   name="descp" onChange={post} required className='size'/> 
                        </div>
                    </div>                   
                    <div>
                        <label ><b>Payment</b></label>
                        <div>
                            <FormControlLabel label="CashPayment" control={<Checkbox  />}  style={{ marginLeft: "3%" }} name="cashpayment" value="cashpayment"  onChange={post} /><br/>
                            <FormControlLabel label="NetBanking" control={<Checkbox />}  style={{ marginLeft: "3%" }} name="netbanking" value="netbanking"  onChange={post} /><br/>
                            <FormControlLabel  label="ChecquePayment" control={<Checkbox />}  style={{ marginLeft: "3%" }} name="checkpayment" value="checkpayment" onChange={post}/><br />
                            <FormControlLabel label="Cashapp/Zelleapp/Paypal" control={<Checkbox />}  style={{ marginLeft: "3%" }} name="cashapp/zelleapp/paypal" value="cashapp/zelleapp/paypal"  onChange={post}/><br />
                        </div>
                        
                    </div>
                   
                     <div >
                        <div>
                            <label><b>Total Time Period</b></label>
                        </div>
                        <div style={{display:'flex'}}>
                            <div >
                                <TextField
                                 value={time}   name="time" onChange={post}  className='flow' type={'date'}
                                  />
                                 
                            </div>
                            <div className='flip'>
                                    <TextField 
                                     type={'date'}
                                    value={date}   name="date" onChange={post}  className='flow' />
                            </div>
                        </div>
                    </div>
                    <div >
                        <div>
                            <label><b>Work Timings</b></label>
                        </div>
                        <TextField value={work}   name="work" onChange={post} className="fieldsize"/>
                    </div>
                    <div >
                        <div>
                            <label><b>Job Location</b></label>
                        </div>
                        <div style={{display:'flex'}}>
                            <div >
                                <TextField
                                 value={state}   name="state" onChange={post}  className='flow'
                                  placeholder='State'/>
                                 
                            </div>
                            <div className='flip'>
                                    <TextField 
                                      placeholder='city'
                                    value={city}   name="city" onChange={post}  className='flow' />
                            </div>
                            <div className='flip'>
                               <TextField
                                 id="outlined-password-input"
                                 placeholder='Zip code'
                                value={code}   name="code" onChange={post}  className='flow'
                                 type={'number'} />
                            </div>
                        </div>
                    </div>
                    <div className='fieldsize'>
                        <div>
                            <label><b>Contact Details</b></label><br/>
                        </div>
                        <div>
                        <textarea     value={contact}  name="contact" className='size' onChange={post} />
                        </div>
                    </div>
                    <div>
                        <input type={'checkbox'}  /> I accept TERMS & CONDITIONS

                    </div>
                    <div className='button'>
                        <Button variant="contained" type={'submit'}  >Post Job</Button>
                    </div>
            
                     </form>

      </Box>
    </Grid>   
        
            </div>
    );
  }
  
  export default Jobpost;
  

  