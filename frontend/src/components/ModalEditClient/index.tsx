import React from 'react';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePlusCircle,
} from 'react-icons/hi';
import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { ModalEditClientIsOpenContext } from '../../Providers/ModalEditClientIsOpen';
import { ICardClientProps } from '../../interfaces/geral.interface';
import StyleContainer from './style';
import { apiAccess } from '../../services';
import { AllClientsContext } from '../../Providers/AllClients';
import { toast } from 'react-toastify';
import { AccessClientsApiContext } from '../../Providers/AccessClientApi';
import { ModalCreateEmailIsOpenContext } from '../../Providers/ModalCreateEmailIsOpen';
import { ModalCreatePhoneIsOpenContext } from '../../Providers/ModalCreatePhoneIsOpen';
import ModalCreateEmail from '../ModalCreateEmail';
import ModalCreatePhone from '../ModalCreatePhone';

const ModalEditClient = (clientData: ICardClientProps) => {
  const { modalEditClientIsOpen, setModalEditClientIsOpen } = useContext(
    ModalEditClientIsOpenContext
  );
  const { setModalCreateEmailIsOpen } = useContext(
    ModalCreateEmailIsOpenContext
  );
  const { setModalCreatePhoneIsOpen } = useContext(
    ModalCreatePhoneIsOpenContext
  );

  const getUserData = localStorage.getItem('userData');
  const userData = JSON.parse(getUserData!);

  const { id, name, emails, phones } = clientData.clientData;

  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  const handleEditName = (name: string) => {
    apiAccess
      .put(`/clients/${id}`, JSON.stringify({ name }), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Cliente editado!');
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteClient = () => {
    apiAccess
      .delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Cliente deletado!');
      })
      .catch((err) => console.log(err));
  };

  const handleEditEmail = (idEmail: string) => {
    apiAccess
      .put(`clients/email/${idEmail}`, JSON.stringify({ email: emailValue }), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Email editado!');
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteEmail = (idEmail: string) => {
    apiAccess
      .delete(`clients/email/${idEmail}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Email deletado!');
      })
      .catch((err) => console.log(err));
  };

  const handleEditPhone = (idPhone: string) => {
    apiAccess
      .put(`clients/phone/${idPhone}`, JSON.stringify({ phone: phoneValue }), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Telefone editado!');
      })
      .catch((err) => console.log(err));
  };

  const handleDeletePhone = (idPhone: string) => {
    apiAccess
      .delete(`clients/phone/${idPhone}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Telefone deletado!');
      })
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    setModalEditClientIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={modalEditClientIsOpen}
        onRequestClose={handleCloseModal}
        className='Modal'
        overlayClassName='Overlay'
      >
        <StyleContainer>
          <h3>Editar Cliente</h3>

          <form>
            <section className='cont-name'>
              <div className='cont-input'>
                <label htmlFor='name'>Nome:</label>
                <div className='input'>
                  <HiOutlineUser />
                  <input
                    type='text'
                    id='name'
                    placeholder='Insira o nome'
                    defaultValue={name}
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleEditName(nameValue);
                }}
              >
                Editar
              </button>
            </section>

            <section className='cont-emails'>
              <div className='cont-contacts'>
                <span>Emails:</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModalCreateEmailIsOpen(true);
                  }}
                >
                  <HiOutlinePlusCircle /> Novo Email
                </button>
              </div>
              {emails.map((email, index) => {
                return (
                  <div
                    className='cont-inputs-contacts'
                    key={index}
                    id={email.id}
                  >
                    <div className='input'>
                      <HiOutlineMail />
                      <input
                        type='email'
                        defaultValue={email.email}
                        value={emailValue}
                        placeholder='Insira o email'
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                    </div>

                    <div className='cont-buttons'>
                      <button
                        id={email.id}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteEmail(e.currentTarget.id);
                        }}
                      >
                        Apagar
                      </button>
                      <button
                        id={email.id}
                        onClick={(e) => {
                          e.preventDefault();
                          handleEditEmail(e.currentTarget.id);
                        }}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>

            <section className='cont-phones'>
              <div className='cont-contacts'>
                <span>Telefones:</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModalCreatePhoneIsOpen(true);
                  }}
                >
                  <HiOutlinePlusCircle /> Novo Telefone
                </button>
              </div>
              {phones.map((phone, index) => {
                return (
                  <div
                    className='cont-inputs-contacts'
                    key={index}
                    id={phone.id}
                  >
                    <div className='input'>
                      <HiOutlinePhone />
                      <input
                        type='text'
                        defaultValue={phone.phone_number}
                        pattern='/^(\d{2})\s(\d{5})(\d{4})$/'
                        value={phoneValue}
                        placeholder='Insira o telefone'
                        onChange={(e) => setPhoneValue(e.target.value)}
                      />
                    </div>

                    <div className='cont-buttons'>
                      <button
                        id={phone.id}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeletePhone(e.currentTarget.id);
                        }}
                      >
                        Apagar
                      </button>
                      <button
                        id={phone.id}
                        onClick={(e) => {
                          e.preventDefault();
                          handleEditPhone(e.currentTarget.id);
                        }}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>

            <div className='cont-buttons-form'>
              <button onClick={() => handleDeleteClient()}>
                Remover Cliente
              </button>
              <button onClick={() => handleCloseModal()}>Salvar</button>
            </div>
          </form>
        </StyleContainer>
        <ModalCreateEmail idClient={id} />
        <ModalCreatePhone idClient={id} />
      </Modal>
    </>
  );
};

export default ModalEditClient;
