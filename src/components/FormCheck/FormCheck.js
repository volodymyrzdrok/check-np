import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { ttnCheckShema } from 'utils/validations';

const FormCheck = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      number: '',
    },
    validationSchema: ttnCheckShema,
    onSubmit: ({ number }) => {
      navigate(`/${number}`);
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
        onChange={formik.handleChange}
        value={formik.values.number}
      />
      <button type="submit">Get status TTN</button>
    </form>
  );
};

export default FormCheck;
