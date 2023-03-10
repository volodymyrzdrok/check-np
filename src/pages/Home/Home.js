import FormCheck from 'components/FormCheck/FormCheck';
import HistoryPackList from 'components/HistoryPackList/HistoryPackList';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import routes from 'utils/routes';

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <FormCheck />
      <br />
      {location.pathname === routes.home && <p>let's write our TTN</p>}
      <br />
      <Outlet />
      <br />
      <HistoryPackList />
    </div>
  );
};

export default Home;
