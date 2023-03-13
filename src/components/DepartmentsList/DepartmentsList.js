import { useEffect, useState, useCallback } from 'react';
import { fetchDepartamentsList, per_page } from 'services/apiService';
import { Button, Box, TextField, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { nameCityShema } from 'utils/validations';
import { brackToMobile } from 'utils/constants';
import { useMediaQuery } from 'react-responsive';
import Loader from 'components/Loader/Loader';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';
import { Item } from './Item';
import BasicPagination from 'components/Pagination/Pagination';

const DepartmentsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [depList, setDepList] = useState([]);
  const toMobile = useMediaQuery({ query: brackToMobile });
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [cityNameValue, setCityNameValue] = useState('');

  const changePagination = (e, p) => {
    setPage(p);
  };

  const getDepartList = useCallback(
    async cityName => {
      setIsLoading(true);
      try {
        const resp = await fetchDepartamentsList(cityName, page);
        setDepList(resp.data);
        setCount(Math.ceil(resp.info.totalCount / per_page));
        if (resp.data.length === 0) {
          toast.error('Напишіть правильно назву вашого міста', settingAlert());
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
    [page]
  );

  useEffect(() => {
    if (cityNameValue) {
      getDepartList(cityNameValue, page);
    }
  }, [page, cityNameValue, getDepartList]);

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: nameCityShema,
    onSubmit: ({ city }) => {
      setCityNameValue(city.trim());
      setPage(1);
      getDepartList(city, 1);
    },
  });

  const { errors, touched } = formik;
  return (
    <>
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{
          mt: 3,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
        }}
        autoComplete="off"
      >
        <TextField
          sx={{ mr: toMobile ? 1 : 3, px: toMobile && 0 }}
          required
          type="text"
          name="city"
          label={errors.city && touched.city ? errors.city : null}
          variant="outlined"
          color="grey"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          variant="outlined"
          size="large"
          color="error"
          sx={{ px: 2, color: '#222' }}
        >
          search
        </Button>
      </Box>

      {isLoading ? (
        <Loader />
      ) : depList.length > 0 ? (
        <>
          <Box sx={{ width: '100%' }} component="ul">
            <Stack spacing={1}>
              {depList.map(({ SiteKey, Description }) => (
                <Item key={SiteKey} component="li">
                  {Description}
                </Item>
              ))}
            </Stack>
          </Box>
          <BasicPagination
            count={count}
            page={page}
            changePagination={changePagination}
          />
        </>
      ) : (
        <NotificationDoc
          title={'Напишіть назву міста українською, щоб знайти відділення'}
        />
      )}

      <ToastContainer />
    </>
  );
};

export default DepartmentsList;
