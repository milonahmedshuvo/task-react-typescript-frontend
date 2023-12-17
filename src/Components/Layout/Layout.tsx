import React from 'react'
import Navber from '../../Sheared/Navber/Navber';
import { Outlet } from 'react-router-dom';

const Layout:React.FC = () => {

  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>  
    </div>
  )
}

export default Layout;
