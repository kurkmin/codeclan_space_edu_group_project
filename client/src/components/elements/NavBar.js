import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style-type: none;
  
  display: flex;
  gap: 2rem;
  
  &  li {
    color: white;
    
  }
  
  &  a,
  &  a:visited {
    display: inline-block;
    padding: 0.4rem 2rem;
    width: 10rem;
    font-size: 2.0rem;
    font-weight: 700;
    text-align: center;
    background-color: rgba(255, 255, 255, .4);
    color: white;
    text-decoration: none;

  }

  & a:hover{
    color: #0f0;
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