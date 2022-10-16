import React, { useState } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Modal from 'react-modal';
import { useContext } from 'react';
import { ModalNewClientIsOpenContext } from '../../Providers/ModalNewClientIsOpen';
import InputComponent from '../Input';
import { useForm } from 'react-hook-form';
import {
  ICreateClient,
  ICreatedClient,
} from '../../interfaces/client.interface';
import { schemaClientRegister } from '../../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { apiAccess } from '../../services';
import { AxiosError } from 'axios';
import StyleContainer from './style';
import { toast } from 'react-toastify';

const ModalNewClient = () => {
  const { modalNewClientIsOpen, setModalNewClientIsOpen } = useContext(
    ModalNewClientIsOpenContext
  );

  const userData = localStorage.getItem('userData');
  const token = JSON.parse(userData!).token;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateClient>({
    resolver: yupResolver(schemaClientRegister),
  });

  const onSubmit = async (data: ICreateClient) => {
    const { name, email, phone } = data;

    if (email!.length !== 0 && phone!.length !== 0) {
      const clientData = {
        name,
        contacts: {
          emails: [email],
          phones: [phone],
        },
      };

      connectApi(clientData);
    } else if (email!.length !== 0) {
      const clientData = {
        name,
        contacts: {
          emails: [email],
        },
      };

      connectApi(clientData);
    } else if (phone!.length !== 0) {
      const clientData = {
        name,
        contacts: {
          phones: [phone],
        },
      };

      connectApi(clientData);
    }
  };

  const connectApi = (data: ICreateClient) => {
    
    apiAccess
      .post('clients', JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => handleSuccess(res.data))
      .catch((err: Error | AxiosError) => handleError(err));
  };

  const handleSuccess = (data: ICreatedClient) => {
    toast.success('Cliente criado com sucesso!')

    setModalNewClientIsOpen(false)
  };

  const handleError = (err: Error | AxiosError) => {
    toast.error('Você já cadastrou esse cliente.')
  };

  const handleCloseModal = () => {
    setModalNewClientIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={modalNewClientIsOpen}
        onRequestClose={handleCloseModal}
        className='Modal'
        overlayClassName='Overlay'
      >
        <StyleContainer>
          <h3>Adicionar Cliente</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              icon={HiOutlineUser}
              placeholder='Insira o nome'
              register={register}
              name='name'
              error={errors.name && errors.name.message}
              label='Nome'
            />

            <InputComponent
              icon={HiOutlineMail}
              placeholder='Insira o email'
              register={register}
              name='email'
              error={errors.email && errors.email.message}
              label='Email'
            />

            <InputComponent
              icon={HiOutlinePhone}
              placeholder='Insira o telefone'
              register={register}
              name='phone'
              error={errors.phone && errors.phone.message}
              label='Telefone'
            />

            <div className='cont-buttons'>
              <button type='reset' onClick={() => handleCloseModal()}>
                Cancelar
              </button>
              <button type='submit'>Adicionar</button>
            </div>
          </form>
        </StyleContainer>
      </Modal>
    </>
  );
};

export default ModalNewClient;
