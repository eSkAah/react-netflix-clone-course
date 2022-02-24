import React from 'react';
import './home.css';
import Navbar from '../Navbar/Navbar';
import Featured from '../Featured';

/* STYLE */
import bg from '../../assets/home-background.jpg'
import CssBaseline from '@mui/material/CssBaseline';


//TODO Barre affiché uniquement lorsque conecté

const Home = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <div className="home-bg">
                <img src={bg} alt="logo-netflix" />
            </div>
            <Featured />
        </>
    );
}

export default Home;