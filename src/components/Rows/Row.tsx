import React from 'react';

import './row.css';

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

interface IRow {
    title: string;
    movies: IMovie[]
    isLarge: boolean
}

interface IMovie {
    id: number
    title: string
    poster_path: string
    backdrop_path: string
}


const Row = ({title, movies, isLarge}: IRow,) => {

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row_poster ${isLarge && "row_poster_large"}`}
                         src={`${imageBaseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                         alt={movie.title}/>
                ))};
            </div>
        </div>
    )
}

export default Row;