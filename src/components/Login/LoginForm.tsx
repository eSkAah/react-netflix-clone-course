import React from 'react'

import {Link} from "react-router-dom";
import './login.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import translate from "../../translation/translate";

const LoginForm = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Logging...')
    }

    return(
        <div className='login-form'>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">{translate('signin')}</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            color="info"
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={translate('email')}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            variant="filled"
                            required
                            fullWidth
                            name="password"
                            label={translate('password')}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label={translate('rememberMe')}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            color="error"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        ><Link to={'/browser'}>
                            {translate('signin')}
                        </Link>
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