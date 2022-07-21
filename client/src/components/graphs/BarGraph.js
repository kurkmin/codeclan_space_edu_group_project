import React from "react";
import {Chart as ChartJS} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

import styled from "styled-components";

const GraphTitle = styled.h3`
  text-align: center;
  opacity: 0.8;

`;

function BarGraph({data, options, title}) {

  if (!data) {
    return null
  }

  return (
  
    <div>
      <GraphTitle>{title}</GraphTitle>
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