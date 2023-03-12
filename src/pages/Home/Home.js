import { Box } from '@mui/system';
import FormCheck from 'components/FormCheck/FormCheck';
import HistoryPackList from 'components/HistoryPackList/HistoryPackList';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import routes from 'utils/routes';
import { useMediaQuery } from 'react-responsive';
import { brackFromTablet } from 'utils/constants';
const Home = () => {
  const location = useLocation();

  const fromTablet = useMediaQuery({ query: brackFromTablet });
  return (
    <>
      <FormCheck />
      <Box
        sx={{
          display: fromTablet && 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: fromTablet ? '100%' : 'inherit',
            mb: !fromTablet && 3,
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
