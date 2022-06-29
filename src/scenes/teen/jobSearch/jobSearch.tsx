import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Jobsearch from './joblist.json'
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

export const JobSearch = () => {
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
               placeholder='Search Jobs here'
               sx={{ marginLeft: "3rem", width: "35rem", marginTop: "3rem" }}
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
            Jobsearch.filter(hy => hy.jobtitle.toLowerCase().includes(search.toLowerCase())).map(hy => {
               return (
                  <div key={hy.id}>
                     <Box className="jobCardContainer">
                        <div className='jobCardRow jobCardTextTitleFont' >
                           <div className='jobCardDataTitle'>Name/Organization</div>:<div className='jobCardDataBody'> {hy.OrgName}</div>
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
                              <Button variant="contained">Apply</Button>
                           </Stack>
                        </div>
                     </Box>
                  </div>
               )
            })}
      </div>
   );
}