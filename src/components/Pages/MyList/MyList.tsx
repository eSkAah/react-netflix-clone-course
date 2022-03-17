import React, {useState} from 'react';
import Poster from "../../Poster/Poster";

interface IMovie {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
    overview?: string
}

const MyList = () => {

    const localData = localStorage.getItem("member")
    const member = JSON.parse(localData!);
    const wishMovies = member.wishlist;

    const [wish, setWhish] = useState<IMovie[]>(wishMovies);

    console.log(wish);
    return (

        <div>
            {wish.map((movie, key) => {
                <Poster isLarge={false} movieInfo={movie}/>

            })}
        </div>


    )
}

export default MyList;