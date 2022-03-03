import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {AppDispatch} from "./store";

const apiRequests = {
    mostPopularMoviesReq: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`,
    topRatedMoviesReq: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    mostPopularTvReq : `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    topRatedTvReq : `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
}

// Var dans le redux loading Boolean
// lors du dispatch du init  dispatch = true
//.then  .catch .celui-la dispatch=false
//Create component de Loading et le faire apparaitre quand ca passe a false
//PromiseAll() a ajouter

//Definition de l'interface
interface IUsers {
    appLanguage: string,
    userList: any[]
}

const initialState: IUsers = {
    appLanguage:"fr-FR",
    userList: [
        {
            id:0,
            name: 'John'
        },
        {
            id:1,
            name: 'Marie'
        },
        {
            id:2,
            name: 'Morgan'
        }
    ]
}


const setAppLanguageState = (state:IUsers, action:any) => {
    state.appLanguage = action.payload;
}

const setUserListState = (state:IUsers, action:any) => {
    state.userList = action.payload;
}

//Definition des setter que tu veux rendre dispo
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setAppLanguage: (state, action ) => setAppLanguageState(state, action),
        setUserList: (state, action ) => setUserListState(state, action)

    }
})

//Dispatchable
export const { setAppLanguage, setUserList } = userSlice.actions;

export default userSlice.reducer




