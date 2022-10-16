import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import Modal from 'react-modal';
import { useContext } from 'react';
import InputComponent from '../Input';
import { useForm } from 'react-hook-form';
import { schemaCreateEmail } from '../../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { apiAccess } from '../../services';
import { AxiosError } from 'axios';
import { ModalCreateEmailIsOpenContext } from '../../Providers/ModalCreateEmailIsOpen';
import { ICreatedEmail, ICreateEmail } from '../../interfaces/email.interface';
import StyleContainer from './style';
import { toast } from 'react-toastify';
import { IIdClientProps } from '../../interfaces/client.interface';



const ModalCreateEmail = (idClient: IIdClientProps) => {
  const { modalCreateEmailIsOpen, setModalCreateEmailIsOpen } = useContext(
    ModalCreateEmailIsOpenContext
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateEmail>({
    resolver: yupResolver(schemaCreateEmail),
  });

  const onSubmit = (data: ICreateEmail) => {

    const getUserData = localStorage.getItem('userData');
    const userData = JSON.parse(getUserData!);

    apiAccess
      .post(`clients/${idClient.idClient}/email`, JSON.stringify({email: data.email}), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Email cadastrado!');
      })
      .catch((err: Error | AxiosError) => {
        toast.error('Email já cadastrado para esse cliente');
      });
  };

  const handleSuccess = (data: ICreatedEmail) => {};

  const handleError = (err: Error | AxiosError) => {};

  const handleCloseModal = () => {
    setModalCreateEmailIsOpen(false);
  };

  return (
    <>
      <Modal 
      className='Modal-Contact'
      overlayClassName='Overlay'
      isOpen={modalCreateEmailIsOpen} onRequestClose={handleCloseModal}>
        <StyleContainer>
          <h3>Adicionar Email</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              icon={HiOutlineMail}
              placeholder='Insira o email'
              register={register}
              name='email'
              error={errors.email && errors.email.message}
              label='Novo Email'
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

export default ModalCreateEmail;
