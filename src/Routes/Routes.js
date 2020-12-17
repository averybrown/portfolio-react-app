import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from 'Routes/Home';
import AboutPage from 'Routes/About';

const Routes = (props) => {

    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <HomePage />
                    )}
                />
                <Route
                    exact
                    path="/about"
                    render={props => (
                        <AboutPage />
                    )}
                />
                <Route
                    exact
                    path="/projects"
                    render={props => (
                        <HomePage />
                    )}
                />
                <Route
                    exact
                    path="/resume"
                    render={props => (
                        <HomePage />
                    )}
                />
                <Route
                    exact
                    path="/contact"
                    render={props => (
                        <HomePage />
                    )}
                />
                <Redirect exact to='/' />
            </Switch>
        </React.Fragment>
    );
}

export default Routes;