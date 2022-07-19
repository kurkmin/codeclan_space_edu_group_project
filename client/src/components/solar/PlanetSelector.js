import React from 'react';

import styled from 'styled-components';

const PlanetMenu = styled.ul`
  grid-area: menu;
  list-style-type: none;
  display: flex;
`;


function PlanetSelector( {planets, getSelectedPlanet} ) {

  const handlePlanetClick = (event) => {
    const planetIndex = event.target.value;
    getSelectedPlanet(planetIndex);
  }

  const planetList = planets.map( ( planet, index ) => {
    return(
      <li key={planet.id}>
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