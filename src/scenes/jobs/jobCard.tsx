
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './job.css';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

export const JobCard = () => {
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



   return <div>
      {
         details.map(detailedData => {
            return (
               <div
                  key={detailedData.id}
               >
                  <Box
                     className="jobCardContainer"
                  >
                     <div
                        className='jobCardRow jobCardTextTitleFont'
                     >
                        <div
                           className='jobCardDataTitle'
                        >
                           Name/Organization
                        </div>:
                        <div
                           className='jobCardDataBody'
                        >
                           {detailedData.OrgName}
                        </div> <br />
                     </div>
                     <div
                        className='jobCardRow jobCardTextTitleFont'
                     >
                        <div
                           className='jobCardDataTitle'
                        >
                           JobTitle
                        </div>:
                        <div
                           className='jobCardDataBody'
                        >
                           {detailedData.id}
                        </div>
                     </div>
                     <div
                        className='jobCardRow jobCardTextTitleFont'
                     >
                        <div
                           className='jobCardDataTitle'
                        >
                           JobDescription
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
                           TimePeriod
                        </div> :
                        <div
                           className='jobCardDataBody'
                        >
                           From:
                           {detailedData.timestart}
                           To:
                           {detailedData.timeend}
                        </div>
                     </div>
                     <div
                        className='jobCardRow jobCardTextTitleFont'
                     >
                        <div
                           className='jobCardDataTitle'
                        >
                           WorkingTime
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
                           JobLocation
                        </div> :
                        <div
                           className='jobCardDataBody'
                        >
                           <span>{detailedData.state}</span>
                           <span>{detailedData.city}</span>
                           <span>{detailedData.zipcode}</span>
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
                        className='jobCardButton'
                     >
                        <Stack  >
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
}