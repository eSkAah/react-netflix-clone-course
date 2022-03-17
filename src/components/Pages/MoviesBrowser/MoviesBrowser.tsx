import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {fetchMovies} from "../../../redux/movies.reducer";
import './moviesBrowser.css';
import Row from '../../Rows/Row';
import Banner from "../../Banner/Banner";


const MoviesBrowser = () => {

    //TODO : Si langue FR fetch en langue FR, sinon fetch Anglais

    const dispatch = useAppDispatch();
    const netflixOriginal = useAppSelector((state) => state.movies.listNetflixOriginal)
    const popularMovies = useAppSelector((state) => state.movies.listMoviesPopular)
    const topRatedMovies = useAppSelector((state) => state.movies.listMoviesTopRated)
    const mostPopularTv = useAppSelector((state) => state.movies.listMostPopularTvReq)
    const topRatedTv = useAppSelector((state) => state.movies.listTopRatedTvReq)
    const isFetched = useAppSelector((state) => state.movies.isFetched)

    useEffect(() => {
        //Execute when Mounted
        dispatch(fetchMovies());
        console.log(isFetched);
        /*return (
        ) => {
            //Executed when unmount
        };*/

    }, []);//Si cette var change, UpdateComponent

    if (!isFetched) {
        return (
            <div>LOADING...</div>
        )
    }

    return (
        <>
            <Banner title="Banner movies"
                    movies={netflixOriginal}/>
            <div className="main-content">
                <Row title="NETFLIX ORIGINALS"
                     isLarge={false}
                     movies={popularMovies}/>
                <Row title="Top Rated Movies"
                     isLarge={false}
                     movies={topRatedMovies}/>
                <Row title="Most Popular TV Show"
                     isLarge={false}
                     movies={mostPopularTv}/>
                <Row title="Top Rated TV Show"
                     isLarge={false}
                     movies={topRatedTv}/>
            </div>

        </>
    )

}

export default MoviesBrowser;