import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './movies.reducer';
import userReducer from "./user.reducer";
import tvshowReducer from "./tvshow.reducer";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer,
        tvshow: tvshowReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;