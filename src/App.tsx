/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from "./redux/hooks";
import {fetchMovies} from "./redux/movies.reducer";
import {Routes, Route, Link} from 'react-router-dom'

import Row from "./components/Row";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {

    const dispatch = useAppDispatch();
    const moviesMostPopular = useAppSelector((state) => state.movies.listPopular)
    const moviesTopRated = useAppSelector((state) => state.movies.listTopRated)

    const handleClick = () => {
        dispatch(fetchMovies());
    }

    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>

            <Row moviesMp={moviesMostPopular} title={"Most Popular :"} />
            <button onClick={handleClick}>Fetch</button>
        </>

    )
}

export default App;