import { Box } from '@mui/system'
import Data from './jobs.json'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './job.css';

export const JobCard = () => {
   return <div>
      {/* this is job card */}
      {
         Data.map(hy => {
            return (
               <div key={hy.id}>
                  <Box className="well">

                     <div >
                        <td className='size'>  Name/Organization:</td> <td className='name'> {hy.OrgName}</td>
                     </div>
                     <div>
                        <td className='size'>JobTitle:</td><td className='title'>{hy.jobtitle}</td>
                     </div>
                     <div>
                        <td className='size'>JobDescription:</td> <td className='jd'> {hy.jobdescription}</td>
                     </div>
                     <div >
                        <td className='size'> Payment:</td>  <td className='payment'> {hy.payment}</td>
                     </div>
                     <div>
                        <td className='size'>TimePeriod: </td>  <td className='date'>From:{hy.fromdate}  To:{hy.todate}</td>
                     </div>
                     <div>
                        <td className='size'>WorkingTime: </td><td className='time'> {hy.workingtime}</td>
                     </div>
                     <div>
                        <td className='size'>JobLocation: </td> <td className='location'>{hy.joblocation}</td>
                     </div>
                     <div>
                        <td className='size'>ContactDetails: </td > <td className='contact'>{hy.contactdetails}</td>
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