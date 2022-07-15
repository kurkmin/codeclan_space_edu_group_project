import React from 'react';
import Answers from '../components/quiz/Answers';
import Questions from '../components/quiz/Questions';

function QuizContainer() {

  return (
    <>
      <h1>I'm the quiz container</h1>
      <Questions />
      <Answers />
    </>
  )

}

export default QuizContainer;