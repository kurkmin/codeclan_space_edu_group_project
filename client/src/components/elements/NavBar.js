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
    padding: 0.6rem 2rem;
    min-width: 10rem;
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: 0.4rem;
    text-align: center;
    background-color: rgba(0, 238, 255, 0.644);
    color: white;
    text-decoration: none;
    border-radius: 0.6rem;
    transition: all 0.4s linear;
    text-shadow: 2px 4px 2px rgba(0,0,0, 1);
  }
  
  & a:hover{
    background-color: rgba(180, 63, 0, 0.742);
    color: #ffe100ff;
    text-shadow: 
      1px 1px 6px rgba(255, 255, 255, 1),
      2px 4px 2px rgba(0,0,0, 1)
    ;
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