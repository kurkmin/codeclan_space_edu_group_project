import React, { useState, useEffect } from 'react';
import Feedback from '../components/quiz/Feedback';
import Questions from '../components/quiz/Questions';
import PlanetSelector from '../components/solar/PlanetSelector';

function QuizContainer({ planets, planet, getSelectedPlanet }) {

  const [quizzes, setQuizzes] = useState([]);
  const [answerBoolean, setAnswerBoolean] = useState(null);
  const [constructedQuizzes, setConstructedQuizzes] = useState([]);

  const handleSubmit = (submittedAnswer) => {
    const question_check = quizzes.find(quizzes => submittedAnswer.questionId == quizzes._id)
    if (question_check.answer == submittedAnswer.inputAnswer) {
      setAnswerBoolean(true)
    }
    else {
      setAnswerBoolean(false)
    }
  }



  // function constructQuizList() {
  const planetName = planet.englishName
  const quizList = quizzes.map((quiz) => {
    return (
      quiz.question + planetName
    )
  })
  // }


  function getQuizzes() {
    fetch('http://localhost:9000/api/quizzes')
      .then(res => res.json())
      .then(data => setQuizzes(data))
      .then(setConstructedQuizzes(quizList))
    // .then(quizList)
    // .then(console.log(quizList))

  }
  useEffect(() => {
    getQuizzes();
  }, []);

  useEffect(() => {
    setConstructedQuizzes(quizList)
  }, [planet]);


  return (
    <section className='container container-quiz'>
      <h1>I'm the quiz container</h1>
      {/* <p>{console.log(constructQuizList)}</p> */}
      {/* <p>{console.log(planetName)}</p> */}
      {/* <p>{console.log(planet)} </p> */}
      {console.log(quizList)}
      {console.log(constructedQuizzes)}
      <>{quizList}</>
      <PlanetSelector planets={planets} getSelectedPlanet={getSelectedPlanet} />
      <Questions handleSubmit={handleSubmit} answerBoolean={answerBoolean} planets={planets} planet={planet}
        quizzes={constructedQuizzes} />
      <Feedback quizzes={quizzes} answerBoolean={answerBoolean} />
    </section>
  )

}

export default QuizContainer;