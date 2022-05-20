import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Applied(){
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type={'search'} placeholder="search.." variant="outlined" />
      
    </Box>
        
        </Grid>
        <Grid item xs={8}>
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
        //   marginLeft:'17rem',
        //   marginTop:'5rem'
        }}
      >
        <p><b>Job Title</b></p>
        <p><b>Job Description</b></p>
        <p><b>Payment</b></p>
        <p><b>Time Period</b></p>
        <span><b>From:</b></span> <span><b>To:</b></span>
        <p><b>work Timings</b></p>
        <p><b>Job Location</b></p>
        <span><b>State</b></span>
        <span><b>City</b></span>
        <span>Zip code</span>
        <p><b>Contact Details</b></p>
        <p><b>Resume</b></p>
        <Button variant="contained" color="success">Accepted </Button>
        <Button className='side' variant="contained" color="error" >Rejected </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
        </div>
    )
}
export default Applied;

///////////////

