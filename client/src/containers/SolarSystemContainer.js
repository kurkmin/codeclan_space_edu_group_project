import React from 'react';
import FunFacts from '../components/solar/FunFacts';
import PlanetDetail from '../components/solar/PlanetDetail';
import PlanetSelector from '../components/solar/PlanetSelector';



function SolarSystemContainer({ planets, planet, getSelectedPlanet, wikiPlanetData, user }) {

  // const [planet, setPlanet] = useState({});

  // const getSelectedPlanet = ( id ) => {
  // const selectedPlanet = planets[id];
  // setPlanet(selectedPlanet);
  // }


  return (
    <main className='main-grid planet-grid'>
      <PlanetSelector planets={planets} getSelectedPlanet={getSelectedPlanet}/>
      <PlanetDetail planet={planet} wikiData={wikiPlanetData} user={user}/>
      <FunFacts />
    </main>
  )  
}

export default SolarSystemContainer;