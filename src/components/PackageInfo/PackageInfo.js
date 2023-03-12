import Loader from 'components/Loader/Loader';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPackageDetails } from 'services/apiService';

const PackageInfo = () => {
  const [packInfo, setPackInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { ttn } = useParams();

  const getPackageDetails = async ttn => {
    setIsLoading(true);
    setPackInfo(null);
    try {
      const resp = await fetchPackageDetails(ttn);
      if (!resp.success) {
        console.log('Document number is not correct!');
        return;
      }
      if (resp.data[0].StatusCode === '3') {
        console.log('Documents number not found!');
        return;
      }

      console.log(' everything is ok');
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
        <div>
          <b>
            <p>Статус: </p>
          </b>
          <p>{packInfo.Status}</p>
          <b>
            <p>Відправлено: </p>
          </b>
          <p>{packInfo.WarehouseSender}</p>
          <b>
            <p>Oтримано: </p>
          </b>
          <p>{packInfo.WarehouseRecipientAddress}</p>
        </div>
      ) : (
        <NotificationDoc />
      )}
    </>
  );
};

export default PackageInfo;
