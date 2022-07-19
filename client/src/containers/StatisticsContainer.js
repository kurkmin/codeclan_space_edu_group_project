import React from "react";

import BarGraph from '../components/graphs/BarGraph';

function StatisticsContainer({planets, users}) {

  return (
    <>
      <h1>I'm the container</h1>
      <BarGraph planets={planets} users={users}/>
    </>
  )

}

export default StatisticsContainer;