import React, {useState} from 'react'

/**************** STYLE IMPORTS ****************/
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/netflix-logo.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import './navbar.css'
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setAppLanguage} from "../../redux/user.reducer";

/**************** STYLE *****************/


//TODO : Array de languages a boucler sur le select


const Navbar = () => {

    const dispacth = useAppDispatch();
    const appLanguage = useAppSelector((state) => state.user.appLanguage)

    const handleLanguageChange = (e: any) => {
        dispacth(setAppLanguage(e.target.value))
    }


    /**************** GLOBAL VARIABLES ****************/
    const [isScrolled, setIsScrolled] = useState<boolean>(true);


    /**************** METHODS ****************/
    window.onscroll = () => {
        window.scrollY !== 0 ? setIsScrolled(false) : setIsScrolled(true)
        return () => (window.onscroll = null);
    };

    return (
        <AppBar className={isScrolled ? "notScrolled" : "scrolled"}
                style={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar disableGutters>
                <img className="logo" src={logo} alt="logo-netflix"/>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    <ul className='navigation-bar'>
                        <li>
                            {/* TODO: Change route if Logged / Not logged */}
                            <Link to={'/movies-browser'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Films</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </Box>
                <div className="left">
                    <div className="select-menu">
                        <LanguageIcon fontSize='inherit'/>
                        <select value={appLanguage} onChange={handleLanguageChange}>
                            <option value="fr-FR">Français</option>
                            <option value="en-US">English</option>
                        </select>
                    </div>
                    <Button variant="contained" color="error"><Link to='/login'>S'identifier</Link></Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;