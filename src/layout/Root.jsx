import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <h3>kilo</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;