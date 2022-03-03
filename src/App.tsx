/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from "./redux/hooks";
import {fetchMovies} from "./redux/movies.reducer";
import {Routes, Route} from 'react-router-dom'
import { Il8nProvider} from './translation';
import Row from "./components/Row";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Browser from "./components/Browser/Browser";

const App = () => {

    //Appel des movies dans redux a prendre pour la page principale quand connecté
    const dispatch = useAppDispatch();
    const moviesMostPopular = useAppSelector((state) => state.movies.listPopular)
    const moviesTopRated = useAppSelector((state) => state.movies.listTopRated)
    const appLanguage = useAppSelector((state) => state.user.appLanguage )


    return(
        <>
            <Il8nProvider locale={appLanguage}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/browser' element={<Browser />} />
                </Routes>
            </Il8nProvider>
        </>
    )
}

export default App;