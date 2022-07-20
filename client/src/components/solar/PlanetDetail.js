import React from 'react';

import styled from 'styled-components';

const PlanetDetailBox = styled.div`
  background-color: rgba(0,0,0, .6);
  padding: 2rem;
  grid-area: detail;
  border: 1px solid #fff;


  & ul {
    list-style-type: none;
  }

`;

const ImageBox = styled.div`
  grid-area: images;
  border: 1px solid #fff;
`;

function PlanetDetail({ planet, user }) {

  // TEMP: Bring in user mass from users blobject.
  // If used this could be moved to a helpers file.  Keep Britain Tidy!
  const userMass = user ? user.mass : 100;
  const userWeight = ((userMass / 9.81) * planet.gravity).toFixed(0);

  if (!planet.englishName) return "Please Select a Planet.";
  // console.log(planet.moons)


  
  if (planet.moons === null){
    planet.moons = [];
  } 
  
  const moonList = planet.moons.slice(0, 10).map( (moon) => {
    return(
      <li>{moon.moon}</li>
      )     
  })


  const descriptions = {
        Mercury :{
          description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon.'
        },
        Venus: {
          description: 'Venus is the second planet from the Sun and is Earth\’s closest planetary neighbor. It\’s one of the four inner, terrestrial (or rocky) planets, and it\’s often called Earth\’s twin because it\’s similar in size and density.'
        },
        Earth: {
          description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that\’s inhabited by living things.'
        },
        Mars: {
          description: 'Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.'
        },
        Jupiter: {
          description: 'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth.'
        },
        Saturn: {
          description: 'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.'
        },
        Uranus: {
          description: 'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. '
        },
        Neptune: {
          description: 'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.'
        },
        solarSystem: {
          description: ''
        }
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  return (
    <>
      <PlanetDetailBox>
        <h1 className='detail-planet-name'>{planet.englishName}</h1>
        <p>{descriptions[planet.englishName].description}</p>
        <h3>Gravity:</h3>

        <ul className='planet-detail__stats'>
          <li><span></span> {planet.gravity}</li>
          <li><span>{planet.englishName} is a </span>{planet.isPlanet ? "Proper Planet" : "Wannabe Rock"}</li>
          <li><span>Your Weight on {planet.englishName} would be {userWeight} kg</span> </li>
          <li>The average surface temperature in Kelvin is {planet.avgTemp} Kelvin</li>
          <li>The average surface temperature in Celsius is {planet.avgTemp - 273} &deg;C</li>
          <li><a href='https://www.amazon.co.uk/s?k={planet.englishName}&amp;crid=1TQ5R2QZSRNMQ'>
            Buy {planet.englishName} Books Now on Amazon
          </a></li>
        </ul>

        <h3>There are {planet.moons.length} Moons orbiting {planet.englishName}, inlcuding:-</h3>
        <ul className='moon-detail'>{moonList}</ul>
      </PlanetDetailBox>

      <ImageBox>
        <img src={planet.imageOne.links[0].href} alt={planet.imageOne.data[0].nasa_id} />
        <p>{truncateString(planet.imageOne.data[0].description, 200)}</p>
      </ImageBox>
      
    </>
  );

}

export default PlanetDetail;