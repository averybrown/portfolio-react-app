import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { withRouter } from "react-router-dom";

const styles = theme => ({
    navBar: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'flex',
            flexShrink: 0,
            alignItems: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    },
    title: {
        display: 'flex',
        flex: '0 0 0',
        maxWidth: '300px',
        textAlign: 'start'
    },
    //     grow { transition: all .2s ease-in-out; }
    // .grow:hover { transform: scale(1.1); }
    pages: {
        maxWidth: '25%',
    },
    navText: {
        textAlign: 'start',
        margin: theme.spacing(3),
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '1 1 0'
    },
    link: {
        textDecoration: 'none !important',
        cursor: 'pointer',
        zIndex: 100,
        position: 'relative',
        transition: 'all .2s ease-in-out',

        '&:hover': {
            transform: 'scale(1.1)',
            cursor: 'pointer',
        },
        '&:hover:after': {
            width: '50%',
            left: '24%', 
            cursor: 'pointer',

        },
        '&:after': {
            background: 'none repeat scroll 0 0 transparent',
            bottom: '20%',
            content: "' '",
            display: 'block',
            height: '2px',
            left: '50%',
            position: 'absolute',
            background: '#ddd',
            transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
            width: 0, 
            cursor: 'pointer',
        },
    },
    active: {
        textDecoration: 'none !important',
        color: 'white',
        '&:after': {
            background: 'none repeat scroll 0 0 transparent',
            bottom: '20%',
            content: "' '",
            display: 'block',
            height: '2px',
            left: '50%',
            position: 'absolute',
            background: '#ddd',
            transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
            width: '50%',
            left: '24%'
        },
    }
});


class NavBar extends Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                < nav className={classes.navBar} >
                    <div className={classes.title}>
                        <NavLink exact to="/" activeClassName={classes.active} className={classes.link} >
                            <Typography variant="subtitle2" className={classes.navText}>home</Typography>
                        </NavLink>
                    </div>
                    <div className={classes.navLinks}>
                        <NavLink exact className={classes.link} activeClassName={classes.active} to="/projects">
                            <Typography variant="subtitle2" className={classes.navText}>projects</Typography>
                        </NavLink>
                        <NavLink className={classes.link} activeClassName={classes.active} to="/resume">
                            <Typography variant="subtitle2" className={classes.navText}>resume</Typography>
                        </NavLink>
                        <NavLink className={classes.link} activeClassName={classes.active} to="/contact">
                            <Typography variant="subtitle2" className={classes.navText}>contact</Typography>
                        </NavLink>

                    </div>
                </nav >
            </React.Fragment>
        )
    }

}

export default withRouter(withStyles(styles)(NavBar));