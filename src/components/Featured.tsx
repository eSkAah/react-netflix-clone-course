import React from 'react';
import './Home/home.css';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import translate from '../translation/translate';

const Featured = () => {

    const inputStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    return(
            <div className="features-wrapper">
                <h1>{translate("featuresH1")}</h1>
                <h2>{translate("featuresH2")}</h2>
                <h4>{translate("featuresH4")}</h4>

                <div className='features-input'>
                    <TextField  size="medium" style={inputStyle} color="warning" label="Adresse Email" variant='filled' />
                    <Button  variant='contained' color="error">{translate("start")}</Button>
                </div>
            </div>
    )
}


export default Featured;