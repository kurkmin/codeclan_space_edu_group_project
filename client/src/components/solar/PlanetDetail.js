import React from 'react';

import styled from 'styled-components';

const PlanetDetailBox = styled.div`
  grid-area: detail;
`;

const ImageBox = styled.div`
  grid-area: images;
`;

function PlanetDetail({ planet, wikiData }) {

  // TEMP: Bring in user mass from users blobject.
  // If used this could be moved to a helpers file.  Keep Britain Tidy!
  const userMass = 100;
  const userWeight = ((userMass / 9.81) * planet.gravity).toFixed(0);

  if (!planet.englishName) return "Please Select a Planet.";
  // console.log(planet.moons)


  
  if (planet.moons === null){
    planet.moons = [];
    
  } 
  
  const moonList = planet.moons.map( (moon) => {
    return(
      <li>{moon.moon}</li>
      )     
  })
  return (
    <>
      <PlanetDetailBox>
        
        {/* <p>{planet.imageOne.data[0].description}</p> */}
        
        <ul className='planet-detail__stats'>
          <h1 className='detail-planet-name'>{planet.englishName}</h1>
          <li><span>Gravity:</span> {planet.gravity}</li>
          <li><span>{planet.englishName} is a </span>{planet.isPlanet ? "Proper Planet" : "Wannabe Rock"}</li>
          <li><span>Your Weight on {planet.englishName}</span>
            &nbsp;{userWeight}KG
            {userWeight > 1000 ? ` That's ${userWeight / 1000} Metric Tons!` : `weightText`}
          </li>
          <li>{planet.avgTemp} Kelvin</li>
          <li><button>Buy {planet.englishName} Now on Amazon</button></li>
        </ul>
        <ul className='moon-detail'>{moonList}</ul>
        <p>{planet.imageTwo.data[0].description}</p>
      </PlanetDetailBox>

      <ImageBox>
        <img src={planet.imageTwo.links[0].href} />
        {/* <img src={planet.imageOne.links[0].href} alt={planet.imageOne.data[0].title} /> */}
      </ImageBox>
      
    </>
  );

}

export default PlanetDetail;