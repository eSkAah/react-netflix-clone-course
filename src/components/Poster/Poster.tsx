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

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const Poster = ({movieInfo, isLarge}: IPoster) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                            <img src={`${imageBaseUrl}${movieInfo.backdrop_path}`}
                                 alt={movieInfo.title}/>
                        </Grid>

                        <Grid item sx={{
                            position: "absolute",
                            bottom: "30%",
                            display: "flex",
                            marginLeft: "3%",
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


                    </Box>
                </Fade>

            </Modal>
        </>

    )

}

export default Poster;