import { Box, Typography } from '@mui/material';
import Loader from 'components/Loader/Loader';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPackageDetails } from 'services/apiService';
import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';

const PackageInfo = () => {
  const [packInfo, setPackInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { ttn } = useParams();

  const getPackageDetails = async ttn => {
    setIsLoading(true);
    try {
      const resp = await fetchPackageDetails(ttn);
      if (!resp.success) {
        toast.error('Document number is not correct!', settingAlert());
        return;
      }
      if (resp.data[0].StatusCode === '3') {
        toast.warning('Documents number not found!', settingAlert());
        return;
      }
      setPackInfo(resp.data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPackInfo(null);
    getPackageDetails(ttn);
  }, [ttn]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : packInfo ? (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontSize: 20, mb: 2 }}>
            <b>Статус:</b> {packInfo.Status}
          </Typography>
          <Typography sx={{ fontSize: 20, mb: 2 }}>
            <b>Запланований час доставки:</b> {packInfo.ScheduledDeliveryDate}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            <b>Відправлено:</b>
          </Typography>
          <Typography sx={{ fontSize: 20, mb: 2 }}>
            {packInfo.WarehouseSender}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            <b>Отримано:</b>
          </Typography>
          <Typography sx={{ fontSize: 20, mb: 2 }}>
            {packInfo.WarehouseRecipientAddress}
          </Typography>
        </Box>
      ) : (
        <NotificationDoc />
      )}
      <ToastContainer />
    </>
  );
};

export default PackageInfo;
