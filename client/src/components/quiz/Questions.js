import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuestionBox = styled.div`
  grid-area: questions;
`;

function Questions({ quizzes, handleSubmit, answerBoolean , correctAnswers, planet}) {

  const [selectedAnswer, setSelectedAnswer] = useState()
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    newFormData["questionId"] = e.target.id;
    setFormData(newFormData);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
  }

  const quizzesSelectList = quizzes.map((quiz, index) => {
    return (

      <li key={index}>{quiz}
        <form onSubmit={onSubmit}>
          <input type="hidden" name="questionId" value={index} />
          <select name="inputAnswer" id={index} onChange={onChange} type="text" value={selectedAnswer} >
            <option defaultValue="">Please Select</option>
            <option value="wrong">Some nonsense</option>
            <option value={quiz.answer}>{correctAnswers[index]}</option> 
          </select>
          <input onChange={onSubmit} type="submit" value="Check" />

        </form>
      </li>
    )
  });


  const quizzesList = quizzes.map((quiz, index) => { /* Leaving this in now as an emergency fallback but the select works instead */
    return (
      <li key={index}>{quiz}
        <form onSubmit={onSubmit}>
          <input type="hidden" name="questionId" value={index} />
          <input name="inputAnswer" id={index} onChange={onChange} type="text" value={selectedAnswer} />
          <input type="submit" value="Check" />
        </form>
      </li>
    )
  });

  return (
    <div className="quiz-questions">
      <ul>
        {quizzesSelectList}
      </ul>
    </div>
  )
}

export default Questions;