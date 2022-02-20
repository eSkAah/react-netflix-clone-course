import React from 'react';
import './Home/home.css';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Featured = () => {

    const inputStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    return(
        <div className="features-wrapper">
            <h1 style={{fontSize:"4rem", margin:'0'}}>Films, séries TV et bien plus en illimité.</h1>
            <h2>Où que vous soyez. Annulez à tout moment.</h2>
            <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h4>

            <div className='features-input'>
                <TextField  size="medium" style={inputStyle} color="warning" label="Adresse Email" variant='filled' />
                <Button  variant='contained' color="error">COMMENCER</Button>
            </div>
        </div>
    )
}


export default Featured;