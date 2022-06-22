import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Png from './images/pic.png';
import { useState } from 'react';
import { useRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import './App.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { GoogleMap, StandaloneSearchBox, Marker } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { configure } from '@testing-library/react';
import { Link } from 'react-router-dom';
import ReactInputMask from 'react-input-mask';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


let markerArray = [];
const lib = ["places"];
const key = "AIzaSyB5deXbkVfO-Vv-CJNW4asdOEc8Bb_Bbe4";
export const CustomerRegistration = () => {
    const state = {
        currentLocation: { lat: 0, lng: 0 },
        markers: [],
        bounds: null
    };
    const [searchBox, setSearchBox ] = useState('');

    const onMapLoad = (map: object) => {
        navigator?.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat, longitude: lng } }) => {
                const pos = { lat, lng };
                setState({ currentLocation: pos });
            }
        );
        google.maps.event.addListener(map, "bounds_changed", () => {
            console.log(map);
           
        });
    };

    const onSBLoad = (ref: any) => {
        setSearchBox(ref)
    };

    const onPlacesChanged = () => {
        
    };


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
        states:'',
        code:''
    })
    const{user,number,email,create,conf,ssn,address,states,code}=display;
    const validation= (e:any)=>{
        debugger
        setdisplay({...display,[e.target.name]:e.target.value});
    }
    const details=(e:any)=>{
        e.preventDefault();
      if(user.length<6 || user.length>15){
          <p>Contains characters min 6 max15</p>
      }
      else if(!user.match(name)){
          <p>Enter only characters</p>
      }
      else if(user.length!=0){

      }

      
        setdisplay({
        user:'',
        number:'',
        email:'',
        create:'',
        conf:'',
        ssn:'',
        address:'',
        states:'',
        code:''
        })
        alert('successfully submitted')
    }
    return <div>
         <Box className='well'>
             <form  className="fieldsize" onSubmit={details}>  
                 <div className="direction">
                     <ButtonGroup >
                         <Button  sx={{ border:'none', backgroundColor:'#F5F5F5',width:'10rem',color:'black'}} > SignIN</Button>
                         <Button  sx={{ width:'10rem',color:'white'}}  variant="contained" > Register</Button>
                     </ButtonGroup>
                 </div>
                 <div className="down">
                   <TextField  type={'text'} className="fieldsize" placeholder='Enter  Name' name="user" value={user} onChange={validation}  required/>
                    { !user.match(name)&& user.length!=0 ?<p style={{color:'red'}}>Enter characters only</p>:null}
                    { (user.length<2)&& user.length!=0 ?<p style={{color:'red'}}>Enter characters min 2</p>:null}
                 </div>
                 <div >
                 <ReactInputMask
                                 mask='(999) 999-9999'
                                 type='text'
                                 autoComplete='none'
                                 placeholder="Enter Number"
                                 name='number'
                                 value={number}
                                 style={{ marginTop: '1rem', width: '23.5rem', height: '3rem', paddingLeft: '1rem', borderColor: 'transparents' }}
                                 className="effect"
                                 onChange={validation}
                                 {...(props: JSX.IntrinsicAttributes & TextFieldProps) => <TextField label='cc number' {...props} />}/> 
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
                 <ReactInputMask
                                mask='999 99 9999'
                                type={'text'}
                                placeholder="Enter SSN Number"
                                autoComplete='none'
                                name='ssn'
                                value={ssn}
                                style={{ width: '24.5rem', height: '3rem',borderColor: 'transparents' }}
                                onChange={validation}/
                            >
                 </div>
                 <div className="down">
                 <LoadScript googleMapsApiKey={key} libraries={["places"]} >
                 <StandaloneSearchBox
                        onLoad={onSBLoad}
                        onPlacesChanged={onPlacesChanged}
                    >
                        <TextField
                            type="text"
                            className='fieldsize'
                            placeholder="Enter Your Address" 
                            // value={address}
                            name="address"
                            onChange={validation}
                        />
                    </StandaloneSearchBox>
                  </LoadScript>
                 </div>
                
                 <div className="down">
                    <TextField  type={'number'} className="fieldsize" placeholder="Enter Zipcode" name="code" value={code} onChange={validation} required/> 
                    { (code.length>5)&& code.length!=0 ?<p style={{color:'red'}}>Enter correct  Zip code</p>:null} 
                 </div>
                 <div>
                    <Checkbox {...label} required/>By clicking, I accept TERMS & CONDITIONS 
                 </div><br/>
                 <div >
                    <Button variant="contained" type={'submit'} sx={{marginLeft:'20rem',height:'3rem'}} >Register</Button>
                 </div>
                
                     </form>
                     <p className='left'>Already a user?  SignIN </p>

      </Box>
       
        </div>
}
function setState(arg0: { currentLocation: { lat: number; lng: number; }; }) {
    throw new Error("Function not implemented.");
}

function render() {
    throw new Error("Function not implemented.");
}