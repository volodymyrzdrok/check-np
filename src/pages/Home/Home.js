import FormCheck from 'components/FormCheck/FormCheck';
import HistoryPackList from 'components/HistoryPackList/HistoryPackList';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <FormCheck />
      <br />
      <p>let's write our TTH</p>
      <br />
      <Outlet />
      <br />
      <HistoryPackList />
    </div>
  );
};

export default Home;
