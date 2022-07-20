import React from 'react';

function Feedback({ quizzes, answerBoolean }) {

  return (
    <div className='quiz-feedback'>
        {answerBoolean === null? <h3>Please select a planet and choose your answer.</h3> : null}
        {answerBoolean == true? <p>Your answer was correct! Well done!</p> : null}
        {answerBoolean == false? <p>Sorry, your answer was not correct! Try again!</p> : null}
    </div>
  )

}

export default Feedback;