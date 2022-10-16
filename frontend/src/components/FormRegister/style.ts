import styled from 'styled-components';

const StyleContainer = styled.div`
  min-width: 300px;
  max-width: 550px;
  width: 100%;

  padding: 15px;

  border: 2px solid var(--main-green);
  border-radius: 15px;

  box-sizing: border-box;

  h2 {
    font-size: 1.5rem;

    margin-bottom: 20px;

    text-align: center;

    color: var(--main-green);
  }

  form {
    min-height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.cont-buttons {
      width: 100%;
      height: 90px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        height: 40px;

        background-color: var(--light-green);
        color: white;

        border: none;
        border-radius: 15px;

        :first-child {
          background-color: var(--main-green);
        }
      }
    }
  }
`;

export default StyleContainer;
