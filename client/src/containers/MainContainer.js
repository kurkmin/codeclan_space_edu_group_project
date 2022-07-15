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

    // const [test, setTest] = useState([]);

    const [planetObjects, setPlanetObjects] = useState([]);

    const frenchAPI = 'https://api.le-systeme-solaire.net/rest/bodies/'


    const getFrenchPlanets = async () => {
        const promises = planets.map(planet => fetch(frenchAPI + planet.name).then(res => res.json()));
        const newPlanets = await Promise.all(promises);
        setPlanetObjects(newPlanets);
    }

    // const getPlanets = () => {
    //     return fetch(frenchAPI)
    //         .then(res => res.json())
    //         .then((data) => setTest(data))
    // }
    // const getFrenchPlanets = function () {
    //     const copyPlanets = [planetObjects]
    //     const frenchPlanets = planets.map((planet) => {
    //         const res = await fetch(frenchAPI + planet.name);
    //         const data = await res.json();
    //         copyPlanets.push(data);
    //         setPlanetObjects(copyPlanets);
    //         console.log(planetObjects);
    //     })

    // }

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