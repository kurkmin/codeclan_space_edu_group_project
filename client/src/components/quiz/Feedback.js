import React from 'react';

import styled from 'styled-components';

const InstructionBox = styled.h3`
  position: relative;
  z-index: -1;
  margin-right: 0rem;
  transform: translateX(-50%) translateY(50%);
  padding: 4rem;
  font-size: 3rem;
  color: rgba(255, 234, 0, 0.653);
  background-color: rgba(23, 7, 0, 0.464);
  border: 1px solid rgba(122, 0, 114, 0.548);
  border-radius: 2rem;
  box-shadow: 
    .3rem 0.6rem 1rem 0rem rgba(187, 0, 134, 0.548),
    -.6rem -0.9rem 2rem 0rem rgba(202, 30, 0, 0.548),
    1.3rem 1.6rem 2rem 0rem rgba(187, 0, 134, 0.316),
    -1.6rem -1.9rem 4rem 0rem rgba(202, 30, 0, 0.335)
  ;

`;

function Feedback({ quizzes, answerBoolean }) {

  return (
    <div className='quiz-feedback'>
        {answerBoolean === null? <InstructionBox>Please select a planet and choose your answer.</InstructionBox> : null}
        {answerBoolean == true? <p className='correct'>Your answer was correct! &nbsp;Well done!</p> : null}
        {answerBoolean == false? <p className='incorrect'>Sorry, your answer was not correct! Try again!</p> : null}
    </div>
  )

}

export default Feedback;