import React, { useContext } from 'react';
import { ICreatedClient } from '../../interfaces/client.interface';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiFillEdit } from 'react-icons/ai';
import {
  ICardClientProps,
  IGetClientsProps,
} from '../../interfaces/geral.interface';
import StyleContainer from './style';
import { ModalEditClientIsOpenContext } from '../../Providers/ModalEditClientIsOpen';
import { v4 as uuid } from 'uuid';
import ModalEditClient from '../ModalEditClient';

const CardClient = (
  clientData: ICardClientProps,
  getClients: IGetClientsProps
) => {
  const { setModalEditClientIsOpen } = useContext(ModalEditClientIsOpenContext);

  const { id, name, emails, phones } = clientData.clientData;

  const handleClick = () => {
    setModalEditClientIsOpen(true);
  };

  return (
    <StyleContainer>
      <div className='cont-title'>
        <h3>{name}</h3>
        <AiFillEdit onClick={() => handleClick()} />
      </div>

      <div className='cont-card-contacts'>
        <span>Emails:</span>
        <div className='contacts'>
          {emails.map((item) => {
            return (
              <div className='contact' key={uuid()}>
                <GoPrimitiveDot />
                <span>{item.email}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className='cont-card-contacts'>
        <span>Telefones:</span>
        <div className='contacts'>
          {phones.map((item, index) => {
            return (
              <div className='contact' key={uuid()}>
                <GoPrimitiveDot />
                <span>{item.phone_number}</span>
              </div>
            );
          })}
        </div>
      </div>
      <ModalEditClient clientData={clientData.clientData} />
    </StyleContainer>
  );
};

export default CardClient;
