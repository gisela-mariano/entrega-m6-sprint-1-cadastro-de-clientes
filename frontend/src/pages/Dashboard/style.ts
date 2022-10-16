import styled from 'styled-components';

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;

  header {

    margin-bottom: 50px;

    div.cont-header {
      width: 100%;
      height: 90px;

      padding: 0 15px;

      background-color: var(--main-green);
      color: white;

      display: flex;
      justify-content: space-between;
      align-items: center;

      box-sizing: border-box;

      span {
        font-weight: lighter;

        :last-child {
          font-weight: 600;
        }
      }

      button{
        width: 70px;
        height: 35px;

        background-color: var(--light-green);
        color: white;

        border: none;
        border-radius: 10px;
      }
    }
  }

  main{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    section{
      min-width: 300px;
      width: 85%;

      header{
        width: 100%;

        display: flex;
        justify-content: space-between;

        h2{
          font-size: 1.5rem;

          color: var(--main-green);
        }

        button{
          width: 108px;
          height: 35px;

          background-color: var(--light-green);
          color: white;

          border: none;
          border-radius: 10px;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      div.cont-cards{
        width: 100%;
        height: 100%;

        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;

export default StyleContainer;
