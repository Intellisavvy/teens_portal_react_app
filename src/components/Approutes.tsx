
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
// import Applied from "./Vendor/Appliedposts";
import Applied from "./Vendor/AppliedPosts";
import Jobpost from "./Vendor/jobpost";


const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to='/' className="nav">Jobpost page</Link>
        <Link to='appliedposts' className="nav">Applied Jobs page</Link>
        <Routes>
          <Route path='/' element={<Jobpost />} />
          <Route path='appliedposts' element={<Applied />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default AppRoutes;   
