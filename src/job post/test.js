import React from "react";
import Box from '@mui/material/Box';
import { display } from "@mui/system";



  function Hey(props) {
  
  return (
   
        <Box
        sx={{
          boxShadow: 6,
          width: '45rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          marginLeft:'17rem'
          
        }}>
         
         {props.fin.map((no)=>
         < tr key={no.id}> 
           <p><b>Name :</b>{no.name}</p>
           <p><b>title:</b>{no.title}</p>
           <p><b>Job Description:</b>{no.apple}</p>
           <p><b>Payment:</b>{no.pay}</p>
           <p><b>Time period</b></p>
           <p><b>From:</b>{no.from}</p>
           <p><b>To:</b>{no.to}</p>
           <p><b>Work timings:</b>{no.time}</p>
           <p><b>Job location</b>{no.location}</p>
           <p><b>State:</b>{no.state}</p>
           <p><b>City:</b>{no.city}</p>
           <p><b>Zipcode:</b>{no.code}</p>
           <p><b>Contact Details:</b>{no.details}</p>
           
         </tr>
         )}
         
        </Box>
   
  );
};

export default Hey;