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


export class Alterpass extends Component {
    state = {
        password: "",
    };

    updateInput = input => e => {
        this.setState({[input]: e.target.value});
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
                    <h4>Alterar senha</h4>
                    <br/>
                    <TextField
                        label="Nova Senha"
                        placeholder="Digite a senha"
                        margin="normal"
                        onChange={this.updateInput("password")}
                        defaultValue={this.props.values.password}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary">
                        <Link className="link" to="/">Confirmar</Link>
                    </Button>
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(Alterpass);
