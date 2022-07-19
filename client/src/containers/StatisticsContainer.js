import React, {useEffect, useState} from "react";

import BarGraph from '../components/graphs/BarGraph';

function StatisticsContainer({planets}) {
  const [planetNames, setPlanetNames] = useState(null);

  useEffect(() => {
    if (planets.length !== 0) {
      const testPlanets = planets.map(planet => planet.englishName);
      setPlanetNames(testPlanets);
    }
  }, [planets])

  // const userweight = users[0].mass
  // const userMassPerPlanet = planets.map(planet => (userweight / 9.81) * planet.gravity)

  const [gravityData, setGravityData] = useState(null);
  function getGravity() {
    if (planetNames) {
      const data = {
        labels: [...planetNames],
        datasets: [{
            label: 'Gravity',
            type: 'bar',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: planets.map(planet => planet.gravity),
            yAxisID: 'A'
          },
          {
            label: 'User Weight',
            type: 'line',
            borderColor: 'rgba(255,255,0,1)',
            backgroundColor: 'rgba(0,255,0,0.6)',
            data: planets.map(planet => 90 / 9.8 * planet.gravity),
            yAxisID: 'B'
          }
        ]
      }
      setGravityData(data);
    }
  }
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
    }
  };

  const [planetMoons, setPlanetMoons] = useState(null);
  function getMoons() {
    if (planetNames) {
      const data = {
      labels: [...planetNames],
      datasets: [{
        label: 'Moons',
        type: 'bar',
        backgroundColor: 'rgba(0,0,200,0.4)',
        borderColor: 'rgba(0,0,200,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,0,200,0.6)',
        hoverBorderColor: 'rgba(0,0,200,1)',
        data: planets.map(planet => planet.moons ? planet.moons.length : 0)
      }]
    }
    setPlanetMoons(data);
  }
  }
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

  const [distanceFromSun, setDistanceFromSun] = useState(null);
  function getDistance() {
    if (planetNames) {
      const data = {
        labels: [...planetNames],
        datasets: [{
            label: 'Perihelion',
            type: 'bar',
            backgroundColor: 'rgb(128,128,0,0.4)',
            borderColor: 'rgba(128,128,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(128,128,0,0.6)',
            hoverBorderColor: 'rgba(128,128,0,1)',
            data: planets.map(planet => planet.perihelion)
          },
          {
            label: 'Aphelion',
            type: 'bar',
            backgroundColor: 'rgba(128,0,128,0.2)',
            borderColor: 'rgba(128,0,128,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(128,0,128,0.4)',
            hoverBorderColor: 'rgba(128,0,128,1)',
            data: planets.map(planet => planet.aphelion)
          }
        ]
      }
    setDistanceFromSun(data);
    }
  }
  const distanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distance from the Sun',
        position: 'bottom',
      },
    },
  };

  const [averageSurfaceTemp, setAverageSurfaceTemp] = useState(null)
  function getTemperature(){
    if(planetNames){
      const data = {
        labels: [...planetNames],
        datasets: [{
          label: 'Temperature (°C)',
          type: 'bar',
          backgroundColor: 'rgba(255,255,0,0.2)',
          borderColor: 'rgba(255,255,0,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,255,0,0.4)',
          hoverBorderColor: 'rgba(255,255,0,1)',
          data: planets.map(planet => planet.avgTemp - 273.15)
        }]
      }
      setAverageSurfaceTemp(data);
    }
  }
  const temperatureOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Average Surface Temperature (°C)',
        position: 'bottom',
      },
    },
  };

  const [dayLength, setDayLength] = useState(null);
  function getDays() {
    if (planetNames) {
      const data = {
        labels: [...planetNames],
        datasets: [{
          label: 'Lenght of One Day (Hrs)',
          type: 'bar',
          backgroundColor: 'rgba(255,150,0,0.2)',
          borderColor: 'rgba(255,150,0,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,150,0,0.4)',
          hoverBorderColor: 'rgba(255,150,0,1)',
          data: planets.map(planet => planet.axialTilt)
        }]
      }
      setDayLength(data);
    }
  }
  const dayOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'One Day\'s Duration',
        position: 'bottom',
      },
    },
  };

  const [yearLength, setYearLength] = useState(null)

  function getYear() {

    if(planetNames){
      const data = {
        labels: [...planetNames],
        datasets: [{
          label: 'Length of One Year (Days)',
          type: 'bar',
          backgroundColor: 'rgba(255,0,0,0.2)',
          borderColor: 'rgba(255,0,0,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,0,0,0.4)',
          hoverBorderColor: 'rgba(255,0,0,1)',
          data: planets.map(planet => planet.sideralOrbit)
        }]  
      }

      setYearLength(data)
    }
  }

  const yearOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'One Years\'s Duration',
        position: 'bottom',
      },
    },
  };

  useEffect(() => {
    getGravity()
    getMoons()
    getDistance()
    getTemperature()
    getDays()
    getYear()
  }, [planetNames])

  return (
    <>
      <h2>Space Stats:-</h2>
      <BarGraph data={gravityData} options={gravityOptions}/>
      <BarGraph data={planetMoons} options={moonOptions}/>
      <BarGraph data={distanceFromSun} options={distanceOptions}/>
      <BarGraph data={averageSurfaceTemp} options={temperatureOptions}/>
      <BarGraph data={dayLength} options={dayOptions}/>
      <BarGraph data={yearLength} options={yearOptions}/>
    </>
  )

}

export default StatisticsContainer;