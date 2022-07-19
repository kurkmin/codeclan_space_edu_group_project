import React, { useState, useEffect } from 'react';
import Feedback from '../components/quiz/Feedback';
import Questions from '../components/quiz/Questions';
import PlanetSelector from '../components/solar/PlanetSelector';

function QuizContainer({ planets, planet, getSelectedPlanet, formData }) {

  const [quizzes, setQuizzes] = useState([]);
  const [constructedQuizzes, setConstructedQuizzes] = useState([]);
  const [answerBoolean, setAnswerBoolean] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [planetMoons, setPlanetMoons] = useState("");
  
  const answerPaths = [planet.gravity, planet.name, planetMoons, planet.meanRadius, planet.density]
  // const answerPaths = ["Answer paths"]
  

  const handleSubmit = (formData) => {
    // const question_check = 
    let index = formData.questionId
   
    if (answerPaths[index] == formData.inputAnswer) {
      setAnswerBoolean(true)
    }

    else {
      setAnswerBoolean(false)
    }
  }

  const checkMoons = (planet) => {
    if (planet.moons !== null) {
      setPlanetMoons("yes")
    }
  else {
    setPlanetMoons("no")

  }
  }

  const planetName = planet.englishName
  const quizList = quizzes.map((quiz) => {
    return (
      quiz.question + planetName + "?"
    )
  })


  // const questionOneCheck = () {
  //   if (quiz[0]. )
  // }


  function getQuizzes() {
    fetch('http://localhost:9000/api/quizzes')
      .then(res => res.json())
      .then(data => setQuizzes(data))
      .then(setConstructedQuizzes(quizList))
  }

  useEffect(() => {
    getQuizzes();
  }, []);

  useEffect(() => {
    setConstructedQuizzes(quizList)
  }, [planet]);

  useEffect(() => {
    setCorrectAnswers(answerPaths)
  }, [planet])

  useEffect(() => {
    checkMoons(planet)
  }, [planet])

  return (
    <section className='container container-quiz'>
      <h1>Please select a quiz!</h1>
      <PlanetSelector planets={planets} getSelectedPlanet={getSelectedPlanet} />
      <Questions handleSubmit={handleSubmit} answerBoolean={answerBoolean} planets={planets} planet={planet}
        quizzes={constructedQuizzes} correctAnswers={correctAnswers}/>
      <Feedback quizzes={quizzes} answerBoolean={answerBoolean} />
    </section>
  )

}

export default QuizContainer;