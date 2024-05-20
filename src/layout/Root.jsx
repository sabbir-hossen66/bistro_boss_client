import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Root = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      {noHeaderFooter || <Header></Header>}
      <div className='container mx-auto'>

        <Outlet></Outlet>
      </div>
      {
        noHeaderFooter || <Footer></Footer>
      }
    </div>
  );
};

export default Root;