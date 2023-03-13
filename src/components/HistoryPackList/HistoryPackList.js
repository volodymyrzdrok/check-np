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
import { brackFromTablet } from 'utils/constants';
import { useMediaQuery } from 'react-responsive';

const HistoryPackList = () => {
  const fromTablet = useMediaQuery({ query: brackFromTablet });
  const itemsArray = useSelector(selectHistoryPackList);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{ border: '1px solid black', maxWidth: fromTablet ? 260 : '100vw' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: !fromTablet && 'space-between',
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
        ></Button>
        {itemsArray.length > 0 && <DeleteIcon color="error" />}
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
