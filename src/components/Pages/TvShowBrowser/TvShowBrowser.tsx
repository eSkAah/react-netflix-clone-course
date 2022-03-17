import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {fetchTvShows} from "../../../redux/tvshow.reducer";

import Banner from "../../Banner/Banner";
import Row from "../../Rows/Row";


const TvShowBrowser = () => {

    const dispatch = useAppDispatch();
    const netflixOriginal = useAppSelector((state) => state.movies.listNetflixOriginal)
    const isFetched = useAppSelector((state) => state.tvshow.isFetched)
    const topRatedTvShow = useAppSelector((state) => state.tvshow.listTopRatedTvReq)
    const popularTvShow = useAppSelector((state) => state.tvshow.listMostPopularTvReq)
    const discoverTvShow = useAppSelector((state) => state.tvshow.discoverTv)
    const onTheAirTvShow = useAppSelector((state) => state.tvshow.onTheAirTvReq)

    console.log(onTheAirTvShow);

    useEffect(() => {
        //Execute when Mounted
        dispatch(fetchTvShows());

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
                    movies={popularTvShow}/>
            <div className="main-content">
                <Row title="Nouveautés"
                     isLarge={false}
                     movies={onTheAirTvShow}/>
                <Row title="Top Rated Tv Show"
                     isLarge={false}
                     movies={topRatedTvShow}/>
                <Row title="Most Popular TV Show"
                     isLarge={false}
                     movies={discoverTvShow}/>
            </div>

        </>
    )

}

export default TvShowBrowser;