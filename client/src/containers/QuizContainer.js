import React, {useState} from 'react';
import Answers from '../components/quiz/Answers';
import Questions from '../components/quiz/Questions';

function QuizContainer( {planets }) {

  const [quizzes, setQuizzes] = useState([]);

  async function getQuizzes() {
    const url = 'https://localhost:9000/api/quizzes';
    const response = await fetch(url)
    const data = await response.json();
    setQuizzes(data)
    console.log(quizzes)

  }

  return (
    <>
      <h1>I'm the quiz container</h1>
      <Questions quizzes={quizzes}/>
      <Answers />
    </>
  )

}

export default QuizContainer;