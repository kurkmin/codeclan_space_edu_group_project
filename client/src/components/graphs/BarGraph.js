import React from "react";
import {Chart as ChartJS} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


function BarGraph({data, options}) {

  return (
  <div>
    <h2>Space Stats:-</h2>
    <Bar 
      type='bar'
      data={data}
      width={100}
      height={50}
      options={options}
    />
  </div>
)
}

export default BarGraph;