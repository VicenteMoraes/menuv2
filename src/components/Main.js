import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Cad from './Cad'

import * as firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyBxlwzW2fztFVJuBCJZp7EVC-sg8Mo-pWE",
    authDomain: "webmenu-c7757.firebaseapp.com",
    databaseURL: "https://webmenu-c7757.firebaseio.com",
    projectid: "webmenu-c7757",
    storageBucket: "webmenu-c7757.appspot.com",
};

firebase.initializeApp(config);
let database = firebase.database();
let storage = firebase.storage();

export class Main extends Component {
    state = {
        email: "",
        placeName: "",
        placeDescription: "",
        placePhone: "",
        user: null
    };

    updateState = (state) => {
        this.setState(state);
    };

    render() {
        const {email, placeName, placeDescription, placePhone} = this.state;
        const values = {email, placeName, placeDescription, placePhone, database, storage};

        const LoginPage = (props) => {
            return (
                <Login
                    updateState={this.updateState}
                    values={values}
                />
            );
        };

        const CadPage = (props) => {
            return (
                <Cad
                    updateState={this.updateState}
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
                    </Switch>
                </React.Fragment>
            </Router >
        )

    }
}

export default Main

