import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Cad from './Cad'
import Confirm from './Confirm'
import Sucess from './Sucess'
import Control from './Control'


export class Main extends Component {
    state = {
        user: "",
        password: "",
        confirmPassword: "",
        email: "",
        placeName: "",
        placeDescription: "",
        placePhone: ""
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { user, password, confirmPassword, email, placeName, placeDescription, placePhone } = this.state;
        const values = { user, password, confirmPassword, email, placeName, placeDescription, placePhone }

        const LoginPage = (props) => {
            return (
                <Login
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        }

        const CadPage = (props) => {
            return (
                <Cad
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        }

        const ConfirmPage = (props) => {
            return (
                <Confirm
                    values={this.state}
                />
            );
        }

        const SucessPage = (props) => {
            return (
                <Sucess
                    values={this.state}
                />
            );
        }

        const ControlPage = (props) => {
            return (
                <Control
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        }

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

