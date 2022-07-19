import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  box-sizing: border-box;
  background-color: var(--viewport-background);
  background-image: url('/images/stars.png');
  }

  body{
    position: relative;
    color: rgb(196, 213, 238);
    font-size: 1.6rem;
    min-height: 98vh;
    width: 100%;
    font-family: 'Exo 2', sans-serif;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .container {
    min-height: 80vh;
    display: grid;
  }
`;

export default GlobalStyle;