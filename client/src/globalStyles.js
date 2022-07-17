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
    color: #fefefe;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;