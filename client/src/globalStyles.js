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

  .main-grid {
    min-height: 80vh;
    padding: 0 4rem;
    display: grid;
  }

  main.stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  main.stats-grid > div{
    border: 1px solid rgba(255,255,255 , 0.4);
    margin: 2rem;
    background-color: hsla(0, 0%, 100%, 1);
    background-color: rgba(33, 46, 65, 0.2);
    border-radius: 2rem;;
  }

  main.planet-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
      'menu menu'
      'images detail'
      'facts facts';
    gap: 4rem;
  }

  main.quiz-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'menu menu'
      'questions feedback'
    ;
    gap: 2rem;
    align-items: center;
    justify-items: start;
  }


  .quiz-questions {
    grid-area: questions;

  }
`;

export default GlobalStyle;