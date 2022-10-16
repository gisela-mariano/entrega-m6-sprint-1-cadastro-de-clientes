import React from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import InputComponent from '../Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ICreatedUser, ICreateUser } from '../../interfaces/user.interface';
import { schemaUserRegister } from '../../schemas';
import { IsInLoginPageContext } from '../../Providers/IsInLoginPage';
import { useContext } from 'react';
import { apiAccess } from '../../services';
import { toast } from 'react-toastify';
import StyleContainer from './style';

const FormRegister = () => {
  const { setIsInLoginPage } = useContext(IsInLoginPageContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>({
    resolver: yupResolver(schemaUserRegister),
  });

  const onSubmit = (data: ICreateUser) => {
    apiAccess
      .post('/users', JSON.stringify(data))
      .then((res) => handleSuccess(res.data))
      .catch((_) => toast.error('Email já cadastrado.'));
  };

  const handleSuccess = (data: ICreatedUser) => {
    toast.success('Conta criada com sucesso!');

    localStorage.setItem('userData', JSON.stringify({ user_name: data.name }));

    setIsInLoginPage(true);
  };

  return (
    <StyleContainer>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          icon={HiOutlineUser}
          placeholder='Insira seu nome'
          register={register}
          name='name'
          error={errors.name && errors.name.message}
          label='Nome'
        />
        <InputComponent
          icon={HiOutlineMail}
          placeholder='Insira seu email'
          register={register}
          name='email'
          error={errors.email && errors.email.message}
          label='Email'
          type='email'
        />
        <InputComponent
          icon={HiOutlineKey}
          placeholder='Insira sua senha'
          register={register}
          name='password'
          error={errors.password && errors.password.message}
          label='Senha'
          type='password'
        />
        <div className='cont-buttons'>
          <button type='submit'>Cadastrar</button>
          <button onClick={() => setIsInLoginPage(true)}>Fazer Login</button>
        </div>
      </form>
    </StyleContainer>
  );
};

export default FormRegister;
