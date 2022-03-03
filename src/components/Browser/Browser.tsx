import React from 'react';
import './browser.css';
import Navbar from "../Navbar/Navbar";

import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setUserList} from "../../redux/user.reducer"; //A UTILISER POUR AJOUTER DES USERS

const Browser = () => {

    const dispatch = useAppDispatch();
    const userList = useAppSelector((state) => state.user.userList);

    console.log(userList);

    return(
        <>
            <Navbar />
            {userList.map((user:any) => {
                console.log(user.name)
            })}
        </>
    )
}

export default Browser;