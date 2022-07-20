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
    font-size: 1.8rem;
    min-height: 98vh;
    width: 100%;
    font-family: 'Exo 2', sans-serif;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  h1, 
  h2, 
  h3 {
    margin-bottom: 2rem;
    color: rgb(176, 189, 209);
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
    grid-template-columns: 40% 1fr;
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
    grid-template-rows: min-content 1fr;
    gap: 2rem;
    align-items: center;
    justify-items: stretch;
  }
  
  
  .quiz-questions {
    grid-area: questions;
    align-self: start;
    
  }

  .quiz-questions ul {
    background-color: #000;
    list-style-type: none;
  }

  .quiz-questions li {
    margin-bottom: 3rem;
    margin-left: 4rem;
    color: rgba(255, 181, 101, 1);
  }
  .quiz-questions li {
    margin-bottom: 2rem;
  }

  .quiz-questions select,
  .quiz-questions input{
    cursor: pointer;
    margin-top: 2rem;
    margin-left: 2rem;
    padding: 0.6rem 1rem;
    font-size: 2.4rem;
    color: rgba(205, 106, 0, 1);
    background-color: rgba(33, 46, 65, 0.2);
    border: none;
    border: 1px solid rgba(255, 196, 0, 0.656)
  }
  
  .quiz-feedback {
    height: 100%;
    grid-area: feedback;
    align-self: start;
    justify-self: center;
  }
  
  .quiz-feedback p{
    font-size: 2.4rem;
  }
  
  .quiz-feedback p.correct{
    min-height: 80%;
    font-size: 2.4rem;
    color: rgba(130, 255, 130, 1);
    background-image: url('/images/icons/green-tick.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center 100%;
  }
  .quiz-feedback p.incorrect{
    min-height: 80%;
    font-size: 2.4rem;
    color: rgba(255,200,200, 1);
    /* background-color: #000; */
    background-image: url('/images/icons/red-cross.png');
    background-repeat: no-repeat;
    background-position: center 100%;
  }

  .quiz-question-text{
    font-size: 2.4rem;
  }



`;

export default GlobalStyle;