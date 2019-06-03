import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core//Typography';
import red from '@material-ui/core/colors/red';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';
import {Link, withRouter} from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


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
    state = {
        email: "",
        password: "",
        placeName: "",
        placeDescription: "",
        placePhone: "",
        user: null
    };

    updateInput = input => e => {
        this.setState({[input]: e.target.value});
    };

    register_on_DB(props) {
        let uid = firebase.auth().currentUser.uid;
        props.database.ref("users/" + uid)
            .set({
                description: this.state.placeDescription,
                phone: this.state.placePhone,
                name: this.state.placeName,
                email: this.state.email,
                uid: uid
            })
            .catch(function (error) {
                const message = error.message;
                alert(message);
                console.log(error);
                return false;
            });
    }

    async auth(props) {
        let response = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
                const code = error.code;
                const message = error.message;
                if (code === 'auth/wrong-password') {
                    alert('Senha incorreta.');
                } else {
                    alert(message);
                }
                console.log(error);
                return false;
            });
        if (response) {
            props.updateState({
                email: this.state.email,
                placeName: this.state.placeName,
                placeDescription: this.state.placeDescription,
                placePhone: this.state.placePhone,
                user: firebase.auth().currentUser
            });
            this.register_on_DB(this.props.values);
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
                    <h4>Cadastro de usuário</h4>
                    <TextField
                        label="Usuário"
                        placeholder="Digite seu email"
                        margin="normal"
                        onChange={this.updateInput("email")}
                        defaultValue={this.props.values.email}
                    />
                    <br/>
                    <TextField
                        label="Senha"
                        placeholder="Digite sua senha"
                        margin="normal"
                        onChange={this.updateInput("password")}
                        defaultValue={this.props.values.password}
                    />
                    <h4>Dados do restaurante</h4>
                    <TextField
                        label="Nome do estabelecimento"
                        placeholder="Estabelecimento"
                        margin="normal"
                        onChange={this.updateInput("placeName")}
                        defaultValue={this.props.values.placeName}
                    />
                    <br/>
                    <TextField
                        label="Descrição"
                        placeholder="Descrição"
                        margin="normal"
                        onChange={this.updateInput("placeDescription")}
                        defaultValue={this.props.values.placeDescription}
                    />
                    <br/>
                    <TextField
                        label="Telefone para contato"
                        placeholder="Fone"
                        margin="normal"
                        onChange={this.updateInput("placePhone")}
                        defaultValue={this.props.values.placePhone}
                    />
                    <br/>
                    <br/>
                    Adicionar logo: <Button variant="contained" size="small" color="primary">
                    <CloudUpload color="inherit"/>
                </Button>
                    <br/>
                    <br/>

                    <Button variant="contained" color="primary" onClick={() => {
                        this.auth(this.props)
                    }}>
                        Enviar
                    </Button>
                    <br/>
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(Cad)

