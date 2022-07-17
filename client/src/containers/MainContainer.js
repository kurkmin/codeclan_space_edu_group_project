import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';

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

    const [showNav, setShowNav] = useState(true);

    const frenchAPI = 'https://api.le-systeme-solaire.net/rest/bodies/'

    const getFrenchPlanets = async () => {
        const promises = planets.map(planet => fetch(frenchAPI + planet.name)
            .then(res => res.json()));
        const newPlanets = await Promise.all(promises);
        setPlanetObjects(newPlanets);
    }

    useEffect(() => {
        getFrenchPlanets()
    }, [])

    const funcNav = (bool) => {
        setShowNav(bool)
    }

    useEffect(() => {

    }, [showNav])

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
                    showNav && <Header users={users} />
                }
                <Routes>
                    <Route
                        path="/"
                        element={<Homepage funcNav={funcNav}/>}
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
            <h1>Main Container</h1>

        </>
    )
}


export default MainContainer;