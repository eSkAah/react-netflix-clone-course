import './WhoIsWatching.css';
import React from "react";

import {useAppSelector} from "../../../redux/hooks";
import WiwUser from "./WiwUser/WiwUser";

import Grid from '@mui/material/Grid';


const WhoIsWatching = () => {

    const isLogged = useAppSelector((state) => state.user.isLogged);
    const users = useAppSelector((state) => state.user.userList);

    console.log(isLogged);
    console.log(users);

    // @ts-ignore
    return (
        <>
            <Grid container sm={12}
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
                {users.map((user) =>
                    <Grid item xs={10} sm={1}>
                        <WiwUser userInfos={user} members={user.members}/>
                    </Grid>
                )}
            </Grid>


        </>
    )
}

export default WhoIsWatching;