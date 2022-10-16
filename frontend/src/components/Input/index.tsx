import React from 'react';
import { IRegisterInput } from "../../interfaces/geral.interface";
import { StyleContainer } from './style';


const InputComponent = ({
  icon: Icon,
  error,
  register,
  name,
  label,
  ...rest
}: IRegisterInput) => {
  return (
    <>
      <StyleContainer isErrored={!!error}>
      <span className='label'>
        {label}: {!!error && <span className='erro'> - {error}</span>}
      </span>

      <div className='input'>
        <Icon />
        <input {...register(name)} {...rest} />
      </div>
      </StyleContainer>
    </>
  );
};

export default InputComponent;
