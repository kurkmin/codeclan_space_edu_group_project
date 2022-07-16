import React from 'react';

function Questions({ quizzes }) {

  const quizzesList = quizzes.map((quiz) => {
    return quiz.question
  });

  return (
    <div className="quiz-questions">{quizzesList}</div>
  )

}

export default Questions;