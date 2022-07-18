import React from 'react';

function Feedback({ quizzes, answerBoolean }) {

  return (
    <div>
        {answerBoolean === null? <p></p> : null}
        {answerBoolean == true? <p>Your answer was correct! Well done!</p> : null}
        {answerBoolean == false? <p>Sorry, your answer was not correct! Try again!</p> : null}
    </div>
  )

}

export default Feedback;