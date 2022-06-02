import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Png from './images/pic.png';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { configure } from '@testing-library/react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function Register() {
    const name= "^[A-Za-z]+$";
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;
    const ready="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7})";
    const[display,setdisplay]=useState({
        user:'',
        number:'',
        email:'',
        create:'',
        conf:'',
        ssn:'',
        address:'',
        state:'',
        code:''
    })
    const{user,number,email,create,conf,ssn,address,state,code}=display;
    const validation= (e:any)=>{
        setdisplay({...display,[e.target.name]:e.target.value});
    }
    const details=(e:any)=>{
        e.preventDefault();
      
        setdisplay({
        user:'',
        number:'',
        email:'',
        create:'',
        conf:'',
        ssn:'',
        address:'',
        state:'',
        code:''
        })
        alert('successfully submitted')
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                   
                    <Grid item xs={0.0001}  md={5} style={{marginTop:'15rem'}}>
                       <p className='float'><b>Welcome back to <span className='paint'>Teen</span> Jobs!!</b></p>
                       <img src={Png} className="height"/>
                    </Grid>
                    <Grid item xs={12} md={7}>
                    <Grid container>
      
          <Box className='well'>
             <form  className="fieldsize" onSubmit={details}>  
                 <div className="direction">
                     <ButtonGroup >
                         <Button  sx={{ border:'none', backgroundColor:'#F5F5F5',width:'10rem'}} >Log In</Button>
                         <Button  sx={{ width:'10rem'}}  variant="contained">Register</Button>
                     </ButtonGroup>
                 </div>
                 <div className="down">
                   <TextField  type={'text'} className="fieldsize" placeholder='Enter  Name' name="user" value={user} onChange={validation} required/>
                   {( !user.match(name) || (user.length<6 || user.length>15)) && user.length!=0 ?<p style={{color:'red'}}>Enter characters only and character conatins min 6 , max 15 </p>:null}
                  
                 </div>
                 <div className="down">
                   <TextField type={'number'} className="fieldsize" placeholder='Enter Phone Number' name="number" value={number} onChange={validation} required/>
                   {number.length>=11  ?<p style={{color:'red'}}>Number should be 10 digits only</p>:null}
                 </div>
                 <div className="down">
                   <TextField type={'email'} className="fieldsize" placeholder='Enter Email' name="email" value={email} onChange={validation} required/> 
                   {(!email.match(mail)) && email.length!=0?<p style={{color:'red'}}>Please enter valid Email</p>:null}
                 </div>                 
                 <div className="down">
                    <TextField  type={'password'} className="fieldsize" placeholder="Create Passsword"  name="create" value={create} onChange={validation} required/>
                    {(!create.match(ready)) && create.length!=0 ?<p style={{color:'red'}}>password requires min 7 charatcers and one special character,one upper case, one lower case,one number</p>:null}
                 </div>
                 <div className="down">
                   <TextField   type={'password'} className="fieldsize" placeholder="Confirm Passsword" name="conf" value={conf} onChange={validation} required/>
                   {create != conf?<p style={{color:'red'}}>Password is not matched</p>:null}
                 </div>
                 <div className="down">
                    <TextField type={'number'} className="fieldsize" placeholder='Enter SSN Number' name="ssn" value={ssn} onChange={validation} required/>
                 </div>
                 <div className="down">
                 <TextareaAutosize aria-label="minimum height" className="textarea" minRows={3} placeholder="Enter Address" name="address" value={address} onChange={validation} required/>
                 </div>
                 <div className="down">
                    <TextField  type={'text'} className="fieldsize" placeholder="Enter City & State" name="state" value={state} onChange={validation} required/>
                 </div>
                 <div className="down">
                    <TextField  type={'number'} className="fieldsize" placeholder="Enter Zipcode" name="code" value={code} onChange={validation} required/>  
                 </div>
                 <div>
                    <Checkbox {...label} required/>By clicking, I accept TERMS & CONDITIONS 
                 </div><br/>
                 <div >
                    <Button variant="contained" type={'submit'} sx={{marginLeft:'20rem',height:'3rem'}} >Register</Button>
                 </div>
                
                     </form>
                     <p className='left'>Already a user?  Sign In  </p>

      </Box>
    </Grid>   
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}
export default Register;
