import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './row.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation} from "swiper";
import Poster from "../Poster/Poster";


interface IRow {
    title: string;
    movies: IMovie[]
    isLarge: boolean
}

interface IMovie {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
    overview?: string
}


const Row = ({title, movies, isLarge}: IRow,) => {


    return (
        <div className="swiper">
            <h2>{title}</h2>
            {/*<div className="row_posters">*/}

            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={10}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {movies.map((movie, key) =>
                    <SwiperSlide key={key}><Poster key={key} isLarge={true} movieInfo={movie}/></SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}

export default Row;


/*
{movies.map(movie =>
    <SwiperSlide><Poster key={movie.id} movieInfo={movie} isLarge={isLarge}/></SwiperSlide>
)}*/
