import ButtonsStatus from 'components/ButtonsStatus/ButtonsStatus';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>app check nova post</h1>
      <ButtonsStatus />
      <Outlet />
    </div>
  );
};

export default Layout;
