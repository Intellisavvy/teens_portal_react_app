import './App.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Table } from '@mui/material';
import axios from 'axios';


export const JobSearch = () => {

   const [details, setDetails] = useState<any[]>([]);

   const getuser = async () => {
      await axios.get('http://localhost:4000/jobs')
         .then(response => {
            return setDetails(response.data);

         })
   };

   React.useEffect(() => {
      getuser();
   }, []);




   const [name, setname] = useState({
      search: ''
   });
   const { search } = name;
   const searching = (e: any) => {
      setname({ ...name, [e.target.name]: e.target.value })
   }
   return (
      <div>
         <div >
            <TextField
               value={search}
               name="search"
               placeholder='Search Jobs here by state'
               onChange={searching}
               InputProps={{
                  endAdornment: (
                     <IconButton>
                        <SearchIcon />
                     </IconButton>
                  )
               }} />
         </div>
         {
            details.filter(detailedData => detailedData.state.toLowerCase().includes(search.toLowerCase())).map(detailedData => {
               return (
                  <div key={detailedData.id}>
                     <Box
                        className="jobCardContainer"
                     >
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Name / Organization
                           </div>:
                           <div
                              className='jobCardDataBody'
                           >
                              {detailedData.OrgName}
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Job Title
                           </div>:
                           <div
                              className='jobCardDataBody'
                           >
                              {detailedData.jobtitle}
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Job Description
                           </div>:
                           <div
                              className='jobCardDataBody'
                           >
                              {detailedData.jobdescription}
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Payment
                           </div>:
                           <div
                              className='jobCardDataBody'
                           >
                              {detailedData.payment}
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Time Period
                           </div> :
                           <div
                              className='jobCardDataBody'
                           >
                              <Table>
                                 <tr>
                                    <td>From</td>
                                    <td>:</td>
                                    <td>{detailedData.timestart}</td>
                                 </tr>
                                 <tr>
                                    <td>To</td>
                                    <td>:</td>
                                    <td>{detailedData.timeend}</td>
                                 </tr>
                              </Table>
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Working Time
                           </div>:
                           <div
                              className='jobCardDataBody'
                           >
                              {detailedData.timmings}
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Job Location
                           </div> :
                           <div
                              className='jobCardDataBody'
                           >
                              <span>{detailedData.state}</span>,&nbsp;
                              <span>{detailedData.city}</span>,&nbsp;
                              <span>{detailedData.zipcode}</span>&nbsp;
                           </div>
                        </div>
                        <div
                           className='jobCardRow jobCardTextTitleFont'
                        >
                           <div
                              className='jobCardDataTitle'
                           >
                              Contact Details
                           </div >:
                           <div
                              className='jobCardDataBody'
                           >
                              {detailedData.contactdetails}
                           </div>
                        </div>
                        <div
                           className='button'
                        >
                           <Stack>
                              <Button
                                 variant="contained"
                              >
                                 Apply
                              </Button>
                           </Stack>
                        </div>
                     </Box>
                  </div>
               )
            })}
      </div>
   );
}