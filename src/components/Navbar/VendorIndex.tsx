import React from 'react';
import Routing from '../AppRoutes/Vendor';
import VendorNavbar from '../AppRoutes/Vendor/VendorNavbar';

function VendorIndex() {
  return (
    <div className="App">
      <VendorNavbar />
      <Routing />

    </div>
  );
}

export default VendorIndex;
