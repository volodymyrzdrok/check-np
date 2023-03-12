import { Box, CircularProgress } from '@mui/material';

const Loader = ({ colorLoader = 'error' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2,
      }}
    >
      <Box>
        <CircularProgress color={colorLoader} />
      </Box>
    </Box>
  );
};
export default Loader;
