import styled, { css } from "styled-components"
import { IPropsInput } from "../../interfaces/geral.interface"

export const StyleContainer = styled.div<IPropsInput>`

  width: 100%;
  height: 90px;

  /* margin-bottom: 15px; */

  box-sizing: border-box;

  .label{
    color: var(--main-green);

    max-height: 36px;
  }

  .input{
    width: 100%;
    height: 45px;

    margin-top: 10px;

    border: 2px solid var(--main-green);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    box-sizing: border-box;

    svg{
      width: 25px;
      height: 25px;

      color: var(--main-green);
    }

    input{
      width: 85%;
      height: 90%;

      padding-left: 6px;

      background-color: transparent;

      border: none;
      border-radius: 15px;

      box-sizing: border-box;

      outline: none;

      ::placeholder{
        font-size: 0.9rem;

        color: var(--gray);
      }
    }
  }

  ${
    props => props.isErrored && css`

      .input{
        border-color: var(--red);
        
        svg{
          color: var(--red);
        }
      }
    `
  }
`