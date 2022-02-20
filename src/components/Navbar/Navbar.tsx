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

const Navbar = () => {

    /**************** GLOBAL VARIABLES ****************/
    const [isScrolled, setIsScrolled] = useState<boolean>(true);

    /**************** METHODS ****************/
    window.onscroll = () => {
        window.scrollY !== 0 ? setIsScrolled(false):setIsScrolled(true)
        return () => (window.onscroll = null);
    };

    /**************** STYLE *****************/
    const appBar = {
        background: 'rgba(0,0,0,0.0)',
        border: '0px',
        boxShadow: 'none',
        transition: 'all ease-in 5s'
    }

    const appBarScrolled = {
        background: 'linear-gradient(#191919, #050505)',
        height: '98px',
        zIndex: '999',
        boxShadow: 'none',

    }

    return(
        <AppBar style={isScrolled ? appBar : appBarScrolled} position="fixed">
            <Toolbar disableGutters>
                <img className="logo" src={logo} alt="logo-netflix" />
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    <ul className='navigation-bar'>
                        <li>
                            <Link to={'/'}>Accueil</Link>
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
                        <LanguageIcon fontSize='inherit' />
                        <select>
                            <option>Français</option>
                            <option>English</option>
                        </select>
                    </div>
                    <Button variant="contained" color="error"><Link to='/login'>S'identifier</Link></Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;