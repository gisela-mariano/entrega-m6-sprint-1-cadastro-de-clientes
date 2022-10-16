import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import Modal from 'react-modal';
import { useContext } from 'react';
import InputComponent from '../Input';
import { useForm } from 'react-hook-form';
import { schemaCreatePhone } from '../../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { apiAccess } from '../../services';
import { AxiosError } from 'axios';
import { ModalCreatePhoneIsOpenContext } from '../../Providers/ModalCreatePhoneIsOpen';
import { ICreatedPhone, ICreatePhone } from '../../interfaces/phone.interface';
import { IIdClientProps } from '../../interfaces/client.interface';
import StyleContainer from '../ModalCreateEmail/style';
import { toast } from 'react-toastify';

const ModalCreatePhone = (idClient: IIdClientProps) => {
  const { modalCreatePhoneIsOpen, setModalCreatePhoneIsOpen } = useContext(
    ModalCreatePhoneIsOpenContext
  );

  const getUserData = localStorage.getItem('userData');
  const userData = JSON.parse(getUserData!);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePhone>({
    resolver: yupResolver(schemaCreatePhone),
  });

  const onSubmit = (data: ICreatePhone) => {
    apiAccess
      .post(`clients/${idClient.idClient}/phone`, JSON.stringify({phone: data.phone}), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Telefone cadastrado!');
      })
      .catch((err: Error | AxiosError) => {
        toast.error('Telefone já cadastrado para esse cliente');
      });
  };

  const handleSuccess = (data: ICreatedPhone) => {};

  const handleError = (err: Error | AxiosError) => {};

  const handleCloseModal = () => {
    setModalCreatePhoneIsOpen(false);
  };

  return (
    <>
      <Modal 
      className='Modal Modal-Contact'
      overlayClassName='Overlay'
      isOpen={modalCreatePhoneIsOpen} onRequestClose={handleCloseModal}>
        <StyleContainer>
          <h3>Adicionar Telefone</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              icon={HiOutlineMail}
              placeholder='Insira o telefone'
              register={register}
              name='phone'
              error={errors.phone && errors.phone.message}
              label='Novo Telefone'
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

export default ModalCreatePhone;
