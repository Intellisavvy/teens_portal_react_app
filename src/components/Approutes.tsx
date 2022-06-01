
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Applied from "./Vendor/Appliedposts";
import Jobpost from "./Vendor/jobpost";
 const AppRoutes = () => {
    return (
        <div>
          <BrowserRouter>
       
       <Link to='/' className="nav">Jobpost page</Link>
       <Link to='applied' className="nav">Applied Jobs page</Link>
       <Routes>
         <Route path='/' element={<Jobpost />} />
         <Route path='applied' element={<Applied />} />
       </Routes>

     </BrowserRouter>
        </div>
    );
    }
    export default AppRoutes;   
