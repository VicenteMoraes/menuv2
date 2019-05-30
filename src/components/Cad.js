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
import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

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
    };

    updateInput = input => e => {
        this.setState({ [input]: e.target.value });
    };

    register_on_DB(props){
        let uid = firebase.auth().currentUser.uid;
        console.log(uid);
        props.database.ref("users/" + uid).set({
            description: this.state.placeDescription,
            phone: this.state.placePhone,
            name: this.state.placeName,
            email: this.state.email,
            uid: uid
        });
    }

    Auth(props) {
        if(this.state.email && this.state.password) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(props.handleChange({name: "email", value: this.state.email}))
                .then(props.handleChange({name: "password", value: this.state.password}))
                .then(props.handleChange({name: "placeName", value: this.state.placeName}))
                .then(props.handleChange({name: "placePhone", value: this.state.placePhone}))
                .then(props.handleChange({name: "placeDescription", value: this.state.placeDescription}))
                .then(this.register_on_DB(this.props.values))
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

    render() {
        console.log(this.props.values);
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
                        placeholder="Digite seu email"
                        margin="normal"
                        onChange={this.updateInput("email")}
                        defaultValue={this.props.values.email}
                    />
                    <br />
                    <TextField
                        label="Senha"
                        placeholder="Digite uma senha"
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
                    <br />
                    <TextField
                        label="Descrição"
                        placeholder="Descrição"
                        margin="normal"
                        onChange={this.updateInput("placeDescription")}
                        defaultValue={this.props.values.placeDescription}
                    />
                    <br />
                    <TextField
                        label="Telefone para contato"
                        placeholder="Fone"
                        margin="normal"
                        onChange={this.updateInput("placePhone")}
                        defaultValue={this.props.values.placePhone}
                    />
                    <br />
                    <br />
                    Adicionar logo: <Button variant="contained" size="small" color="primary">
                    <CloudUpload color="inherit"/>
                    </Button>
                    <br />
                    <br />
                    
                    <Button variant="contained"color="primary" onClick={() => { this.Auth(this.props) }}>
                        <Link className="link" to="/" color="secondary">Enviar</Link>
                    </Button>
                    <br />
                    <br />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Cad

