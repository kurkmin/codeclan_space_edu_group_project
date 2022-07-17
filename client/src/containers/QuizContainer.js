import React, { useState, useEffect } from 'react';
import Feedback from '../components/quiz/Feedback';
import Questions from '../components/quiz/Questions';

function QuizContainer({ planets }) {

  const [quizzes, setQuizzes] = useState([]);
  const [answerBoolean, setAnswerBoolean] = useState([]); 

  const handleSubmit = (submittedAnswer) => {
    console.log("FROM CONTAINER " + submittedAnswer.inputAnswer + " ID:" + submittedAnswer.questionId);
    const question_check = quizzes.find(quizzes => submittedAnswer.questionId == quizzes._id)
    if (question_check.answer == submittedAnswer.inputAnswer) {
      console.log("Answer is incorrect")
      setAnswerBoolean(true)
    }
    else {
      console.log("Answer is incorrect")
      setAnswerBoolean(false)
    }
  }

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
      <Questions handleSubmit={handleSubmit} quizzes={quizzes} answerBoolean={answerBoolean}/>
      <Feedback quizzes={quizzes} answerBoolean={answerBoolean}/>
    </>
  )

}

export default QuizContainer;