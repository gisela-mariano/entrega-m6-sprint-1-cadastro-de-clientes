import styled from 'styled-components';

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;

  color: var(--main-green);

  overflow: auto;

  .input {
    width: 100%;
    height: 30px;

    margin-top: 10px;

    border: 1px solid var(--main-green);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    box-sizing: border-box;

    svg {
      width: 20px;
      height: 20px;

      color: var(--main-green);
    }

    input {
      width: 85%;
      height: 90%;

      padding-left: 6px;

      background-color: transparent;

      border: none;
      border-radius: 15px;

      box-sizing: border-box;

      outline: none;

      ::placeholder {
        font-size: 0.9rem;

        color: var(--gray);
      }
    }
  }

  h3 {
    font-size: 1.5rem;

    text-align: center;

    margin-bottom: 10px;
  }

  form{
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  section.cont-name {
    width: 100%;

    display: flex;

    div.cont-input {
      width: 100%;

      .input {
        width: 95%;
      }
    }

    button {
      width: 60px;
      height: 30px;

      background-color: var(--main-green);
      color: white;

      border: none;
      border-radius: 10px;

      align-self: flex-end;
    }
  }

  section.cont-emails,
  .cont-phones {
    width: 100%;

    margin-top: 15px;

    .cont-contacts {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 25px;

        background-color: var(--light-green);
        color: white;

        border: none;
        border-radius: 8px;

        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }
    }

    div.cont-inputs-contacts {
      width: 100%;

      .cont-buttons {
        margin-top: 5px;

        display: flex;
        justify-content: space-between;

        button {
          width: 70px;
          height: 25px;

          background-color: var(--light-green);
          color: white;

          border: none;
          border-radius: 8px;

          :last-child{
            background-color: var(--main-green);
          }
        }
      }
    }
  }

  .cont-buttons-form{
    width: 100%;

    margin-top: 10px;

    display: flex;
    justify-content: space-between;

    button{
      height: 30px;

      background-color: var(--middle-green);
      color: white;

      border: none;
      border-radius: 8px;

      flex-grow: 1;

      :last-child{
        margin-left: 10px;

        background-color: var(--main-green);

        flex-grow: 2;
      }
    }
  }
`;

export default StyleContainer;
