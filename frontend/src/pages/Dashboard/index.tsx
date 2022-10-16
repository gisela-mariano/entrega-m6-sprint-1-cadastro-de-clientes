import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { useCallback, useContext, useEffect } from 'react';
import { ModalNewClientIsOpenContext } from '../../Providers/ModalNewClientIsOpen';
import { IsLoggedInContext } from '../../Providers/IsLoggedIn';
import { AllClientsContext } from '../../Providers/AllClients';
import { apiAccess } from '../../services';
import CardClient from '../../components/CardClient';
import StyleContainer from './style';
import { AccessClientsApiContext } from '../../Providers/AccessClientApi';

const DashboardPage = () => {
  const history = useHistory();

  const { isLoggedIn } = useContext(IsLoggedInContext);
  const { modalNewClientIsOpen, setModalNewClientIsOpen } = useContext(
    ModalNewClientIsOpenContext
  );
  const { allClients, setAllClients } = useContext(AllClientsContext);

  // const { getClients } = useContext(AccessClientsApiContext);

  // if (isLoggedIn === false) history.push('/');

  const getUserData = localStorage.getItem('userData');
  const userData = JSON.parse(getUserData!);

  const handleLogout = () => {
    localStorage.removeItem('userData');

    history.push('/');
  };

  const getClients = useCallback(() => {
    apiAccess
      .get('/clients', {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => setAllClients(res.data))
      .catch((err) => console.log(err));
  }, [userData.token, setAllClients]);

  useEffect(() => {
    getClients();
  }, [getClients]);

  const handleNewClient = () => {
    setModalNewClientIsOpen(true);
  };

  return (
    <StyleContainer>
      <header>
        <div className='cont-header'>
          <span>
            Olá, <span>{userData.user_name}</span>
          </span>

          <button onClick={() => handleLogout()}>Sair</button>
        </div>
      </header>

      <main>
        <section>
          <header>
            <h2>Clientes</h2>

            <button onClick={() => handleNewClient()}>
              <HiOutlinePlusCircle /> Novo Cliente
            </button>
          </header>

          <div className='cont-cards'>
            {allClients.map((clientData, index) => (
              <CardClient clientData={clientData} key={index} />
            ))}
          </div>
        </section>
      </main>
    </StyleContainer>
  );
};

export default DashboardPage;
