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
        transition: 'opacity 400ms',
        transitionDelay: '600ms'
    },
    pageTransitionExit: {
        opacity: 1,
    },
    pageTransitionExitActive: {
        opacity: 0,
        transition: 'opacity 400ms',
        transitionDelay: '600ms'
    },
    pageTransitionAppear: {
        opacity: 0
    },
    pageTransitionAppearActive: {
        opacity: 1,
        transition: 'opacity 400ms',
        transitionDelay: '600ms'
    }
}));


const routes = [
    { path: '/', name: 'home', Component: HomePage },
    { path: '/projects', name: 'projects', Component: ProjectsPage },
    { path: '/resume', name: 'resume', Component: ResumePage },
    { path: '/contact', name: 'contact', Component: ContactPage },
]



const Routes = (props) => {
    const classes = useStyles(props);

    const onEnter = node => {
        console.log("node: ", node)
        console.log("node children: ", node.children[0])
        gsap.from([node], {
            // autoAlpha: 0
            // duration: 0.6, 
            // y: 30, 
            // opacity: 1, 
            // delay: 0.6, 
            // ease: "power3", 
            // stagger: {
            //     amount: 0.6
            // }
        });
        gsap.to([node], {
            autoAlpha: 1
        })
    }

    const onExit = node => {
        gsap.to([node], {
            duration: 0.6,
            y: -30, 
            delay: 0.6, 
            autoAlpha: 0,
            ease: "power3.out", 
            stagger: {
                amount: 0.6
            }
        })
    }


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
                            onExit={onExit}
                            onEnter={onEnter}
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