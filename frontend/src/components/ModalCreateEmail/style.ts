import styled from 'styled-components';

const StyleContainer = styled.div`
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3{
    font-size: 1.5rem;

    text-align: center;

    color: var(--main-green);
  }

  form{
    width: 100%;
    height: 75%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .cont-buttons{
      width: 100%;
      height: 40px;

      display: flex;
      justify-content: space-between;

      button{
        color: white;

        background-color: var(--dark-green);

        border: none;
        border-radius: 10px;

        flex-grow: 1;

        :last-child{
          margin-left: 10px;

          background-color: var(--main-green);

          flex-grow: 2;
        }
      }
    }
  }
`;

export default StyleContainer;
