import React, { useState } from 'react';

function Questions({ quizzes, handleSubmit, answerBoolean }) {

  const [selectedAnswer, setSelectedAnswer] = useState()
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    newFormData["questionId"] = e.target.id;
    setFormData(newFormData);
    // console.log(formData);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    handleSubmit(formData);
  }


  const quizzesList = quizzes.map((quiz) => {
    return (


      <li key={quiz._id}>{quiz.question}
        <form onSubmit={onSubmit}>
          <input type="hidden" name="questionId" value={quiz._id} />
          <input name="inputAnswer" id={quiz._id} onChange={onChange} type="text" value={selectedAnswer} />

          {/* <select name="inputAnswer" id={quiz._id} onChange={onChange} type="text" value={selectedAnswer} >
            <option value="wrong">La Merde</option>
            <option value={quiz.answer}>{quiz.answer}</option> 
          </select>*/}

          <input type="submit" value="Check" />
        </form>
      </li>
    )
  });

  return (
    <div className="quiz-questions">
      <ul>
        {quizzesList}
      </ul>
    </div>
  )

}

export default Questions;