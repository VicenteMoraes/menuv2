import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
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

export class Sucess extends Component {
    render() {
        const { values } = this.props;
        console.log(values)
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
                    <h3>{values.user}, seu cadastro foi concluído com sucesso ;) !<br />Em breve um email será enviado para <br /> {values.email} </h3>
                    <Link className="linkBack" to="/" color="secondary">Retornar </Link> ao menu principal
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Sucess
