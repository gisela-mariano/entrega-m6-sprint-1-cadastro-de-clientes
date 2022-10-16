import styled from 'styled-components';

const StyleContainer = styled.div`

  width: 300px;
  height: 250px;

  padding: 10px;
  margin: 0 15px 15px 0;

  color: var(--main-green);

  border: 1px solid var(--main-green);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;

  div.cont-title{
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
      font-size: 1.2rem;
    }

    svg{
      width: 20px;
      height: 20px;

      color: var(--gray);

      :hover{
        color: var(--main-green);

        cursor: pointer;

        transition: all 0.3s ease;

      }
    }
  }

  div.cont-card-contacts{
    height: 40%;

    overflow: auto;

    box-sizing: border-box;

    span{
      font-weight: 600;
    }

    div.contact{
      margin-top: 5px;

      display: flex;
      align-items: center;

      svg{
        width: 12px;
        height: 12px;
      }

      span{
        font-weight: 500;
      }
    }
  }
`;

export default StyleContainer;
