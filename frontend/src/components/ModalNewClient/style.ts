import styled from 'styled-components';

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;

    margin-bottom: 10px;

    text-align: center;

    color: var(--main-green);
  }

  div.input {
    height: 40px;

    margin-bottom: 0;
  }

  form {
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div.cont-buttons{
      width: 100%;

      display: flex;

      button{
        height: 40px;

        background-color: var(--dark-green);
        color: white;

        border: none;
        border-radius: 15px;

        flex-grow: 1;

        :last-child{
          margin-left: 15px;

          background-color: var(--main-green);

          flex-grow: 2;
        }
      }
    }
  }
`;

export default StyleContainer;
