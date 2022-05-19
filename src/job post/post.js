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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Post(props) {
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
     bang:'false',
     saw:'',
     see:'',
     seen:'',
     mass:'',
     so:''
    })

    
    const[love,setlove]=useState('');
    // const Post=e=>{
    //     const hike=e.target.value;
    //     setlove(hike);
    // }
    const checkboxref =useRef('');
    const{one,two,three,four,five,six,seven,eight,nine,ten,bang,saw,see,seen,so}=data;
    const[checkbox,setcheckbox]=useState(false);
    const Post=e=>{
        setcheckbox(checkboxref.current.checked);
        setdata({...data,[e.target.name]:e.target.value});
        const hike=e.target.value;
        setlove(hike);
    };
    
    const Hello=e=>{
        e.preventDefault();
       props.onflow(one,two,three,four,five,six,seven,eight,nine,ten,bang,saw,see,seen,so);
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
            saw:'',
            see:'',
            seen:'',
            mass:'',
            so:''
        })
    }

   
    return (
      <div >
        
            <Grid container>
      
      <Box
        sx={{
          boxShadow: 6,
          width: '45rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          marginLeft:'17rem',
          marginTop:'5rem'
        }}
      >
         <form onSubmit={Hello} className="side">  
               
                <div className="sall">
                <TextField
                           
                            name='one'
                            value={one}
                            placeholder='Enter Name/Organization'
                            type={'text'}
                            onChange={Post}
                             
                        />
                </div><br/>
                <div>
                    <div >
                        <label><b>JOB Title</b></label>
                        {/* {love === 70 && 
                   (
                       <div >
                         <TextField placeholder='Enter job category ' value="sel" />
                        </div>
                       
                   )
                   } */}
                    <Select  labelId="demo-simple-select-label" id="demo-simple-select"
                           value={two}   name="two" onChange={Post}   
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
                  
                    <div >
                        <div>
                            <label><b>Job Description</b></label>
                        </div>
                        <textarea  value={three}   name="three" onChange={Post} required /> 
                    </div>                   
                    <div>
                        <label ><b>Payment</b></label>
                        <div>
                            <FormControlLabel control={<Checkbox  />} label="Cash Payment" style={{ marginLeft: "3%" }} name="saw" value={saw}  onChange={Post} /> <br />
                            <FormControlLabel control={<Checkbox />} label="Net Banking" style={{ marginLeft: "3%" }} name="see" value={see}  onChange={Post} /> <br />
                            <FormControlLabel control={<Checkbox />} label="Cheque Payment" style={{ marginLeft: "3%" }} name="seen" value={seen}  onChange={Post}/> <br />
                            <FormControlLabel control={<Checkbox />} label="Cash App / Zelle / PayPal" style={{ marginLeft: "3%" }} name="so" value={so}  onChange={Post}/> <br />
                        </div>
                    </div>
                    <div className='signin'>
                    <label><b>Time Period</b></label>
                      <div>
                      <TextField
                          
                            value={four}   name="four" onChange={Post} 
                           placeholder='State'
                           type={'date'}
                        />
                         <TextField
                            
                            value={five}   name="five" onChange={Post} 
                           placeholder='State'
                           type={'date'}
                        />
                     
                      </div>
                    </div>
                    <div >
                        <div>
                            <label><b>Work Timings</b></label>
                        </div>
                        <TextField
                           
                            value={six}   name="six" onChange={Post} 
                            />
                    </div>
                    <div >
                        <div>
                            <label><b>Job Location</b></label>
                        </div>
                        <div style={{display:'flex'}}>
                            <div>
                                <TextField
                                 value={seven}   name="seven" onChange={Post} 
                                  placeholder='State'/>
                            </div>
                            <div>
                                    <TextField 
                                      placeholder='city'
                                    value={eight}   name="eight" onChange={Post} />
                            </div>
                            <div>
                               <TextField
                                 id="outlined-password-input"
                                 placeholder='Zip code'
                                value={nine}   name="nine" onChange={Post} 
                                 type={'number'} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label><b>Contact Details</b></label>
                        </div>
                        <textarea     value={ten}   name="ten" onChange={Post} />
                    </div>
                    <div>
                        <input type={'checkbox'} value={bang} name="bang"  onChange={Post} ref={checkboxref} /> I accept TERMS & CONDITIONS

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
  

  