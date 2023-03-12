import { Container, Typography } from '@mui/material';
import ButtonsStatus from 'components/ButtonsStatus/ButtonsStatus';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxWidth="md" sx={{ border: '1px solid black' }}>
      <Typography component="h1" sx={{ fontWeight: '800', fontSize: '27px' }}>
        Перевірка статусу посилки
      </Typography>
      <ButtonsStatus />
      <Outlet />
    </Container>
  );
};

export default Layout;
