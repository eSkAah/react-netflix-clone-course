import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import axios from "axios";
import {AppDispatch} from "./store";

const apiRequests = {
    mostPopularMoviesReq: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`,
    topRatedMoviesReq: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
}

// Var dans le redux loading Boolean
// lors du dispatch du init  dispatch = true
//.then  .catch .celui-la dispatch=false
//Create component de Loading et le faire apparaitre quand ca passe a false
//PromiseAll() a ajouter


interface IMovie {
//définir le movie
}

interface IMoviesState {
    listPopular: any[],
    listMostViewed: any[]
}

const initialState: IMoviesState = {
    listPopular : [],
    listMostViewed: []
}

const setListPopularState = (state:IMoviesState, action:any) => {
    state.listPopular = action.payload
}

const setListMostViewsState = (state:IMoviesState, action:any) => {
    state.listMostViewed = action.payload
}

export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
        setListPopular: (state, action ) => setListPopularState(state, action),
        setListMostView:(state, action) => setListMostViewsState(state, action)
    }
})

export const { setListPopular } = moviesSlice.actions

export const fetchMovies = () => (dispatch:AppDispatch) => {
       axios.get(apiRequests.mostPopularMoviesReq)
           .then((res) => {
               dispatch(setListPopular(res.data.results))
       })

    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=28c7369878351f699a0b6ec504649508&language=en-US&page=1")
        .then((res) => {
            dispatch(setListPopular(res.data.results))
        })


}



export default moviesSlice.reducer




