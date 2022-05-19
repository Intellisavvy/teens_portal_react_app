import './App.css';
import Footer from './Components/Footer';
import MainNavbar from './Components/Navbar/NavbarMain';
import ParentNavbar from './Components/Navbar/NavbarParent';
import TeenNavbar from './Components/Navbar/NavbarTeen';
import VendorNavbar from './Components/Navbar/NavbarVendor';
import BasicGrid from './testing/page';

function App() {
  return (
    <div>
      {/* Navbar */}
      {/* <MainNavbar /> */}
      {/* <VendorNavbar /> */}
      {/* <ParentNavbar /> */}
      {/* <TeenNavbar /> */}


      {/* Footer */}
      <Footer style={{bottom:"0", position:"fixed", color:"green"}}/>

      {/* Testing */}
      {/* <BasicGrid /> */}

    </div>
  );

}

export default App;