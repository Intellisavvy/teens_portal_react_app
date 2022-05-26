import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './components/AppRoutes';
import Footer from './components/Footer';
import MainNavbar from './components/Navbar/MainNavbar';
import ParentNavbar from './components/Navbar/ParentNavbar';
import TeenNavbar from './components/Navbar/TeenNavbar';
import VendorNavbar from './components/Navbar/VendorNavbar';

function App() {
  return (
    <div className="App">
      {/* <MainNavbar /> */}
      {/* <VendorNavbar /> */}
      {/* <TeenNavbar /> */}
      {/* <ParentNavbar /> */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
