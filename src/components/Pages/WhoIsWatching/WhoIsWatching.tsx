import './WhoIsWatching.css';
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import WiwUser from "./WiwUser/WiwUser";
import Grid from '@mui/material/Grid';
import {setIsLogged} from "../../../redux/user.reducer";
import {useNavigate} from "react-router-dom";
import translate from "../../../translation/translate";


const WhoIsWatching = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user.userList);
    const connectedUserEmail = localStorage.getItem("email");
    const userInfos = users.find(x => x.email === connectedUserEmail);
    const members = userInfos?.members;
    const navigate = useNavigate();

    function handleIsLoggedChange(member: any) {
        localStorage.setItem("member", member.id);
        localStorage.setItem("picture", member.picture);
        dispatch(setIsLogged(true))
        navigate('/movies');
    }

    return (
        <>
            <Grid container
                  justifyContent="center"
                  sx={{
                      color: 'white',
                      fontSize: '30px',
                      mt: '7%'
                  }}>
                <h1>{translate('who_is_watching')}</h1>
            </Grid>
            <Grid container
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
            >
                {members?.map((member, key) =>
                    <Grid onClick={() => handleIsLoggedChange(member)} key={key} item xs={10} sm={1}>
                        <WiwUser memberInfos={member}/>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default WhoIsWatching;