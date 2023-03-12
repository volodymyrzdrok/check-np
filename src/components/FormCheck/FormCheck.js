import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToHistory, selectHistoryPackList } from 'redux/appSlice';
import { ttnCheckShema } from 'utils/validations';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Button, Box, TextField } from '@mui/material';

const FormCheck = () => {
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
      console.log('number :', number);
      if (!historyList.includes(defaultValue)) {
        dispatch(addToHistory(defaultValue));
      }
      navigate(`/${defaultValue}`);
    },
  });

  const { errors, touched } = formik;
  return (
    // <form action="" onSubmit={formik.handleSubmit}>
    //   <p style={{ color: 'red' }}>
    //     {errors.number && touched.number ? errors.number : null}
    //   </p>
    //   <input
    //     type="number"
    //     name="number"
    //     required
    //     onChange={e => {
    //       setDefaultValue(e.target.value);
    //       formik.setFieldValue('number', e.target.value);
    //     }}
    //     value={defaultValue ?? ''}
    //   />
    //   <button type="submit">Get status TTN</button>
    // </form>
    <Box
      onSubmit={formik.handleSubmit}
      component="form"
      sx={{
        // '& > :not(style)': { m: 2, width: '25ch' },
        // border: '1px solid black',
        mt: 3,
        mb: 3,
        display: 'flex',
        alignItems: 'center',
      }}
      // validate="true"
      autoComplete="off"
    >
      <TextField
        sx={{ mr: 3 }}
        required
        type="number"
        name="number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        // helperText={errors.number && touched.number ? errors.number : null}
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
        Get status TTN
      </Button>
    </Box>
  );
};
export default FormCheck;
