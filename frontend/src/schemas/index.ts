import * as yup from 'yup';

export const schemaUserRegister = yup.object().shape({
  name: yup
    .string()
    .required('Você deve preencher esse campo.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Você deve preencher esse campo.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
  password: yup
    .string()
    .required('Você deve preencher esse campo.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});

export const schemaUserLogin = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Você deve preencher esse campo.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
  password: yup
    .string()
    .required('Você deve preencher esse campo.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});

export const schemaClientRegister = yup.object().shape(
  {
    name: yup
      .string()
      .required('Você deve preencher esse campo.')
      .max(255, 'Deve ter no máximo 255 caracteres.'),
    email: yup
      .string()
      .email('Insira um email válido')
      .max(255, 'Deve ter no máximo 255 caracteres.')
      .when('phone', {
        is: (phone: string) => !phone || phone.length === 0,
        then: yup
          .string()
          .email('Insira um email válido')
          .required('Você deve registrar pelo menos um email ou um telefone.'),
      }),
    email2: yup
      .string()
      .email('Insira um email válido')
      .max(255, 'Deve ter no máximo 255 caracteres.')
      .when('email', {
        is: (email: string) => !email || email.length === 0,
        then: yup
          .string()
          .length(0, 'Priorize preencher o campo de email acima.'),
      }),
      // .notOneOf(
      //   [yup.ref('email'), null],
      //   'Não é possível cadastrar emails iguais.'
      // ),
    phone: yup
      .string()
      .matches(
        /^$|^(\d{2})\s(\d{5})(\d{4})$/,
        'O número deve ser no seguinte formato: "12 123456789"'
      )
      .when('email', {
        is: (email: string) => !email || email.length === 0,
        then: yup
          .string()
          .required('Você deve registrar pelo menos um email ou um telefone.'),
        otherwise: yup
          .string()
          .matches(
            /^$|^(\d{2})\s(\d{5})(\d{4})$/,
            'O número deve ser no seguinte formato: "12 123456789".'
          ),
      }),
    phone2: yup
      .string()
      .matches(
        /^$|^(\d{2})\s(\d{5})(\d{4})$/,
        'O número deve ser no seguinte formato: "12 123456789".'
      )
      .when('phone', {
        is: (phone: string) => !phone || phone.length === 0,
        then: yup
          .string()
          .length(0, 'Priorize preencher o campo de telefone acima.'),
      })
      .notRequired()
      // .notOneOf(
      //   [yup.ref('phone'), null],
      //   'Não é possível cadastrar telefones iguais.'
      // ),
  },
  [['email', 'phone']]
);

export const schemaCreateEmail = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Você deve preencher esse campo.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
});

export const schemaCreatePhone = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^(\d{2})\s(\d{5})(\d{4})$/,
      'O número deve ser no seguinte formato: "12 123456789".'
    )
    .required('Você deve preencher esse campo.'),
});
