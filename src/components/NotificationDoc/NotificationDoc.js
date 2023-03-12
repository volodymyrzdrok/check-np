import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const NotificationDoc = () => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: '20px', color: 'grey' }}>
        Внесіть коректний номер ТТН
      </Typography>
    </Box>
  );
};

export default NotificationDoc;
