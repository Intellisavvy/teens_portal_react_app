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
import axios from 'axios';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 


function Post() {
   
    const[check,setcheck]=React.useState(false);
    const[data,setdata]=useState({
     one:'',
     two:'',
     three:'',
     four:'',
     five:'',
     six:'',
     seven:'',
     eight:'',
     nine:'',
     ten:'',
     bang:'',
     first:'',
     second:'',
     third:'',
     fourth:''
    })

    
    const[love,setlove]=useState('');
    // const Post=e=>{
    //     const hike=e.target.value;
    //     setlove(hike);
    // }
    const checkboxref =useRef('');
    const{one,two,three,four,five,six,seven,eight,nine,ten,bang,first,second,third,fourth}=data;
    const[checkbox,setcheckbox]=useState(false);
    const Post=e=>{
        setcheckbox(checkboxref.current.checked);
        setdata({...data,[e.target.name]:e.target.value});
        const hike=e.target.value;
        setlove(hike);
    };
    
    const Hello=e=>{
        e.preventDefault();
       axios.post('https://react-teen-job-default-rtdb.firebaseio.com/details.json',data).then(()=>alert('submitted'))
         
    //    props.onflow(one,two,three,four,five,six,seven,eight,nine,ten,bang,first,second,third,fourth);
        setdata({
            one:'',
            two:'',
            three:'',
            four:'',
            five:'',
            six:'',
            seven:'',
            eight:'',
            nine:'',
            ten:'',
            bang:'',
            sem:'',
           first:'',
           second:'',
           third:'',
           fourth:''
        })
    }

   
    return (
      <div >
        
            <Grid container>
      
      <Box className='well'>
         <form onSubmit={Hello} className="side">  
               
                <div className="sall">
                <TextField
                           
                            name='one'
                            value={one}
                            placeholder='Enter Name/Organization'
                            type={'text'}
                            onChange={Post}
                            className="size1"
                             
                        />
                </div>
                <div className='sall1'>
                    <div >
                        <label><b>JOB Title</b></label><br/>
                        {/* {love === 70 && 
                   (
                       <div >
                         <TextField placeholder='Enter job category ' value="sel" />
                        </div>
                       
                   )
                   } */}
                  
                   <div >
                    <Select  labelId="demo-simple-select-label" id="demo-simple-select"
                           value={two}   name="two" onChange={Post}  className='size1' >
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
                        <textarea  value={three}   name="three" onChange={Post} required className='size'/> 
                        </div>
                    </div>                   
                    <div>
                        <label ><b>Payment</b></label>
                        <div>
                            <FormControlLabel control={<Checkbox  />} label="Cash Payment" style={{ marginLeft: "3%" }} name="first" value="fisrt"  onChange={Post} /> <br />
                            <FormControlLabel control={<Checkbox />} label="Net Banking" style={{ marginLeft: "3%" }} name="second" value="second"  onChange={Post} /> <br />
                            <FormControlLabel control={<Checkbox />} label="Cheque Payment" style={{ marginLeft: "3%" }} name="third" value="third" onChange={Post}/> <br />
                            <FormControlLabel control={<Checkbox />} label="Cash App / Zelle / PayPal" style={{ marginLeft: "3%" }} name="fourth" value="fourth"  onChange={Post}/> <br />
                        </div>
                    </div>
                   
                     <div >
                        <div>
                            <label><b>Total Time Period</b></label>
                        </div>
                        <div style={{display:'flex'}}>
                            <div >
                                <TextField
                                 value={four}   name="four" onChange={Post}  className='flow' type={'date'}
                                  />
                                 
                            </div>
                            <div className='flip'>
                                    <TextField 
                                     type={'date'}
                                    value={five}   name="five" onChange={Post}  className='flow' />
                            </div>
                        </div>
                    </div>
                    <div >
                        <div>
                            <label><b>Work Timings</b></label>
                        </div>
                        <TextField value={six}   name="six" onChange={Post} className="size1"/>
                    </div>
                    <div >
                        <div>
                            <label><b>Job Location</b></label>
                        </div>
                        <div style={{display:'flex'}}>
                            <div >
                                <TextField
                                 value={seven}   name="seven" onChange={Post}  className='flow'
                                  placeholder='State'/>
                                 
                            </div>
                            <div className='flip'>
                                    <TextField 
                                      placeholder='city'
                                    value={eight}   name="eight" onChange={Post}  className='flow' />
                            </div>
                            <div className='flip'>
                               <TextField
                                 id="outlined-password-input"
                                 placeholder='Zip code'
                                value={nine}   name="nine" onChange={Post}  className='flow'
                                 type={'number'} />
                            </div>
                        </div>
                    </div>
                    <div className='size1'>
                        <div>
                            <label><b>Contact Details</b></label><br/>
                        </div>
                        <div>
                        <textarea     value={ten}   name="ten" className='size' onChange={Post} />
                        </div>
                    </div>
                    <div>
                        <input type={'checkbox'} value={bang} name="bang"   onChange={()=>setcheck(!check)}  /> I accept TERMS & CONDITIONS

                    </div>
                    <div className='button'>
                        <Button variant="contained" type={'submit'}  >Post Job</Button>
                    </div>
                </div>
                     </form>

      </Box>
    </Grid>   
        
            </div>
    );
  }
  
  export default Post;
  

  