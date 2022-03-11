import {createSlice} from '@reduxjs/toolkit';

const apiRequests = {
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

//Definition de l'interface
interface IUsers {
    isLogged: boolean,
    appLanguage: string,
    userList: IUser[]
}

interface IUser {
    id: number,
    name: string,
    password: string,
    picture: string
}

const initialState: IUsers = {
    isLogged: false,
    appLanguage: "fr-FR",
    userList: [
        {
            id: 0,
            name: 'John',
            password: 'admin',
            picture: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
        },
        {
            id: 1,
            name: 'Marie',
            password: 'admin',
            picture: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png"
        },
        {
            id: 2,
            name: 'Morgan',
            password: 'admin',
            picture: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        }
    ]
}

const setAppLanguageState = (state: IUsers, action: any) => {
    state.appLanguage = action.payload;
}

const setUserListState = (state: IUsers, action: any) => {
    state.userList = action.payload;
}

const setIsLoggedState = (state: IUsers, action: any) => {
    state.isLogged = action.payload;
}

//Definition des setter que tu veux rendre dispo
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAppLanguage: (state, action) => setAppLanguageState(state, action),
        setUserList: (state, action) => setUserListState(state, action),
        setIsLogged: (state, action) => setIsLoggedState(state, action),

    }
})

//Dispatchable
export const {setAppLanguage, setUserList, setIsLogged} = userSlice.actions;

export default userSlice.reducer




