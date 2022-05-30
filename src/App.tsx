import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './components/AppRoutes';
import Routing from './components/AppRoutes/Main';
// import { AppRoutes } from './components/AppRoutes';
import Footer from './components/Footer';
import MainIndex from './components/Navbar/MainIndex';
import ParentIndex from './components/Navbar/ParentIndex';
import TeenIndex from './components/Navbar/TeenIndex';
import VendorIndex from './components/Navbar/VendorIndex';

function App() {
  return (
    <div className="App">
      <MainIndex />
      <ParentIndex />
      <TeenIndex />
      <VendorIndex />
      {/* <Routes> */}
        {/* <AppRoutes /> */}
      {/* </Routes> */}

      <Footer />

    </div>
  );
}

export default App;
