import React from 'react';

function PlanetDetail({ planet }) {

  // TEMP: Bring in user mass from users blobject.
  // If used this could be moved to a helpers file.  Keep Britain Tidy!
  const userMass = 100;
  const userWeight = ((userMass / 9.81) * planet.gravity).toFixed(0);

  if (!planet.englishName) return "Please Select a Planet.";
  console.log(planet.moons)

  // const weightText = "";
 
  // switch (userWeight){
  //   case userWeight < 10:
  //     weightText = "10";
  //   break;

  //   case userWeight < 30:
  //     weightText = "30";
  //   break;

  //   case userWeight < 50:
  //     weightText = "50";
  //   break;

  //   case userWeight < 100:
  //     weightText = "100";
  //   break;

  //   case userWeight < 1000:
  //     weightText = "1000";
  //   break;

    
  // }
  

  
  
  if (planet.moons === null){
    planet.moons = [];
    
  } 
  
  const moonList = planet.moons.map( (moon) => {
    return(
      <li>{moon.moon}</li>
      )     
  })
  return (
    <div className='planet-detail'>
      <h2>I'm the planet {planet.englishName}</h2>
      <img src={planet.imageOne.links[0].href} alt={planet.imageOne.data[0].title} />
      <p>{planet.imageOne.data[0].description}</p>
      <img src={planet.imageTwo.links[0].href} />
      <p>{planet.imageTwo.data[0].description}</p>

      <ul className='planet-detail__stats'>
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
    
    </div>
  );

}

export default PlanetDetail;