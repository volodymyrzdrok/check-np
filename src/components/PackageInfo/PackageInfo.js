import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToHistory } from 'redux/appSlice';
import { fetchPackageDetails } from 'services/apiService';

const PackageInfo = () => {
  const [packInfo, setPackInfo] = useState(null);
  const { ttn } = useParams();
  const dispatch = useDispatch();

  const getPackageDetails = async ttn => {
    try {
      const resp = await fetchPackageDetails(ttn);
      if (!resp.success) {
        console.log('Document number is not correct!');
        return;
      }
      if (resp.data[0].StatusCode === '3') {
        // dispatch(addToHistory(ttn));
        console.log('Documents number not found!');
        return;
      }

      console.log(' everything is ok');
      setPackInfo(resp.data[0]);
      // dispatch(addToHistory(ttn));
    } catch (error) {}
  };

  useEffect(() => {
    setPackInfo(null);
    getPackageDetails(ttn);
  }, [ttn]);

  return (
    <>
      {packInfo && (
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
      )}
    </>
  );
};

export default PackageInfo;
