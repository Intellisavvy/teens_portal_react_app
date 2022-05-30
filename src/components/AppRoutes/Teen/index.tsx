import { Routes, Route } from 'react-router-dom';
import Logout from '../../Body/Logout';
import { JobsApplied } from '../../Body/Teen/JobsApplied';
import { JobSearch } from '../../Body/Teen/JobSearch';


const Routing = () => {
return (         
    <Routes>
    <Route path='/jobsearch' element={<JobSearch />} />
    <Route path='/jobsapplied' element={<JobsApplied />} />
    <Route path='/logout' element={<Logout />} />
    
  </Routes>
);
}
export default Routing;