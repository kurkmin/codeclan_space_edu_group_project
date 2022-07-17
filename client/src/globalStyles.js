import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --text-30: hsl(197, 100%, 96%);
  --viewport-background: hsl(310, 86%, 3%);
  --ss-container-width: 74rem;
  --box-shadow-50: -2px 1px 4px 2px rgba(0,0,0,0.6), 
  -2px 4px 12px 6px rgba(0,0,0,0.1);

  --transition: all 0.2s ease-in-out;
}

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