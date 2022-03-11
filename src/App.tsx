/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {useAppSelector} from "./redux/hooks";
import {Route, Routes} from 'react-router-dom'
import {Il8nProvider} from './translation';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Browser from "./components/Browser/Browser";
import MoviesBrowser from "./components/MoviesBrowser/MoviesBrowser";
import WhoIsWatching from "./components/WhoIsWatching/WhoIsWatching";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    const appLanguage = useAppSelector((state) => state.user.appLanguage)

    return (
        <>

            <Navbar/>
            
            <Il8nProvider locale={appLanguage}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/browser' element={<Browser/>}/>
                    <Route path='/movies-browser' element={<MoviesBrowser/>}/>
                    <Route path='/whoiswatching' element={<WhoIsWatching/>}/>
                </Routes>
            </Il8nProvider>
        </>
    )
}

export default App;