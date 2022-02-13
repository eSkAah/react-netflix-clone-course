/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from "./Redux/hooks";
import {fetchMovies} from "./Redux/movies.reducer";
import Header from "./components/Header";
import Row from "./components/Row";

const App = () => {

    const dispatch = useAppDispatch();
    const moviesMostPopular = useAppSelector((state) => state.movies.listPopular)
    const moviesTopRated = useAppSelector((state) => state.movies.listTopRated)

    const handleClick = () => {
        dispatch(fetchMovies());
    }


    return(
        <>
            <Row moviesMp={moviesMostPopular} />
            <button onClick={handleClick}>Fetch</button>
        </>

    )
}

export default App;