import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from "styled-components";

import Header from "../components/elements/Header";
import Homepage from "./Homepage";
import SolarSystemContainer from "./SolarSystemContainer";
import StatisticsContainer from "./StatisticsContainer";
import QuizContainer from "./QuizContainer";

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
    const nasaImages = 'https://images-api.nasa.gov/search?description='

    const getFrenchPlanets = async () => {
        const promises = planets.map(planet => fetch(frenchAPI + planet.name)
            .then(res => res.json()));

        const newPlanets = await Promise.all(promises);

        const planetsWithImages = newPlanets.map(planet => fetch(nasaImages + planet.englishName)
            .then(res => res.json())
            .then(data => {
                planet.imageOne = data.collection.items[0];
                planet.imageTwo = data.collection.items[1];
            })
            );
        setPlanetObjects(newPlanets);
        // maybe in here? map planetObjects after saved by french
        // (data.collection.items[0].links[0].href))  
    }

    useEffect(() => {
        getFrenchPlanets()
    }, [])

    // users api imported from local database 

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch("http://localhost:9000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Router>
                {
                    window.location.pathname!=='/' ? <Header users={users} /> : null
                }
                <Routes>
                    <Route
                        path="/"
                        element={<Homepage />}
                    />
                    <Route
                        path="/explore"
                        element={<SolarSystemContainer planets={planetObjects} />}
                    />
                    <Route
                        path="/quizzes"
                        element={<QuizContainer planets={planetObjects} />}
                    />
                    <Route
                        path="/statistics"
                        element={<StatisticsContainer planets={planetObjects} />}
                    />
                </Routes>
                {/* footer */}
            </Router>
        </>
    )
}


export default MainContainer;