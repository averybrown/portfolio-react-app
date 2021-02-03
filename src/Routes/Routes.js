import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from 'Timelines/index.js'
import HomePage from 'Routes/Home';
import ResumePage from 'Routes/Resume';
import ContactPage from 'Routes/Contact';
import ProjectsPage from 'Routes/Projects';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    pageTransitionEnter: {
        opacity: 0,
    },
    pageTransitionEnterActive:  {
        opacity: 1,
        transition: 'opacity 400ms linear 150ms'
    },
    pageTransitionExit: {
        opacity: 1,
    },
    pageTransitionExitActive: {
        opacity: 0,
        transition: 'opacity 150ms linear'
    }, 
    pageTransitionAppear: {
        opacity: 0
    }, 
    pageTransitionAppearActive: {
        opacity: 1,
        transition: 'opacity 400ms linear 150ms'
    }
}));



const Routes = (props) => {
    // const classes = useStyles(props);

    return (
        <React.Fragment>
            <Route render={({ location }) => {
                // const currentKey = location.pathname.split('/')[1] || '/'
                const { pathname, key } = location


                return (
                    <TransitionGroup component={null}>
                        <Transition
                            // classNames={{
                            //     enter: classes.pageTransitionEnter,
                            //     enterActive:
                            //         classes.pageTransitionEnterActive,
                            //     exit: classes.pageTransitionExit,
                            //     exitActive:
                            //         classes.pageTransitionExitActive,
                            //     appear: classes.pageTransitionAppear,
                            //     appearActive: classes.pageTransitionAppearActive,
                            // }}
                            key={key}
                            appear = {true}
                            onEnter={(node, appears) => play(pathname, node, appears)}
                            onExit={(node, appears) => exit(pathname, node, appears)}
                            timeout={{ enter: 750, exit: 1050 }}
                        >
                            <Switch location={location}>
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