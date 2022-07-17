import React from 'react';

function Homepage({funcNav}) {

  funcNav(() => false);

  return (
    <h1>Homepage!</h1>
  )

}

export default Homepage;