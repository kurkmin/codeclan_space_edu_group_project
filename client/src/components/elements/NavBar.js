import React from 'react';

const NavBar = () => {
  return (
    <>
      <ul className='navigation'>
        <li><a href='/'>Home Page</a></li>
        <li><a href='/explore'>Explore</a></li>
        <li><a href='/quizzes'>Quiz</a></li>
      </ul>
    </>
  )
}

export default NavBar;