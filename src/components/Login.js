import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom'
import Home from '@material-ui/icons/Home';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red['A700']
        },
        secondary: {
            main: red[900]
        }
    }
});


export class Login extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static" color="primary" >
                        <Toolbar >
                            <Typography variant="h5">
                                WebMenu
                            </Typography>
                            <Link to="/" >
                                <Home className="home"/>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <br />
                    <h4>Login</h4>
                    
                    <br />
                    <TextField
                        label="Usuário"
                        placeholder="Digite seu nome de usuário"
                        margin="normal"
                        onChange={handleChange("user")}
                        defaultValue={values.user}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <TextField
                        label="Senha"
                        placeholder="Digite sua senha"
                        margin="normal"
                        onChange={handleChange("senha")}
                        defaultValue={values.senha}
                        variant="outlined"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <br />
                    <Button variant="contained"color="primary">
                    <Link className="link" to="/control" color="inherit">Entrar</Link>
                    </Button>
                    <br />
                    <br />
                    Ainda não possui conta? <a href="/cadastro" >Cadastre-se</a>
                    <br />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Login
