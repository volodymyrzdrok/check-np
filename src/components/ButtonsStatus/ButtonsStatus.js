import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
// import Button from '@mui/material/Button';
import { Box, Button } from '@mui/material';

const ButtonsStatus = () => {
  return (
    <Box sx={{ my: 2 }}>
      <NavLink to={routes.home}>
        <Button variant="contained" color="error" sx={{ mr: 3 }}>
          Перевірка ТТН
        </Button>
      </NavLink>

      <NavLink to={routes.departList}>
        <Button variant="contained" color="error">
          Список відділень
        </Button>
      </NavLink>
    </Box>
  );
};

export default ButtonsStatus;
