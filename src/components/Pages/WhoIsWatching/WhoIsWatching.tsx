import './WhoIsWatching.css';
import React from "react";

import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import WiwUser from "./WiwUser/WiwUser";

import Grid from '@mui/material/Grid';
import {setIsLogged} from "../../../redux/user.reducer";


const WhoIsWatching = () => {

    const dispatch = useAppDispatch();

    const isLogged = useAppSelector((state) => state.user.isLogged);
    const users = useAppSelector((state) => state.user.userList);
    const members = users[0].members;

    function handleIsLoggedChange() {
        dispatch(setIsLogged(true))
    }

    //TODO : Retirer les boutons de la Navbar quand connecté
    //Rediriger vers la page MoviesBrower quand le click est fait
    //Stocker les informations des membres dans le local storage

    return (
        <>
            <Grid container
                  justifyContent="center"
                  sx={{
                      color: 'white',
                      fontSize: '30px',
                      mt: '7%'
                  }}>
                <h1>Qui est-ce ?</h1>
            </Grid>
            <Grid container
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
            >
                {members.map((member, key) =>
                    <Grid onClick={handleIsLoggedChange} key={key} item xs={10} sm={1}>
                        <WiwUser memberInfos={member}/>
                    </Grid>
                )}
            </Grid>


        </>
    )
}

export default WhoIsWatching;