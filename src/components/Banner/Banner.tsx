import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import './Banner.css';

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

    const [movie, setMovie] = useState<IMovie>(movies[Math.floor(Math.random() * movies.length - 1)]);

    console.log(movie);
    useEffect(() => {

        function fetchData() {
            setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
        }

        fetchData();

    }, []);

    return (
        <div className="banner"
             style={{
                 backgroundSize: "cover",
                 backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
                 backgroundPosition: "center center"
             }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner_buttons">{/*TODO : Traduire Anglais Francais*/}
                    <Button style={{
                        backgroundColor: 'white',
                        color: 'black'
                    }}>Lecture</Button>
                    <Button style={{backgroundColor: 'white'}}>Plus d'infos</Button>
                </div>

                <h3 className="banner_description">
                    {movie?.overview}
                </h3>
            </div>
        </div>
    )
}

export default Banner;