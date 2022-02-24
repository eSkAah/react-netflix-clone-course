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

interface IMovie {
//définir le movie
}

interface IMoviesState {
    listPopular: any[],
    listTopRated: any[]
}

const initialState: IMoviesState = {
    listPopular : [],
    listTopRated: []
}

const setListPopularState = (state:IMoviesState, action:any) => {
    state.listPopular = action.payload
}

const setListTopRatedState = (state:IMoviesState, action:any) => {
    state.listTopRated = action.payload
    console.log(action)
}

export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
        setListPopular: (state, action ) => setListPopularState(state, action),
        setListTopRated:(state, action) => setListTopRatedState(state, action)
    }
})

export const { setListPopular, setListTopRated } = moviesSlice.actions;

export const fetchMovies = () => (dispatch:AppDispatch) => {
        axios.get(apiRequests.mostPopularMoviesReq)
           .then((res) => {
               dispatch(setListPopular(res.data.results))
        })

        axios.get(apiRequests.topRatedMoviesReq)
            .then((res) => {
                dispatch(setListTopRated(res.data.results))
        })
}

export default moviesSlice.reducer




