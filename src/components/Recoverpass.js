import React, {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import {Link, withRouter} from 'react-router-dom'
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


export class Recoverpass extends Component {
    state = {
        email: "",
    };

    updateInput = input => e => {
        this.setState({[input]: e.target.value});
    };

    async resetemail() {
        let response = await firebase.auth().sendPasswordResetEmail(this.state.email)
            .catch(function (error) {
                const message = error.message;
                alert(message);
                console.log(error);
                return false;
            });
        if (response === undefined) {
            alert("Email enviado!");
            this.props.history.push("/");
        }
    }

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
                    <h3>Recuperar senha</h3>
                    <br/>
                    <Typography>
                        Informe seu email para alterar a senha
                    </Typography>
                    <TextField
                        label="Email cadastrado"
                        placeholder="Digite seu email"
                        margin="normal"
                        onChange={this.updateInput("email")}
                        defaultValue={this.props.values.email}
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => {
                        this.resetemail(this.props.values)
                    }}>
                        Recuperar
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

export default withRouter(Recoverpass);
