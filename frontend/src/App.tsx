import React from 'react';
import './App.css';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import ModalCreateEmail from './components/ModalCreateEmail';
import ModalCreatePhone from './components/ModalCreatePhone';
import ModalNewClient from './components/ModalNewClient';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes />
      <ModalNewClient />
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  );
}

export default App;
