import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from 'Timelines/index.js'
import HomePage from 'Routes/Home';
import ResumePage from 'Routes/Resume';
import ContactPage from 'Routes/Contact';
import ProjectsPage from 'Routes/Projects';


const Routes = (props) => {

    return (
        <React.Fragment>
            <Route render={(routeProps) => {
                const { pathname, key } = routeProps.location

                return (
                    <TransitionGroup component={null}>
                        <Transition
                            key={key}
                            appear={true}
                            onEnter={(node, appears) => play(pathname, node, appears)}
                            onExit={(node, appears) => exit(node, appears)}
                            timeout={{ enter: 750, exit: 150 }}
                        >
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
                        </Transition>
                    </TransitionGroup>)
            }} />
        </React.Fragment >
    );
}

export default Routes;