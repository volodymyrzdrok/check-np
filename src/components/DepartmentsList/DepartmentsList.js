import { useState } from 'react';
import { fetchDepartamentsList } from 'services/apiService';
import { Button, Box, TextField, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { nameCityShema } from 'utils/validations';
import { brackToMobile } from 'utils/constants';
import { useMediaQuery } from 'react-responsive';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Loader from 'components/Loader/Loader';
import NotificationDoc from 'components/NotificationDoc/NotificationDoc';
import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const DepartmentsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [depList, setDepList] = useState([]);
  const toMobile = useMediaQuery({ query: brackToMobile });
  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: nameCityShema,
    onSubmit: async ({ city }) => {
      setIsLoading(true);
      try {
        const { data } = await fetchDepartamentsList(city);
        setDepList(data);
        if (data.length === 0) {
          toast.error('Напишіть правильно назву вашого міста', settingAlert());
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
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
        <Box sx={{ width: '100%' }} component="ul">
          <Stack spacing={2}>
            {depList.map(({ SiteKey, Description }) => (
              <Item key={SiteKey} component="li">
                {Description}
              </Item>
            ))}
          </Stack>
        </Box>
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
