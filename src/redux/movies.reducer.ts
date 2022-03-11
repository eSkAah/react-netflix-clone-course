import {createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from "./store";
import axios from "axios";

const apiRequests = {
    netflixOriginal: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    mostPopularMoviesReq: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`,
    topRatedMoviesReq: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    mostPopularTvReq: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    topRatedTvReq: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
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
    isFetched: boolean,
    listNetflixOriginal: any[],
    listPopular: any[],
    listTopRated: any[],
    listMostPopularTvReq: any[],
    listTopRatedTvReq: any[],
}

const initialState: IMoviesState = {
    isFetched: false,
    listNetflixOriginal: [],
    listPopular: [],
    listTopRated: [],
    listMostPopularTvReq: [],
    listTopRatedTvReq: []
}

const setListNetflixOriginal = (state: IMoviesState, action: any) => {
    state.listNetflixOriginal = action.payload
}

const setListPopularState = (state: IMoviesState, action: any) => {
    state.listPopular = action.payload
}

const setListTopRatedState = (state: IMoviesState, action: any) => {
    state.listTopRated = action.payload
}

const setMostPopularTvState = (state: IMoviesState, action: any) => {
    state.listMostPopularTvReq = action.payload
}

const setTopRatedTvState = (state: IMoviesState, action: any) => {
    state.listTopRatedTvReq = action.payload
}

const setIsFetchedState = (state: IMoviesState, action: any) => {
    state.isFetched = action.payload
}


export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setListOriginal: (state, action) => setListNetflixOriginal(state, action),
        setListPopular: (state, action) => setListPopularState(state, action),
        setListTopRated: (state, action) => setListTopRatedState(state, action),
        setMostPopularTv: (state, action) => setMostPopularTvState(state, action),
        setTopRatedTvReq: (state, action) => setTopRatedTvState(state, action),
        setIsFetched: (state, action) => setIsFetchedState(state, action)
    }
})

export const {
    setListOriginal,
    setListPopular,
    setListTopRated,
    setMostPopularTv,
    setTopRatedTvReq,
    setIsFetched
} = moviesSlice.actions;

export const fetchMovies = () => (dispatch: AppDispatch) => {

    Promise.all([
        axios.get(apiRequests.netflixOriginal),
        axios.get(apiRequests.mostPopularMoviesReq),
        axios.get(apiRequests.topRatedMoviesReq),
        axios.get(apiRequests.mostPopularTvReq),
        axios.get(apiRequests.topRatedTvReq),

    ])
        .then((data) => {
            //TODO : Faire un Setter qui Set automatiquement les bonnes responses dans le bon Setter*
            //TODO : Utiliser un setFetched boolean, pour valider que le fetch est fait
            dispatch(setListOriginal(data[0].data.results));
            dispatch(setListPopular(data[1].data.results));
            dispatch(setListTopRated(data[2].data.results));
            dispatch(setMostPopularTv(data[3].data.results));
            dispatch(setTopRatedTvReq(data[4].data.results));
        })
        .then(() => {
            setTimeout(() => {
                dispatch(setIsFetched(true))
            }, 2000);
        })
        .catch((e) => {
            console.log(e);
        })

}

export default moviesSlice.reducer




