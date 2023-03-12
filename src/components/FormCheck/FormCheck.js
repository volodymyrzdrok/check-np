import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToHistory, selectHistoryPackList } from 'redux/appSlice';
import { ttnCheckShema } from 'utils/validations';
import { useMediaQuery } from 'react-responsive';
import { Button, Box, TextField } from '@mui/material';
import { brackToMobile } from 'utils/constants';

const FormCheck = () => {
  const toMobile = useMediaQuery({ query: brackToMobile });
  const navigate = useNavigate();
  const { ttn } = useParams();
  const dispatch = useDispatch();
  const [defaultValue, setDefaultValue] = useState(ttn ?? '');
  const historyList = useSelector(selectHistoryPackList);

  useEffect(() => {
    setDefaultValue(ttn);
  }, [ttn]);

  const formik = useFormik({
    initialValues: {
      number: '',
    },
    validationSchema: ttnCheckShema,
    onSubmit: ({ number }) => {
      if (!historyList.includes(defaultValue)) {
        dispatch(addToHistory(defaultValue));
      }
      navigate(`/${defaultValue}`);
    },
  });

  const { errors, touched } = formik;
  return (
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
        type="number"
        name="number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        label={errors.number && touched.number ? errors.number : null}
        variant="outlined"
        color="grey"
        onChange={e => {
          setDefaultValue(e.target.value);
          formik.setFieldValue('number', e.target.value);
        }}
        value={defaultValue ?? ''}
      />
      <Button
        type="submit"
        variant="outlined"
        size="large"
        color="error"
        sx={{ px: 0.5 }}
      >
        {toMobile ? 'Get TTN' : ' Get status TTN'}
      </Button>
    </Box>
  );
};
export default FormCheck;
