import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormLogin from '../../components/FormLogin';
import FormRegister from '../../components/FormRegister';
import { IsInLoginPageContext } from '../../Providers/IsInLoginPage';
import { IsLoggedInContext } from '../../Providers/IsLoggedIn';
import StyleContainer from './style';

const RegisterPage = () => {
  const { isInLoginPage } = useContext(IsInLoginPageContext);
  const { isLoggedIn } = useContext(IsLoggedInContext);

  const history = useHistory();
  

  if (isLoggedIn) history.push('/dashboard');

  return (
    <StyleContainer>
      <header>
        <h1>Agendaki</h1>
      </header>

      <main>{isInLoginPage ? <FormLogin /> : <FormRegister />}</main>
    </StyleContainer>
  );
};

export default RegisterPage;
