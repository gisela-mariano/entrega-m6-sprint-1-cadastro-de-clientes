import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root{
    height: 100%;
  }
  :root {
    --main-green: rgba(18, 115, 105, 1);
    --middle-green: rgba(76, 89, 88, 1);
    --dark-green: rgba(16, 64, 59, 1);
    --light-green: rgba(138, 166, 163, 1);
    --gray: rgba(191, 191, 191, 1);
    --red: rgba(225, 57, 20, 1);
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  body{
    font-family: 'Poppins', sans-serif;
    cursor: default;
  }

  body, .posts{
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
      background: var(--main-green);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--light-green);
      border-radius: 3px;
    }
  }

  button{
    cursor: pointer;
    transition: all 0.5s ease;

    :hover{
      filter: brightness(93%);
    }
  }

  .erro{
    font-size: 0.8rem;
    color: var(--red);
  }

  .Modal, .Modal-Contact{
    min-width: 300px;
    max-width: 500px;
    width: 100%;
    min-height: 300px;
    max-height: 400px;
    height: 100%;

    padding: 15px;
    
    background-color: white;

    border: 2px solid var(--dark-green);
    border-radius: 20px;

    outline: none;

    box-sizing: border-box;

    overflow: auto;
  }

  .Modal-Contact{
    min-height: 250px;
    max-height: 250px;
  }

  .Overlay{
    background-color: rgba(0, 0, 0, 0.5);

    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: auto;
  }

  @media screen and (max-width: 500px) {
    .Modal{
      width: 300px;
    }
  }

  @media screen and (max-height: 500px) {
    .Modal{
      margin-top: 90px;
    }
  }
`;

export default GlobalStyle;