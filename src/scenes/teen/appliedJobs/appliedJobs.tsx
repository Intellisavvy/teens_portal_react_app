
import { Box } from '@mui/system'
import Data from './appliedJobs.json'
import Button from '@mui/material/Button';
import './../jobCard.css';
import { Stack } from '@mui/material';

export const AppliedJobs = () => {
   return <div>
      {
         Data.map(jobApplication => {
            return (
               <div key={jobApplication.id}>
                  <Box className="jobCardContainer">
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>Name of the Organization</div>:<div className='jobCardDataBody'> {jobApplication.OrgName}</div> <br />
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>JobTitle</div>:<div className='jobCardDataBody'>{jobApplication.jobTitle}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>JobDescription</div>:<div className='jobCardDataBody'> {jobApplication.jobDescription}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'> Payment</div>:<div className='jobCardDataBody'> {jobApplication.payment}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>TimePeriod </div>:<div className='jobCardDataBody'>
                           From:{jobApplication.fromDate} &nbsp; &nbsp; To:{jobApplication.toDate}
                        </div>

                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>WorkingTime </div>:<div className='jobCardDataBody'> {jobApplication.workingTime}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>JobLocation </div>:<div className='jobCardDataBody'>{jobApplication.jobLocation}</div>
                     </div>
                     <div className='jobCardRow jobCardTextTitleFont' >
                        <div className='jobCardDataTitle'>Contact Details </div >:<div className='jobCardDataBody'>{jobApplication.contactDetails}</div>
                     </div>
                     <Stack spacing={5} direction={'row'} sx={{ mx: '5rem', my: '1rem'}}>
                        <Button variant="contained" >Cancel Application</Button>
                        <Button variant="contained" >Accept // Reject by Parent</Button>
                        <Button variant="contained" >Accept // Reject by Vendor</Button>
                     </Stack>

                  </Box>
               </div>
            )
         })}
   </div>
}