import React, { useState, useEffect } from 'react';
import Feedback from '../components/quiz/Feedback';
import Questions from '../components/quiz/Questions';
import PlanetSelector from '../components/solar/PlanetSelector';

function QuizContainer({ planets, planet, getSelectedPlanet }) {

  const [quizzes, setQuizzes] = useState([]);
  const [answerBoolean, setAnswerBoolean] = useState(null);
  const [constructedQuizes, setConstructedQuizzes] = useState([]);

  const handleSubmit = (submittedAnswer) => {
    const question_check = quizzes.find(quizzes => submittedAnswer.questionId == quizzes._id)
    if (question_check.answer == submittedAnswer.inputAnswer) {
      setAnswerBoolean(true)
    }
    else {
      setAnswerBoolean(false)
    }
  }

  // function createQuestions(planet) {
  //   quizzes.map((quiz) => {
  //     if (planet == null) {
  //       return ""
  //     }
  //     else {
  // console.log(quiz)
  // console.log(planet.englishName)
  // }


  //   })
  // }


  // test 1

  // function constructQuizList() {
  const planetName = planet.englishName
  const quizList = quizzes.map((quiz) => {
    return (
      quiz.question + planetName
    )
  })
  // }

  // test 2 

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

  // useEffect(() => {

  // }, [planet]);


  return (
    <section className='container container-quiz'>
      <h1>I'm the quiz container</h1>
      {/* <p>{console.log(constructQuizList)}</p> */}
      {/* <p>{console.log(planetName)}</p> */}
      {/* <p>{console.log(planet)} </p> */}
      {console.log(quizList)}
      {console.log(constructedQuizes)}
      <>{quizList}</>
      <PlanetSelector planets={planets} getSelectedPlanet={getSelectedPlanet} />
      <Questions handleSubmit={handleSubmit} quizzes={quizzes} answerBoolean={answerBoolean} planets={planets} planet={planet}
      />
      <Feedback quizzes={quizzes} answerBoolean={answerBoolean} />
    </section>
  )

}

export default QuizContainer;