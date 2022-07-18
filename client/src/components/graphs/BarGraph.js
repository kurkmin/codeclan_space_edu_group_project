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

function BarGraph() {

  const data = {
    labels: ['Jan', 'Feb'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 70]
    }]
  };

  return (
  <div>
    <h2>space bar</h2>
    <Bar 
      data={data}
      width={100}
      height={50}
      options={{maintainAspectRatio: false}}
    />
  </div>
)

}


export default BarGraph;