import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography'
import red from '@material-ui/core/colors/red'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUpload from '@material-ui/icons/CloudUpload'
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

export class Cad extends Component {
    render() {
        const { values, handleChange } = this.props;
        console.log(values);
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
                    <h4>Cadastro de usuário</h4>
                    <TextField
                        label="Usuário"
                        placeholder="Nome de usuário"
                        margin="normal"
                        onChange={handleChange("user")}
                        defaultValue={values.user}
                    />
                    <br />
                    <TextField
                        label="Senha"
                        placeholder="Digite uma senha"
                        margin="normal"
                        onChange={handleChange("password")}
                        defaultValue={values.password}
                    />
                    <br />
                    <TextField
                        label="Senha"
                        placeholder="Confirmar senha"
                        margin="normal"
                        onChange={handleChange("confirmPassword")}
                        defaultValue={values.confirmPassword}
                    />
                    <br />
                    <TextField
                        label="Email"
                        placeholder="Endereço de email"
                        margin="normal"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                    />
                    <h4>Dados do restaurante</h4>
                    <TextField
                        label="Nome do estabelecimento"
                        placeholder="Estabelecimento"
                        margin="normal"
                        onChange={handleChange("placeName")}
                        defaultValue={values.placeName}
                    />
                    <br />
                    <TextField
                        label="Descrição"
                        placeholder="Descrição"
                        margin="normal"
                        onChange={handleChange("placeDescription")}
                        defaultValue={values.placeDescription}
                    />
                    <br />
                    <TextField
                        label="Telefone para contato"
                        placeholder="Fone"
                        margin="normal"
                        onChange={handleChange("placePhone")}
                        defaultValue={values.placePhone}
                    />
                    <br />
                    <br />
                    Adicionar logo: <Button variant="contained" size="small" color="primary">
                    <CloudUpload color="inherit"/>
                    </Button>
                    <br />
                    <br />
                    
                    <Button variant="contained"color="primary">
                    <Link className="link" to="/confirm" color="secondary">Enviar</Link>
                    </Button>
                    <br />
                    <br />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Cad

