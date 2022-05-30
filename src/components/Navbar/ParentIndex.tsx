import React from 'react';
import Routing from '../AppRoutes/Parent';
import ParentNavbar from '../AppRoutes/Parent/ParentNavbar';

function ParentIndex() {
  return (
    <div className="App">
      <ParentNavbar />
      <Routing />

    </div>
  );
}

export default ParentIndex;
