import React from 'react';
// import '../App.css';
import './SplashPage.css';

function Homepage() {

  return (
    <>

      <div className="solar-system-splash">
          
        <div className="solar-system">
          <div className="transit">     
          </div>
        </div>
        

        <div className="transit-heading">
          <h1>SpaceClan Discover</h1>
          <h2>Hello, Earthling !</h2>
          <p className="button">
            <a href="/explore"><button className="button__button button-slide">Make it So, Number One &gt;</button></a>
            <a href='/'><button className="button__button button-slide">Replay</button></a>
          </p>
        </div>

        <div className="astro">
          <img className="planet-animation border-radius-50" width="200" src="/images/earth_large_processed.webp" alt="The Earth from space, gently orbiting the sun." />
        </div>

        <div className="astro2">
          <img className="" width="200" src="/images/spaceman.png" alt="An astronaut floating in the cosmos" />
        </div>

        <div className="astro3">
          <img className='planet-animation border-radius-50' width='200px' height='200px' src='/images/venus_processed.webp' alt='venus in orbit around the sun' />
        </div>

      </div>

    </>
  )
}

export default Homepage;