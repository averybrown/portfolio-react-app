import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from 'Routes/Home';
import NavBar from 'Components/NavBar';

const Routes = (props) => {

    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <HomePage/>
                    )}
                />
                <Redirect exact to='/' />
            </Switch>
        </React.Fragment>
    );
}

export default Routes;