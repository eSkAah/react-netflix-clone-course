import React from 'react'

import bg from '../../../assets/home-background.jpg'
import LoginForm from "./LoginForm";
import {useAppSelector} from "../../../redux/hooks";

const Login = () => {

    const isLogged = useAppSelector((state) => state.user.isLogged);

    return (
        <>
            <div className="home-bg">
                <img src={bg} alt="logo-netflix"/>
            </div>
            <LoginForm/>
        </>
    )
}

export default Login;