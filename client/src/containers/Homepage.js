import React from 'react';
import styled from 'styled-components';






function Homepage() {

  return (
    <>

      <div class="solar-system-splash">
          
          <div class="solar-system">
            <div class="transit">     
            </div>
          </div>
        </div>

        <div class="transit-heading">
          <h1>SpaceClan<span></span>Discover</h1>
          <h2>Hello, Universe !</h2>
          <p><a href="/explore"><button>Explore ...</button></a></p>
        </div>

        <div class="astro">
          <img class="astro-img" width="200" src="/images/spaceman.png" alt="Wizzing Astronaut" />
        </div>

    </>
  )
}

export default Homepage;