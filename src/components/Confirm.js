import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
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

export class Confirm extends Component {
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
                    <h3>Confirmar dados</h3>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Nome de usuário"
                                secondary={values.user}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Senha"
                                secondary={values.password}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Email"
                                secondary={values.email}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Estabelecimento"
                                secondary={values.placeName}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Descrição do estabelecimento"
                                secondary={values.placeDescription}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Telefone"
                                secondary={values.placePhone}
                            />
                        </ListItem>
                    </List>
                    <Button variant="contained"color="primary">
                    <Link className="link" to="/sucess" color="secondary">Enviar</Link>
                    </Button>
                    <Button variant="contained"color="inherit">
                    <Link className="linkEdit" to="/cadastro" color="secondary">Editar</Link>
                    </Button>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
