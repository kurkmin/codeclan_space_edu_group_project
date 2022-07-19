import React, { useEffect, useState } from 'react';
import FunFacts from '../components/solar/FunFacts';
import PlanetDetail from '../components/solar/PlanetDetail';
import PlanetSelector from '../components/solar/PlanetSelector';



function SolarSystemContainer({ planets, planet, getSelectedPlanet }) {

  // const [planet, setPlanet] = useState({});

  // const getSelectedPlanet = ( id ) => {
  // const selectedPlanet = planets[id];
  // setPlanet(selectedPlanet);
  // }

  return (
    <div className='container'>
      <h1> Explore The Planets </h1>
      <PlanetSelector planets={planets} getSelectedPlanet={getSelectedPlanet}/>
      <PlanetDetail planet={planet} />
      <FunFacts />
    </div>
  )  
}

export default SolarSystemContainer;