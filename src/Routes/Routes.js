import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from 'Routes/Home';
import AboutPage from 'Routes/About';
import ResumePage from 'Routes/Resume';
import ContactPage from 'Routes/Contact';
import ProjectsPage from 'Routes/Projects';

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
                        <ProjectsPage />
                    )}
                />
                <Route
                    exact
                    path="/resume"
                    render={props => (
                        <ResumePage />
                    )}
                />
                <Route
                    exact
                    path="/contact"
                    render={props => (
                        <ContactPage />
                    )}
                />
                <Redirect exact to='/' />
            </Switch>
        </React.Fragment>
    );
}

export default Routes;