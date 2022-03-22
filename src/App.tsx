/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {useAppSelector} from "./redux/hooks";
import {Route, Routes} from 'react-router-dom'
import {Il8nProvider} from './translation';

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Pages/Login/Login";
import MoviesBrowser from "./components/Pages/MoviesBrowser/MoviesBrowser";
import WhoIsWatching from "./components/Pages/WhoIsWatching/WhoIsWatching";
import TvShowBrowser from "./components/Pages/TvShowBrowser/TvShowBrowser";
import LatestBrowser from "./components/Pages/LatestBrowser/LatestBrowser";
import MyList from "./components/Pages/MyList/MyList";

const App = () => {

    const appLanguage = useAppSelector((state) => state.user.appLanguage)

    return (
        <>
            <Il8nProvider locale={appLanguage}>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/movies' element={<MoviesBrowser/>}/>
                    <Route path='/whoiswatching' element={<WhoIsWatching/>}/>
                    <Route path='/tvshow' element={<TvShowBrowser/>}/>
                    <Route path='/latest' element={<LatestBrowser/>}/>
                    <Route path='/mylist' element={<MyList/>}/>
                </Routes>
            </Il8nProvider>
        </>
    )
}

export default App;