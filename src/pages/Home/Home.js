import { Box } from '@mui/system';
import FormCheck from 'components/FormCheck/FormCheck';
import HistoryPackList from 'components/HistoryPackList/HistoryPackList';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import routes from 'utils/routes';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <FormCheck />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            // height: 350,
            border: '1px solid black',
            mr: 5,
          }}
        >
          {location.pathname === routes.home && <NotificationDoc />}

          <Outlet />
        </Box>
        <HistoryPackList />
      </Box>
    </>
  );
};

export default Home;
