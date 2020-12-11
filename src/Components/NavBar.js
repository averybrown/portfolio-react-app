import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { NAV_BAR_HEIGHT } from 'Constants/StylingConstants';
import { withRouter } from "react-router-dom";

const styles = theme => ({
    navBar: {
        width: '100%',
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        // height: NAV_BAR_HEIGHT,
        height: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0)',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    title: {
        flex: '1 0 0',
        maxWidth: '300px',
        marginLeft: theme.spacing(5),
        textAlign: 'start'
    },
    pages: {
        maxWidth: '25%',
    },
    navText: {
        // textTransform: 'uppercase',
        color: 'rgb(256, 256, 256, 1)',
        textAlign: 'start',
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '1 1 0',
    },
    link: {
        textDecoration: 'none !important',
        marginLeft: theme.spacing(2),
        cursor: 'pointer'
    },
    hangerIcon: {
        marginRight: theme.spacing(3)
    },
});


class NavBar extends Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                < nav className={classes.navBar} >
                    <div className={classes.title}>
                        <NavLink exact to="/">
                            <Typography className={classes.navText}>Home</Typography>
                        </NavLink>
                    </div>
                    <div className={classes.navLinks}>
                        <NavLink exact className={classes.link} activeClassName='active-link' to="/">
                            <Typography className={classes.navText}>Projects</Typography>
                        </NavLink>
                        <NavLink className={classes.link} activeClassName='active-link' to="/">
                            <Typography className={classes.navText}>About me</Typography>
                        </NavLink>
                    </div>
                </nav >
            </React.Fragment>
        )
    }

}

export default withRouter(withStyles(styles)(NavBar));