import React from 'react';

function Homepage() {

  return (
    <>

      <div class="solar-system-splash">
          
        <div class="solar-system">
          <div class="transit">     
          </div>
        </div>
        

        <div class="transit-heading">
          <h1>SpaceClan Discover</h1>
          <h2>Hello, Earthling !</h2>
          <p class="button">
            <a href="/explore"><button class="button__button button-slide">Make it So, Number One &gt;</button></a>
          </p>
        </div>

        <div class="astro">
          <img class="planet-animation border-radius-50" width="200" src="/images/earth_large.png" alt="The Earth from space, gently orbiting the sun." />
        </div>

      </div>

    </>
  )
}

export default Homepage;