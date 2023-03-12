import { Container, Typography } from '@mui/material';
import ButtonsStatus from 'components/ButtonsStatus/ButtonsStatus';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <Container maxWidth="md" sx={{ border: '1px solid black', pt: 3 }}>
      <Typography component="h1" sx={{ fontWeight: '800', fontSize: '27px' }}>
        Перевірка статусу посилки
      </Typography>
      <ButtonsStatus />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
