import { Routes, Route } from 'react-router-dom';
import MainNavbar from './Main/MainNavbar';
import ParentNavbar from './Parent/ParentNavbar';
import TeenNavbar from './Teen/TeenNavbar';
import VendorNavbar from './Vendor/VendorNavbar';


const TotalRouting = () => {
return (         
    <Routes>
    <Route path='/' element={<MainNavbar />} />
    <Route path='/teen' element={<TeenNavbar />} />
    <Route path='/parent' element={<ParentNavbar />} />
    <Route path='/vendor' element={<VendorNavbar />} />
    
  </Routes>
);
}
export default TotalRouting;