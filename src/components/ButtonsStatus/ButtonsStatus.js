import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
import { useMediaQuery } from 'react-responsive';
import { Box, Button } from '@mui/material';
import { brackToMobile } from 'utils/constants';

const ButtonsStatus = () => {
  const toMobile = useMediaQuery({ query: brackToMobile });
  return (
    <Box sx={{ my: 2 }}>
      <NavLink to={routes.home}>
        <Button
          variant="contained"
          color="error"
          sx={{ mr: toMobile ? 1 : 3, px: toMobile ? 0.3 : 3 }}
        >
          Перевірка ТТН
        </Button>
      </NavLink>

      <NavLink to={routes.departList}>
        <Button
          variant="contained"
          color="error"
          sx={{ px: toMobile ? 0.3 : 3 }}
        >
          Список відділень
        </Button>
      </NavLink>
    </Box>
  );
};

export default ButtonsStatus;
