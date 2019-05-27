import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { Grid } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red['A700']
    },
    secondary: {
      main: "#ffffff"
    }
  }
});

export class Home extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static" color="primary" >
            <Toolbar >
              <Typography variant="h5">
                WebMenu
                            </Typography>
              <Button id="logButton" variant="contained" color="primary" >
                <Link className="link" to="/login" >Login</Link>
              </Button>
              <Button id="cadButton" variant="contained" color="secondary" >
                <Link className="linkCad" to="/cadastro" >Cadastre-se</Link>
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container={true} justify="center">
            <Cards image={require ("./images/icon.jpg")}/>
            <Cards image={require ("./images/food2.jpeg")}/>
            <Cards image={require ("./images/food5.jpg")}/>
            <Cards image={require ("./images/food.jpg")}/>
          </Grid>
          
        </React.Fragment>
      </MuiThemeProvider>
    )
    {/* image={require ("./images/food.jpg")} */}
  }
}

export default Home
