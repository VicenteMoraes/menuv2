import React, {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import {Link} from 'react-router-dom'
import Home from '@material-ui/icons/Home';
import * as firebase from "firebase/app"
import "firebase/auth"

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
    state = {
        email: "",
        password: "",
    };

    Auth(props) {
        if(this.state.email && this.state.password) {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(props.handleChange({name: "email", value: this.state.email}))
                .then(props.handleChange({name: "password", value: this.state.password}))
                .catch(function (error) {
                    var code = error.code;
                    var message = error.message;
                    if (code === 'auth/wrong-password') {
                        alert('Senha incorreta.');
                    } else {
                        alert(message);
                    }
                    console.log(error);
                })
        }
    }

    updateInput = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="h5">
                                WebMenu
                            </Typography>
                            <Link to="/">
                                <Home className="home"/>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <br/>
                    <h4>Login</h4>

                    <br/>
                    <TextField
                        label="Usuário"
                        placeholder="Digite seu email"
                        margin="normal"
                        onChange={this.updateInput("email")}
                        defaultValue={this.props.values.email}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle color="primary"/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br/>
                    <TextField
                        label="Senha"
                        placeholder="Digite sua senha"
                        margin="normal"
                        onChange={this.updateInput("password")}
                        defaultValue={this.props.values.password}
                        variant="outlined"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color="primary"/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary"
                            onClick={() => { this.Auth(this.props) }}>
                        <Link className="link" to="/" color="inherit">Entrar</Link>
                    </Button>
                    <br/>
                    <br/>
                    Ainda não possui conta? <a href="/cadastro">Cadastre-se</a>
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Login
