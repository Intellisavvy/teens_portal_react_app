import { Routes, Route } from 'react-router-dom';
import { About } from '../../Body/Main/About';
import { CreateAccount } from '../../Body/Main/CreateAccount';
import Signin from '../../Login';
import { Home } from '../../Body/Main/Home';
import { Login } from '../../images/Login';


const Routing = () => {
return (         
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Signin />} />
    <Route path='/createacc' element={<CreateAccount />} />
    
  </Routes>
);
}
export default Routing;