import axios from 'axios';
import { KEY_API, NP_URL } from '../utils/constants';
export const per_page = '12';

export async function fetchPackageDetails(ttn_number) {
  try {
    const response = await axios.post(NP_URL, {
      apiKey: KEY_API,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: ttn_number,
            Phone: '380600000000',
          },
        ],
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDepartamentsList(city_name, page = 1) {
  try {
    const resp = await axios.post(NP_URL, {
      apiKey: KEY_API,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city_name,

        Page: page,
        Limit: per_page,
        Language: 'UA',
      },
    });

    return resp.data;
  } catch (error) {
    console.error(error);
  }
}
