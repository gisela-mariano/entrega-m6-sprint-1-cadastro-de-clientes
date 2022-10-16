import styled from "styled-components";

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;

  header{
    width: 100%;
    height: 90px;

    margin-bottom: 50px;

    background-color: var(--main-green);

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 2rem;
      font-weight: 600;

      color: white;
    }
  }

  main{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
  }
`

export default StyleContainer;