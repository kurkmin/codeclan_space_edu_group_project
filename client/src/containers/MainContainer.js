import React, { useState, useEffect } from "react";
import SolarSystemContainer from "./SolarSystemContainer";


const MainContainer = () => {

    const [planets, setPlanets] = useState([
        { name: 'mercury' },
        { name: 'venus' },
        { name: 'earth' },
        { name: 'mars' },
        { name: 'jupiter' },
        { name: 'saturn' },
        { name: 'uranus' },
        { name: 'neptune' }
    ])


    const [planetObjects, setPlanetObjects] = useState([]);

    const frenchAPI = 'https://api.le-systeme-solaire.net/rest/bodies/'


    const getFrenchPlanets = async () => {
        const promises = planets.map(planet => fetch(frenchAPI + planet.name).then(res => res.json()));
        const newPlanets = await Promise.all(promises);
        setPlanetObjects(newPlanets);
    }

    useEffect(() => {
        getFrenchPlanets()
    }, [])


    return (
        <>
            <h1>Main Container</h1>
            <SolarSystemContainer planets={planetObjects} />
        </>
    )
}

export default MainContainer;