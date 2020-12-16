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
    pages: {
        maxWidth: '25%',
    },
    navText: {
        textAlign: 'start',
        margin: theme.spacing(3)
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
        zIndex: 9
    },
    hangerIcon: {
        marginRight: theme.spacing(3)
    },
    active: {
        textDecoration: 'none !important',
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
                        <NavLink className={classes.link} activeClassName={classes.active} to="/about">
                            <Typography variant="subtitle2" className={classes.navText}>about</Typography>
                        </NavLink>
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