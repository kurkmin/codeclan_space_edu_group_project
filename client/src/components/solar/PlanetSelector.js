import React from 'react';

function PlanetSelector( {planets, getSelectedPlanet} ) {

  const handlePlanetClick = (event) => {
    const planetIndex = event.target.value;
    getSelectedPlanet(planetIndex);
  }

  const planetList = planets.map( ( planet, index ) => {
    return(
      <li>
        <button onClick={handlePlanetClick} value={index} key={planet.id}>{planet.englishName}</button>
      </li>
    );
  });

  return (
    <ul>
      {planetList}
    </ul>
  );

}

export default PlanetSelector;