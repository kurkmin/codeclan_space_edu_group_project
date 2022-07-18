import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph({planets}) {

  const planetNames = planets.map(planet => planet.englishName);
  const planetGravities = planets.map(planet => planet.gravity);

  const data = {
    labels: [...planetNames],
    datasets: [
      {
      label: 'Gravity',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [...planetGravities]
    },
    // {
    //   label: "Your Weight",
    //   type: "line",
    //   borderColor: "#8e5ea2",
    //   data: [4,6,8,10,12,10,8,10]
    // }
  ]
  };

  return (
  <div>
    <h2>Space Stats:-</h2>
    <Bar 
      type='bar'
      data={data}
      width={100}
      height={50}
      options={{maintainAspectRatio: true}}
    />
  </div>
)

}


export default BarGraph;