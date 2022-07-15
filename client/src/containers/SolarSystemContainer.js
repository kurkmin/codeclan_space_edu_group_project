import React, { useEffect } from 'react';
import FunFacts from '../components/solar/FunFacts';
import PlanetDetail from '../components/solar/PlanetDetail';
import PlanetSelector from '../components/solar/PlanetSelector';



function SolarSystemContainer({ planets }) {



  return (
    <>
      <h1> Container </h1>
      <PlanetSelector />
      <PlanetDetail />
      <FunFacts />
    </>
  )  
}

export default SolarSystemContainer;