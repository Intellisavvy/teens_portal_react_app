import { Box } from '@mui/system'
import Data from './jobs.json'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './job.css';

export const JobCard = () => {
   return <div>
      {
         Data.map(hy => {
            return (
               <div key={hy.id}>
                  <Box className="jobCardContainer">
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>Name/Organization</div>:<div className='jobCardDataBody'> {hy.OrgName}</div> <br />
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>JobTitle</div>:<div className='jobCardDataBody'>{hy.jobtitle}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>JobDescription</div>:<div className='jobCardDataBody'> {hy.jobdescription}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'> Payment</div>:<div className='jobCardDataBody'> {hy.payment}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>TimePeriod </div> : <div className='jobCardDataBody'>From:{hy.fromdate}  To:{hy.todate}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>WorkingTime </div>:<div className='jobCardDataBody'> {hy.workingtime}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>JobLocation </div> :<div className='jobCardDataBody'>{hy.joblocation}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>Contact Details </div >: <div className='jobCardDataBody'>{hy.contactdetails}</div>
                     </div>
                     <div className='button'>
                        <Stack  >
                           <Button variant="contained" >Apply</Button>
                        </Stack>
                     </div>
                  </Box>
               </div>
            )
         })}
   </div>
}