import { Routes, Route } from 'react-router-dom';
import Logout from '../../Body/Logout';
import { Applications } from '../../Body/Vendor/ApplicationsReceived';
import { JobPosting } from '../../Body/Vendor/JobPosting';


const Routing = () => {
return (         
    <Routes>
    <Route path='/jobposting' element={<JobPosting />} />
    <Route path='/applications' element={<Applications />} />
    <Route path='/logout' element={<Logout />} />
    
  </Routes>
);
}
export default Routing;