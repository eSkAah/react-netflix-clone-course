import React, {useState} from 'react';
import './Poster.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import translate from "../../translation/translate";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import YouTube from 'react-youtube';

interface IPoster {
    movieInfo: IPosterMovie,
    isLarge: boolean
}

interface IPosterMovie {
    id: number
    title: string
    poster_path: string
    backdrop_path: string
    overview?: string
}

interface ITrailerData {
    id: string,
    key: string,
    name: string,
}

interface IMovieActor {
    id: string,
    character: string
}


const Poster = ({movieInfo, isLarge}: IPoster) => {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
    const youtubeBaseUrl = " https://www.youtube.com/watch?v=";
    const [actors, setActors] = useState<IMovieActor[]>([]);
    const [movieTrailer, setMovieTrailer] = useState<string>("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        fetchMovieTrailerData(movieInfo.id);
        fetchActorsFromMovie(movieInfo.id);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const opts: Object = {
        height: '394',
        width: '1056',
        playerVars: {
            autoplay: 1,
            showinfo: 0,
            controls: 0,
            modestbranding: 0
        },

    }


    async function fetchMovieTrailerData(id: any) {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((res) => {
                console.log(res.data);
                setMovieTrailer(res.data.results[0].key)

                console.log(movieTrailer);
            })
    }

    async function fetchActorsFromMovie(id: any) {
        await axios.get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setActors(res.data.cast)
                console.log(res.data.cast);
            })
    }


    function maxDescriptionLength(description: string, length: number) {
        return description?.length > length ? description.substring(0, length - 1) + "..." : description
    }

    return (
        <>
            <img onClick={handleOpen} className={`row_poster ${isLarge && "row_poster_large"}`}
                 src={`${imageBaseUrl}${isLarge ? movieInfo.poster_path : movieInfo.backdrop_path}`}
                 alt={movieInfo.title}/>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className="modal">

                        <Grid item xs={12}>
                            <YouTube videoId={movieTrailer} opts={opts}/>
                        </Grid>

                        <Grid item sx={{
                            bottom: "30%",
                            display: "flex",
                            marginLeft: "3%",
                            marginTop: "2%",
                            width: "100%"
                        }}>
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
                                    }}>{translate('play')}
                            </Button>

                            <Button
                                startIcon={<InfoIcon/>}
                                variant="contained"
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    marginLeft: "5%",
                                    '&:hover': {
                                        backgroundColor: 'rgb(133, 133, 133)'
                                    }
                                }}>{translate('more_infos')}
                            </Button>
                        </Grid>
                        <h1>{movieInfo.title}</h1>


                        <Grid item>
                            <Typography id="transition-modal-description" sx={{mt: 2}}>
                                {maxDescriptionLength(movieInfo.overview!, 300)}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <h1>A propos :</h1>
                            <h4>Acteurs principaux :</h4>
                            {actors.slice(0, 5).map((movieActor, key) =>
                                <div className="poster_actor">{movieActor.character}</div>
                            )}
                        </Grid>


                    </Box>
                </Fade>

            </Modal>
        </>

    )

}

export default Poster;