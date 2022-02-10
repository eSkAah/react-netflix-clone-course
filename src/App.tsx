/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from "./Redux/hooks";
import {fetchMovies} from "./Redux/movies.reducer";

const App = () => {

    const dispatch = useAppDispatch();
    const moviesList = useAppSelector((state) => state.movies.listPopular)

    const handleClick = () => {
        dispatch(fetchMovies());
    }


    console.log(moviesList);

    return(
        <>
            <div>APP Component</div>
            <button onClick={handleClick}>Fetch</button>
        </>

    )
}


export default App;