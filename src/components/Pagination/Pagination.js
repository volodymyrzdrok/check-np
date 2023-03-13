import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

export default function BasicPagination({
  count = 10,
  page,
  changePagination,
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
      <Stack spacing={2}>
        <Pagination count={count} page={page} onChange={changePagination} />
      </Stack>
    </Box>
  );
}
