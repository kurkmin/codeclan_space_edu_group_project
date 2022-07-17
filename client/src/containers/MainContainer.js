import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from "../components/elements/Header";
import Homepage from "./Homepage";
import SolarSystemContainer from "./SolarSystemContainer";
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

    const getFrenchPlanets = async () => {
        const promises = planets.map(planet => fetch(frenchAPI + planet.name)
            .then(res => res.json()));
            // use englishName from french to pull Nasa Images (2)
            // Add nasa img url to planet Object
            
        const newPlanets = await Promise.all(promises);
        // map newPlanets? 
        setPlanetObjects(newPlanets);
        // maybe in here? map planetObjects after saved by french
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
                </Routes>
                {/* footer */}
            </Router>
        </>
    )
}


export default MainContainer;