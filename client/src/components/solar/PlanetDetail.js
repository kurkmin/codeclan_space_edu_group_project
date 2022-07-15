import React from 'react';

function PlanetDetail({ planet }) {

  // TEMP: Bring in user mass from users blobject.
  const userMass = 100;
  const userWeight = (userMass * planet.gravity).toFixed(0);

  if (!planet.englishName) return "Please Select a Planet.";

  return (
    <div className='planet-detail'>
      <h2>I'm the planet {planet.englishName}</h2>
      <ul className='planet-detail__stats'>
        <li><span>Gravity:</span> {planet.gravity}</li>
        <li><span>{planet.englishName} is a </span>{planet.isPlanet ? "Proper Planet" : "Wannabe Rock"}</li>
        <li><span>Your Weight on {planet.englishName}</span> 
          {userWeight}KG 
          {userWeight > 1000 ? ` That's ${userWeight / 1000} Metric Tons!` : " High Protien Sakes Link"}
        </li>
      </ul>
    
    </div>
  );

}

export default PlanetDetail;