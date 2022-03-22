import React, {useState} from 'react'
import translate from "../../translation/translate";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/netflix-logo.png";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import './navbar.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setAppLanguage} from "../../redux/user.reducer";
import Grid from "@mui/material/Grid";

interface IMember {
    id: number,
    name: string,
    picture: string,
    wishlist: []
}

const Navbar = () => {

    const dispatch = useAppDispatch();
    const [isScrolled, setIsScrolled] = useState<boolean>(true);
    const appLanguage = useAppSelector((state) => state.user.appLanguage);
    const isLogged = useAppSelector((state) => state.user.isLogged);

    const [member, setMember] = useState<IMember>({id: 0, name: "", picture: "", wishlist: []});
    let connectedMemberInfos;

    console.log(member.name)
    if (isLogged && member.name != "") {
        let userSto = localStorage.getItem("user") as string;
        let memberSto = localStorage.getItem("member") as string;
        if (userSto) {
            let user = JSON.parse(userSto);
            let memberId = JSON.parse(memberSto);
            setMember(user.members[memberId])
            console.log(member);
        }
    }

    window.onscroll = () => {
        window.scrollY !== 0 ? setIsScrolled(false) : setIsScrolled(true)
        return () => (window.onscroll = null);
    };

    const handleLanguageChange = (e: any) => {
        dispatch(setAppLanguage(e.target.value))
    }

    return (
        <AppBar className={isScrolled ? "notScrolled" : "scrolled"}
                style={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar disableGutters>
                <Grid container sx={{px: '25px'}}>

                    <Grid item xs={5} lg={1}>
                        <Link to={isLogged ? '/movies' : '/'}><img className="logo" src={logo}
                                                                   alt="logo-netflix"/></Link>
                    </Grid>

                    {isLogged &&
                        <Grid item lg={7}>
                            <ul className='navigation-bar'>
                                <li>
                                    {/* TODO: Change route if Logged / Not logged */}
                                    <Link to={'/movies'}>{translate('home')}</Link>
                                </li>
                                <li>
                                    <Link to={'/movies'}>{translate('movies')}</Link>
                                </li>
                                <li>
                                    <Link to={'/tvshow'}>{translate('tvshow')}</Link>
                                </li>
                                <li>
                                    <Link to={'/latest'}>{translate('latest')}</Link>
                                </li>
                                <li>
                                    <Link to={'/mylist'}>{translate('wishlist')}</Link>
                                </li>
                            </ul>
                        </Grid>}

                    {isLogged ?

                        <Grid item sx={{ml: 'auto', mt: '30px'}}>
                            <div className="nav_icon">
                                <img src={member.picture}
                                     alt="Hello"/>
                            </div>
                        </Grid>

                        :

                        <Grid item sx={{ml: 'auto', mt: '30px'}}>
                            <div className="left">
                                <div className="select-menu">
                                    <LanguageIcon fontSize='inherit'/>
                                    <select value={appLanguage} onChange={handleLanguageChange}>
                                        <option value="fr-FR">Français</option>
                                        <option value="en-US">English</option>
                                    </select>
                                </div>
                                <Button variant="contained" color="error"><Link to='/login'>{translate('signin')}</Link></Button>
                            </div>
                        </Grid>
                    }


                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;