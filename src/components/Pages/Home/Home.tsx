import React from 'react';
import './home.css';
import Featured from '../../Featured';

import bg from '../../../assets/home-background.jpg'
import CssBaseline from '@mui/material/CssBaseline';

const Home = () => {

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