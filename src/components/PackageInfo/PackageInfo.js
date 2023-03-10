import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPackageDetails } from 'services/apiService';

const PackageInfo = () => {
  const [packInfo, setPackInfo] = useState(null);

  const { ttn } = useParams();

  const getPackageDetails = async ttn => {
    try {
      const resp = await fetchPackageDetails(ttn);
      if (!resp.success) {
        console.log('Document number is not correct!');
        return;
      }

      console.log('package :', resp.data);
    } catch (error) {}
  };

  useEffect(() => {
    getPackageDetails(ttn);
  }, []);

  console.log('params :', ttn);
  return (
    <div>
      <p>ergerger</p>
      <b>
        <p>Відправлено: </p>
      </b>
      <p>ergergewtwetweter</p>
      <b>
        <p>Oтримано: </p>
      </b>
      <p>ergergewtw 324324 2342 34etweter</p>
    </div>
  );
};

export default PackageInfo;
