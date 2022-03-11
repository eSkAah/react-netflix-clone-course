import React from 'react';
import './home.css';
import Featured from '../Featured';

import {useAppSelector} from "../../redux/hooks";

/* STYLE */
import bg from '../../assets/home-background.jpg'
import CssBaseline from '@mui/material/CssBaseline';


//TODO Barre affiché uniquement lorsque conecté

const Home = () => {

    const isLogged = useAppSelector((state) => state.user.isLogged);

    return (
        <>
            <CssBaseline/>
            <div className="home-bg">
                <img src={bg} alt="logo-netflix"/>
            </div>
            <Featured/>
        </>
    );
}

export default Home;