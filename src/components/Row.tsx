import React from 'react';


interface IRow {
    title:string;
    moviesMp:any
}


const Row = ({title, moviesMp}:IRow) => {

    console.log(moviesMp);

    return (
        <div>
            <h2>{title}</h2>
            <div>
                {moviesMp.map((movie:any) => {
                    console.log(movie.title)
                })}
            </div>
        </div>
    );
}

export default Row;