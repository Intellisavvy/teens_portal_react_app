import React from 'react';
import Routing from '../AppRoutes/Main';
import MainNavbar from '../AppRoutes/Main/MainNavbar';

function MainIndex() {
  return (
    <div className="App">
      <MainNavbar />
      <Routing />

    </div>
  );
}

export default MainIndex;
