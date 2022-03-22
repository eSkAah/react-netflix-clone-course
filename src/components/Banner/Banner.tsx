import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import './Banner.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Grid from "@mui/material/Grid";
import translate from '../../translation/translate';

interface IBanner {
    title: string,
    movies: IMovie[]
}

interface IMovie {
    id: number,
    title: string,
    name?: string,
    original_name?: string,
    overview?: string,
    poster_path: string,
    backdrop_path: string,
}

const Banner = ({title, movies}: IBanner) => {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState<IMovie>();

    function fetchData() {
        setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    let overview = () => {
        if (movie === undefined)
            return 'pas de film';
        else
            return maxDescriptionLength(movie.overview!, 200)
    }

    function maxDescriptionLength(description: string, length: number) {
        return description?.length > length ? description.substring(0, length - 1) + "..." : description
    }

    return (
        <div className="banner"
             style={{
                 backgroundSize: "cover",
                 backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
                 backgroundPosition: "center center"
             }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <Grid container>
                    <Grid item xs={5} md={2} lg={1}>
                        <Button size="large"
                                startIcon={<PlayArrowIcon/>}
                                variant="contained"
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: 'rgb(133, 133, 133)'
                                    }
                                }}>{translate('play')}</Button>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2} sx={{marginLeft: "1%"}}>
                        <Button size="large"
                                startIcon={<InfoIcon/>}
                                variant="contained"
                                sx={{
                                    backgroundColor: 'rgb(133, 133, 133)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: 'rgb(118, 118, 118)'
                                    }
                                }
                                }>{translate('more_infos')}</Button>
                    </Grid>
                </Grid>

                <h3 className="banner_description">
                    {overview()}
                    {/*{maxDescriptionLength(movie.overview!, 200)}*/}
                </h3>
            </div>
            <div className="banner_linear_transition"/>
        </div>
    )
}

export default Banner;