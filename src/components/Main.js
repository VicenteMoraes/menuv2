import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Cad from './Cad'
import Confirm from './Confirm'
import Sucess from './Sucess'
import Control from './Control'

import * as firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyBxlwzW2fztFVJuBCJZp7EVC-sg8Mo-pWE",
    authDomain: "webmenu-c7757.firebaseapp.com",
    databaseURL: "https://webmenu-c7757.firebaseio.com",
    projectid: "webmenu-c7757",
    storaBucket: "webmenu-c7757.appspot.com",
};

firebase.initializeApp(config);
let database = firebase.database();

export class Main extends Component {
    state = {
        password: "",
        email: "",
        placeName: "",
        placeDescription: "",
        placePhone: ""
    };

    handleChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };

    render() {
        const {password, email, placeName, placeDescription, placePhone } = this.state;
        const values = {password, email, placeName, placeDescription, placePhone, database };

        const LoginPage = (props) => {
            return (
                <Login
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        };

        const CadPage = (props) => {
            return (
                <Cad
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        };

        const ConfirmPage = (props) => {
            return (
                <Confirm
                    values={this.state}
                />
            );
        };

        const SucessPage = (props) => {
            return (
                <Sucess
                    values={this.state}
                />
            );
        };

        const ControlPage = (props) => {
            return (
                <Control
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        };

        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" render={LoginPage} />
                        <Route path="/cadastro" render={CadPage} />
                        <Route path="/confirm" render={ConfirmPage} />
                        <Route path="/sucess" render={SucessPage} />
                        <Route path="/control" render={ControlPage} />
                    </Switch>
                </React.Fragment>
            </Router >
        )

    }
}

export default Main

