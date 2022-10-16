import React from 'react';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import InputComponent from '../Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginUser } from '../../interfaces/user.interface';
import { schemaUserLogin } from '../../schemas';
import { useContext } from 'react';
import { IsInLoginPageContext } from '../../Providers/IsInLoginPage';
import { apiAccess } from '../../services';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { IsLoggedInContext } from '../../Providers/IsLoggedIn';
import StyleContainer from './style';

const FormLogin = () => {
  const { setIsInLoginPage } = useContext(IsInLoginPageContext);
  const { setIsLoggedIn } = useContext(IsLoggedInContext);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(schemaUserLogin),
  });

  const onSubmit = (data: ILoginUser) => {
    apiAccess
      .post('/users/login', JSON.stringify(data))
      .then((res) => handleSuccess(res.data.token))
      .catch((_) => toast.error('Email ou senha inválido'));
  };

  const handleSuccess = (token: string) => {
    const userData = localStorage.getItem('userData');
    const parsedUserData = JSON.parse(userData!);

    const newUserData = { ...parsedUserData, token };

    setIsLoggedIn(true);

    console.log();
    

    localStorage.setItem('userData', JSON.stringify(newUserData));

    history.push('/dashboard');
  };

  return (
    <StyleContainer>
      <h2>Logar-se</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type='submit'>Logar</button>
          <button onClick={() => setIsInLoginPage(false)}>
            Fazer Cadastro
          </button>
        </div>
      </form>
    </StyleContainer>
  );
};

export default FormLogin;
