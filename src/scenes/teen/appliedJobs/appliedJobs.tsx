// export const AppliedJobs = () => {
//     return <div>Applied job search</div>
// }


import { Box } from '@mui/system'
import Data from './../../jobs/jobs.json'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './../jobCard.css';

export const AppliedJobs = () => {
   return <div>
      {
         Data.map(hy => {
            return (
               <div key={hy.id}>
                  <Box className="jobCardContainer">
                     <div className='jobCardRow'>
                        <div className='jobCardDataTitel'>Name of the Organization:</div> <div className='name'> {hy.OrgName}</div> <br />
                     </div>
                     <div>
                        <div className='size'>JobTitle:</div><div className='title'>{hy.jobtitle}</div>
                     </div>
                     <div>
                        <div className='size'>JobDescription:</div> <div className='jd'> {hy.jobdescription}</div>
                     </div>
                     <div >
                        <div className='size'> Payment:</div>  <div className='payment'> {hy.payment}</div>
                     </div>
                     <div>
                        <div className='size'>TimePeriod: </div>  <div className='date'>From:{hy.fromdate}  To:{hy.todate}</div>
                     </div>
                     <div>
                        <div className='size'>WorkingTime: </div><div className='time'> {hy.workingtime}</div>
                     </div>
                     <div>
                        <div className='size'>JobLocation: </div> <div className='location'>{hy.joblocation}</div>
                     </div>
                     <div>
                        <div className='size'>Contacdivetails: </div > <div className='contact'>{hy.contactdetails}</div>
                     </div>
                     <div>
                        <Stack spacing={2} sx={{ marginLeft: '46rem', width: "9rem", marginBottom: '2rem' }}>
                           <Button variant="contained" >Apply</Button>
                        </Stack>
                     </div>

                  </Box>
               </div>
            )
         })}
   </div>
}