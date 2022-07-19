import React, {useState} from "react";

import BarGraph from '../components/graphs/BarGraph';

function StatisticsContainer({planets, users}) {
  const planetNames = planets.map(planet => planet.englishName)
  // const userweight = users[0].mass
  // const userMassPerPlanet = planets.map(planet => (userweight / 9.81) * planet.gravity)

  const [gravityData, setGravityData] = useState({
    labels: [...planetNames],
    datasets: [{
      label: 'Gravity',
      type: 'bar',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: planets.map(planet => planet.gravity)
    }]
  });
  const gravityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gravities in our Solar System',
        position: 'bottom',
      },
    },
  };

  const [planetMoons, setPlanetMoons] = useState({
    labels: [...planetNames],
    datasets: [{
      label: 'Moons',
      type: 'bar',
      backgroundColor: 'rgba(0,0,200,0.2)',
      borderColor: 'rgba(0,0,200,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,0,200,0.4)',
      hoverBorderColor: 'rgba(0,0,200,1)',
      data: planets.map(planet => planet.moons ? planet.moons.length : 0)
    }]
  });
  const moonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Moons on each of the Planets',
        position: 'bottom',
      },
    },
  };

  return (
    <>
      <BarGraph data={gravityData} options={gravityOptions}/>
      <BarGraph data={planetMoons} options={moonOptions}/>
    </>
  )

}

export default StatisticsContainer;