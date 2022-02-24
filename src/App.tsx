/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from "./redux/hooks";
import {fetchMovies} from "./redux/movies.reducer";
import {Routes, Route, Link} from 'react-router-dom'

import { Il8nProvider, LOCALES} from './translation';

import Row from "./components/Row";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {

    const dispatch = useAppDispatch();
    const moviesMostPopular = useAppSelector((state) => state.movies.listPopular)
    const moviesTopRated = useAppSelector((state) => state.movies.listTopRated)
    const appLanguage = useAppSelector((state) => state.user.appLanguage )

    const handleClick = () => {
        dispatch(fetchMovies());
    }

    return(
        <>
            <Il8nProvider locale={appLanguage}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Row moviesMp={moviesMostPopular} title={"Most Popular :"} />
                <button onClick={handleClick}>Fetch</button>
            </Il8nProvider>
        </>
    )
}

export default App;