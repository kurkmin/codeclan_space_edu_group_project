import React from "react";

import BarGraph from '../components/graphs/BarGraph';

function StatisticsContainer({planets}) {

  return (
    <>
      <h1>I'm the container</h1>
      <BarGraph planets={planets}/>
    </>
  )

}

export default StatisticsContainer;