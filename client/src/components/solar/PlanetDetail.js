import React from 'react';

import styled from 'styled-components';

const PlanetDetailBox = styled.div`
  background-color: rgba(0,0,0, .6);
  padding: 2rem;
  grid-area: detail;
  border: 1px solid #fff;


  & ul {
    list-style-type: none;
    margin: 0 0 4rem 6rem;
    font-size: 2rem;
  }

  & ul.planet-detail{

    & li{
      padding: 0.6rem 0;
      & span {
        color: #fc0;
      }
    }

  }

  & ul.moons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-left: -3rem;
    justify-content: center;
    align-items: center;
  }

  & ul.moons > li{
    width: 100px;
    height: 100px;
    background-color: aliceblue;
    background-image: url('/images/moon-300.webp');
    background-position: center;
    background-size: cover;
    color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 
      -2px -2px 2px rgba(0, 0, 0, 0.8),
      0px 0px 4px rgba(255,255,255, .8)
      ;
  }

  & p.tagLine{
    font-size: 2.4rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  & h3 {
    text-align:center;
  }

  & a {
    color: rgba(255,255,255, .8);
  }

  & a:hover {
    color: #ffd900e4;
  }
`;

const ImageBox = styled.div`
  grid-area: images;
  border: 1px solid rgba(255,255,255, 0.6);

  & img{
    max-width: 100%;
  }

  & p {
    
    margin: 2rem;
    font-size: 2.4rem;
    line-height: 1.4;
  }
`;

function PlanetDetail({ planet, user }) {

  // TEMP: Bring in user mass from users blobject.
  // If used this could be moved to a helpers file.  Keep Britain Tidy!
  const userMass = user ? user.mass : 100;
  const userWeight = ((userMass / 9.81) * planet.gravity).toFixed(0);

  if (!planet.englishName) {
    return (
      <h2>Please select a planet above</h2>
    );
  }
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
        <p className='tagLine'>{descriptions[planet.englishName].description}</p>
        
        <ul className='planet-detail'>
          <li><span>Gravity</span> {planet.gravity} M/s<sup>2</sup></li>
          <li><span>{planet.englishName}</span> is a <span>{planet.isPlanet ? "Proper Planet" : "Wannabe Rock"}</span></li>
          <li><span>Your Weight</span> on {planet.englishName} would be <span>{userWeight} kg</span> </li>
          <li>The average <span>surface temperature</span> in Kelvin is <span>{planet.avgTemp} &deg;K</span></li>
          <li>The average <span>surface temperature</span> in Celsius is <span>{planet.avgTemp - 273} &deg;C</span></li>
          <li>
            <a href='https://www.amazon.co.uk/s?k={planet.englishName}'>
            Buy {planet.englishName} Books Now on Amazon
          </a>
          </li>
        </ul>

        <h3>

          {planet.moons.length !== 0 ? 
          `There are ${planet.moons.length} Moons orbiting ${planet.englishName}, inlcuding:-` :
           `${planet.englishName} Has No Moons.`}
        </h3>
        <ul className='moons'>{moonList}</ul>
      </PlanetDetailBox>

      <ImageBox>
        <img src={planet.imageOne.links[0].href} alt={planet.imageOne.data[0].nasa_id} />
        <p>{truncateString(planet.imageOne.data[0].description, 200)}</p>
      </ImageBox>
      
    </>
  );

}

export default PlanetDetail;