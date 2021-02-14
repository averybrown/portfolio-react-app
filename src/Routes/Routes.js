import React from 'react';
import { Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import HomePage from 'Routes/Home';
import ResumePage from 'Routes/Resume';
import ContactPage from 'Routes/Contact';
import ProjectsPage from 'Routes/Projects';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';


const useStyles = makeStyles(theme => ({
    pageTransitionEnter: {
        opacity: 0,
        
    },
    pageTransitionEnterActive: {
        opacity: 1,
        transition: 'opacity 600ms',
        transitionDelay: '1000ms',
       
    },
    pageTransitionExit: {
        opacity: 1,        
    },
    pageTransitionExitActive: {
        opacity: 0,
        display:'none',
        transition: 'opacity 600ms',
        transitionDelay: '1000ms'
    },
}));


const routes = [
    { path: '/', name: 'home', Component: HomePage },
    { path: '/projects', name: 'projects', Component: ProjectsPage },
    { path: '/resume', name: 'resume', Component: ResumePage },
    { path: '/contact', name: 'contact', Component: ContactPage },
]



const Routes = (props) => {
    const classes = useStyles(props);

    return (
        <React.Fragment>
            {routes.map(({ name, path, Component }) => (
                <Route key={name} path={path} exact>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={1200}
                            classNames={{
                                enter: classes.pageTransitionEnter,
                                enterActive:
                                    classes.pageTransitionEnterActive,
                                exit: classes.pageTransitionExit,
                                exitActive:
                                    classes.pageTransitionExitActive,

                            }}
                            unmountOnExit
                        >
                                <Component />
                        </CSSTransition>

                    )}
                </Route>
            ))}
        </React.Fragment >
    )
}

export default Routes;
                                // <Redirect exact to='/' />