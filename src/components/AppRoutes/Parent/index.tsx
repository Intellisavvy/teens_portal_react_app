import { Routes, Route } from 'react-router-dom';
import Logout from '../../Body/Logout';
import ChildrenProfile from '../../Body/Parent/ChildrenProfile';


const Routing = () => {
return (         
    <Routes>
    <Route path='/childrenprofile' element={<ChildrenProfile />} />
    <Route path='/logout' element={<Logout />} />
    
  </Routes>
);
}
export default Routing;