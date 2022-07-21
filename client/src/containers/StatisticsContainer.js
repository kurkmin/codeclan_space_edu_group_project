import React, {useEffect, useState} from "react";

import BarGraph from '../components/graphs/BarGraph';
import styled from "styled-components";

const GraphHeaderBox = styled.div`
  margin: 4rem 4rem 6rem 4rem;

  & p {
    font-size: 2.4rem;
  }

`;

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


  const graphStyle = {
    backgroundColor: 'rgba(255, 187, 0, 0.924)',
    borderColor: 'rgba(255, 72, 0, 1)',
    borderWidth: 1,
    hoverBackgroundColor:'rgba(255,99,132,0.8)',
    hoverBorderColor: 'rgba(255, 72, 0, 1)',

  }


  const [gravityData, setGravityData] = useState(null);
  function getGravity() {
    if (planetNames) {
      const data = {
        labels: [...planetNames],
        datasets: [{
            label: 'Gravity',
            type: 'bar',
            backgroundColor: graphStyle.backgroundColor,
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: graphStyle.backgroundColor,
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: planets.map(planet => planet.gravity),
            yAxisID: 'A'
          },
          {
            label: 'User Weight',
            type: 'line',
            borderColor: graphStyle.borderColor,
            backgroundColor: graphStyle.backgroundColor,
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
      }
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
        backgroundColor: 'rgba(86, 190, 255, 1)',
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
            backgroundColor: 'hsla(266, 100%, 49%, 0.882)',
            borderColor: 'rgba(128,128,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'hsla(266, 100%, 35%, 0.882)',
            hoverBorderColor: 'hsla(266, 100%, 81%, 0.882)',
            data: planets.map(planet => planet.perihelion)
          },
          {
            label: 'Aphelion',
            type: 'bar',
            backgroundColor: 'hsla(300, 100%, 50%, 0.882)',
            borderColor: '#ffbeffff',
            borderWidth: 1,
            hoverBackgroundColor: 'hsla(300, 100%, 36%, 1)',
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
          backgroundColor: 'hsla(75, 100%, 50%, 0.733)',
          borderColor: 'hsla(163, 88%, 94%, 1)',
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
          backgroundColor: 'hsla(35, 100%, 50%, 0.62)',
          borderColor: '#ffffffff',
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
        text: 'Day Length (Earth Hours)',
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
          backgroundColor: '#ff000063',
          borderColor: '#ff9d9dff',
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
      scales: {
        x: {
          text: 'Test'
        }
      }
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
      <GraphHeaderBox>
        <h2>Stella Statistics</h2>
        <p>Explore the world using numbers and discover fun facts about the Solar System.</p>
      </GraphHeaderBox>

      <main className="main-grid stats-grid">
        <BarGraph title="Gravitation Force" data={gravityData} options={gravityOptions}/>
        <BarGraph title="Number of Moon by Planet" data={planetMoons} options={moonOptions}/>
        <BarGraph title="Distance from the Sun" data={distanceFromSun} options={distanceOptions}/>
        <BarGraph title="Average Surface Temperatures" data={averageSurfaceTemp} options={temperatureOptions}/>
        <BarGraph title="Day Length" data={dayLength} options={dayOptions}/>
        <BarGraph title="Year Length (Earth Days)" data={yearLength} options={yearOptions}/>
      </main>
    </>
    
  )

}

export default StatisticsContainer;