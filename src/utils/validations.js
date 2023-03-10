import * as Yup from 'yup';

export const ttnCheckShema = Yup.object().shape({
  number: Yup.string()
    .length(14, 'must be 14 numbers')
    .matches(/^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9]+)?)$/)
    .required('Required'),
});
