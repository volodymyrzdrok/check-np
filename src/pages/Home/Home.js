import { Box } from '@mui/system';
import FormCheck from 'components/FormCheck/FormCheck';
import HistoryPackList from 'components/HistoryPackList/HistoryPackList';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import routes from 'utils/routes';
import { useMediaQuery } from 'react-responsive';
import { brackFromTablet } from 'utils/constants';
import Loader from 'components/Loader/Loader';
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
            mr: fromTablet && 5,
          }}
        >
          {location.pathname === routes.home && <NotificationDoc />}

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
        <HistoryPackList />
      </Box>
    </>
  );
};

export default Home;
