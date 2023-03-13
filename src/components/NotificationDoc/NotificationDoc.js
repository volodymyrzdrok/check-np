import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const NotificationDoc = ({ title = ' Внесіть коректний номер ТТН' }) => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: '20px', color: 'grey' }}>{title}</Typography>
    </Box>
  );
};

export default NotificationDoc;
