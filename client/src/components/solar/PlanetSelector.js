import React from 'react';

import styled from 'styled-components';

const PlanetMenu = styled.ul`
  grid-area: menu;
  margin-bottom: 4rem;
  margin-top: 2rem;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  
  & > li {
    margin-left: 2rem;
    /* ?? SVG Icons */
  }
  
  & button {
    position: relative;
    cursor: pointer;
    min-width: 12rem;
    padding: 0.6rem 1.6rem;
    font-size: 1.8rem;
    font-weight: 700;
    border: none;
    border-radius: 0.8rem;
    letter-spacing: 0.4rem;
    background-color: rgba(255, 89, 0, 0.457);
    color: rgb(196, 213, 238);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 1);
    text-align: right;
    background-image: linear-gradient(to right,
       rgba(255, 187, 0, 0),
       rgba(175, 73, 9, 0), 
       #af4809, 
       #af4809, 
       rgba(175, 73, 9, 0.533)
       );
       transition: all 0.4s linear;
  }

  & button:hover {
    text-shadow: 
    3px 3px 3px rgba(255, 255, 255, 1),
    -3px -3px 3px rgba(255, 255, 255, 1);
    background-image: linear-gradient(to right,
       rgba(255, 187, 0, 0.836),
       rgba(175, 114, 9, 1), 
       #af4809, 
       #af4809, 
       rgba(236, 149, 0, 1)
       );
    color: rgba(66, 23, 0, 1);
  }

  & button::before{
    position: absolute;
    z-index: -1;
    bottom: 100%;
    right: 100%;
    border-radius: 50%;
    /* content: url(/images/icons/jupiter.png); */
    content: url('/images/icons/jupiter.png');
    height: 2rem;
    width: 2rem;
    background-image: url('/images/icons/jupiter.png') center center no-repeat;
    transform: scale(8%) translateX(-2rem) translateY(6rem);
    opacity: 0.8;
    transition: all 0.4s linear;
  }

  & button:hover::before {
    opacity: 1;
    transform: scale(8%) translateX(-10rem) translateY(-4rem) rotateY(330deg) rotateZ(310deg);
  }
`;


function PlanetSelector( {planets, getSelectedPlanet} ) {

  const handlePlanetClick = (event) => {
    const planetIndex = event.target.value;
    getSelectedPlanet(planetIndex);
  }

  const planetList = planets.map( ( planet, index ) => {
    return(
      <li className={planet.englishName.toLowerCase()} key={planet.id}>
        <button onClick={handlePlanetClick} value={index} key={planet.id}>{planet.englishName}</button>
      </li>
    );
  });

  return (
    <PlanetMenu>
      {planetList}
    </PlanetMenu>
  );

}

export default PlanetSelector;