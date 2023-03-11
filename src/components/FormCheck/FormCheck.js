import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToHistory, selectHistoryPackList } from 'redux/appSlice';
import { ttnCheckShema } from 'utils/validations';

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
      if (!historyList.includes(defaultValue)) {
        dispatch(addToHistory(defaultValue));
      }
      navigate(`/${defaultValue}`);
    },
  });

  const { errors, touched } = formik;
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <p style={{ color: 'red' }}>
        {errors.number && touched.number ? errors.number : null}
      </p>
      <input
        type="number"
        name="number"
        required
        onChange={e => {
          setDefaultValue(e.target.value);
          formik.setFieldValue('number', e.target.value);
        }}
        value={defaultValue ?? ''}
      />
      <button type="submit">Get status TTN</button>
    </form>
  );
};
export default FormCheck;