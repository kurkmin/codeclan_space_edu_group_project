import React, { useState, useEffect } from 'react';
import Answers from '../components/quiz/Answers';
import Questions from '../components/quiz/Questions';

function QuizContainer({ planets }) {

  const [quizzes, setQuizzes] = useState([]);


  function getQuizzes() {
    fetch('http://localhost:9000/api/quizzes')
      .then(res => res.json())
      .then(data => setQuizzes(data))
  }

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <>
      <h1>I'm the quiz container</h1>
      <Questions quizzes={quizzes} />
      <Answers />
    </>
  )

}

export default QuizContainer;