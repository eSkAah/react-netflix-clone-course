import React from 'react'
import './login.css'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import translate from "../../../translation/translate";
import {useFormControls} from "./useFormControls";
import Button from "@mui/material/Button";


const inputFieldValues = [
    {
        name: "email",
        label: "E-mail",
        id: "email"
    },
    {
        name: "password",
        label: "Password",
        id: "password"
    },

];

const LoginForm = () => {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    return (
        <div className='login-form'>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">{translate('signin')}</Typography>

                    <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{mt: 1}}>
                        {inputFieldValues.map((inputFieldValue, key) => {
                            return (
                                <TextField
                                    key={key}
                                    color="info"
                                    onBlur={handleInputValue}
                                    variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id={inputFieldValue.id}
                                    label={inputFieldValue.name}
                                    type={inputFieldValue.name == "password" ? "password" : "text"}
                                    name={inputFieldValue.name}
                                    onChange={handleInputValue}
                                    {...(errors[inputFieldValue.name] && {
                                        error: true,
                                        helperText: errors[inputFieldValue.name]
                                    })}
                                />
                            );
                        })}

                        <FormControlLabel
                            control={<Checkbox value="remember"/>}
                            label={translate('rememberMe')}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            color="error"
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            {translate('signin')}
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <MuiLink href="#" variant="body2">
                                    {translate('forgotPw')}
                                </MuiLink>
                            </Grid>
                            <Grid item xs>
                                <MuiLink href="#" variant="body2">
                                    {translate('notSignYet')}
                                </MuiLink>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default LoginForm;