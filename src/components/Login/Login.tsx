import React from 'react'
import Navbar from "../Navbar/Navbar";

import bg from '../../assets/home-background.jpg'
import LoginForm from "./LoginForm";

const Login = () => {



    return (
        <>
            <Navbar />
                <div className="home-bg">
                    <img src={bg} alt="logo-netflix" />
                </div>
            <LoginForm/>
        </>
    )
}

export default Login;