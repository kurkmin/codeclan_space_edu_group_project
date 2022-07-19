import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style-type: none;
  
  display: flex;
  gap: 2rem;
  
  &  li {
    display: inline-block;
    color: white;

  }

  &  a,
  &  a:visited {
    width: 100%;
    color: white;
  }

`;

const NavBar = () => {
  return (
    <>
      <NavList>
        <li><a href='/'>Home</a></li>
        <li><a href='/explore'>Explore</a></li>
        <li><a href='/quizzes'>Quiz</a></li>
        <li><a href='/statistics'>Statistics</a></li>
      </NavList>
    </>
  )
}

export default NavBar;