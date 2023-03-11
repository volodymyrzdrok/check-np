import React, { useMemo, useState } from 'react';
import { fetchDepartamentsList } from 'services/apiService';
import debounce from 'lodash.debounce';
import { useFormik } from 'formik';
import { nameCityShema } from 'utils/validations';

const DepartmentsList = () => {
  const [depList, setDepList] = useState([]);

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: nameCityShema,
    onSubmit: async ({ city }) => {
      try {
        const { data } = await fetchDepartamentsList(city);
        setDepList(data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { errors, touched } = formik;
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <p style={{ color: 'red' }}>
          {errors.city && touched.city ? errors.city : null}
        </p>
        <input
          placeholder="city :"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <button type="submit">search </button>
      </form>
      <ul>
        {depList.length > 0 ? (
          depList.map(({ SiteKey, Description }) => (
            <li key={SiteKey}> {Description}</li>
          ))
        ) : (
          <p>Не знайдено віддільнь, напишіть назву міста кирилицею</p>
        )}
      </ul>
    </div>
  );
};

export default DepartmentsList;

// const onChangeInput = async e => {
//   const nameCity = e.target.value.trim();

//   try {
//     const { data } = await fetchDepartamentsList(nameCity);
//     setDepList(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const debouncedChangeHandler = useMemo(
//   () => debounce(onChangeInput, 200),
//   []
// );
