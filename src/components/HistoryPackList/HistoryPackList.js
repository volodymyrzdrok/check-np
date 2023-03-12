import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeHistory, selectHistoryPackList } from 'redux/appSlice';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  ListItemText,
  ListItemButton,
  ListItem,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { FixedSizeList } from 'react-window';

function ItemRenderer({ data, index }) {
  const item = data[index];

  return (
    <ListItem
      key={index}
      component={NavLink}
      to={`/${item}`}
      sx={{ color: 'grey' }}
      disablePadding
    >
      <ListItemButton color="primary">
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
}

const HistoryPackList = () => {
  const itemsArray = useSelector(selectHistoryPackList);
  const dispatch = useDispatch();

  return (
    <Box sx={{ border: '1px solid black', maxWidth: 260 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography
          component="h2"
          varian="h2"
          sx={{ fontWeight: '600', mr: 5 }}
        >
          Історія
        </Typography>
        <Button
          onClick={() => {
            dispatch(removeHistory());
          }}
        >
          <DeleteIcon color="error" />
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <FixedSizeList
          height={300}
          itemSize={46}
          itemCount={itemsArray.length}
          itemData={itemsArray}
        >
          {ItemRenderer}
        </FixedSizeList>
      </Box>
    </Box>
  );
};

export default HistoryPackList;
