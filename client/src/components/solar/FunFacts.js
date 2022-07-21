import React from 'react';

import styled from 'styled-components';

const FactBox = styled.div`
  grid-area: facts;
`;

function FunFacts() {

  return (
    <FactBox>
      <h2>Funny Facts</h2>
    </FactBox>
  )

}

export default FunFacts;