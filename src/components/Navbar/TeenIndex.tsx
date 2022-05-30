import React from 'react';
import Routing from '../AppRoutes/Teen';
import TeenNavbar from '../AppRoutes/Teen/TeenNavbar';

function TeenIndex() {
  return (
    <div className="App">
      <TeenNavbar />
      <Routing />

    </div>
  );
}

export default TeenIndex;
