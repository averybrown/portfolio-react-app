import React from 'react';
import { NavLink } from "react-router-dom"
import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'none',
        [theme.breakpoints.down("xs")]: {
            display: 'flex',
            position: 'absolute',
        },
        zIndex: 9
    },
    landscapeMobile: {
        ['@media all and (orientation:landscape)']: {
            display: 'none'
        }
    },
    menuButton: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(4),
        "& svg": {
            "& path": {
                color: 'black'
            }
        },
    },
    drawerPaper: {
        width: '100%',
        backgroundColor: '#88C29F', 
        opacity: '85%'
    },
    navBar: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: theme.spacing(2), 
        paddingTop: theme.spacing(2)
    },
    navText: {
        color: 'rgb(255, 255, 255, 1)',
        textAlign: 'center',
        verticalAlign: 'middle', 
        marginBottom: theme.spacing(2), 
        marginTop: theme.spacing(2)
    },
    link: {
        textDecoration: 'none !important',
        cursor: 'pointer'
    },
}));


function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        < nav className={classes.navBar} >
            <div>
                <NavLink exact className={classes.link} activeClassName='active-link' to="/">
                    <Typography variant='subtitle2' className={classes.navText}>home</Typography>
                </NavLink>
                <Divider style={{marginLeft:'40%', marginRight: '40%'}} variant="middle" />

                {/* <NavLink exact className={classes.link} activeClassName='active-link' to="/about">
                    <Typography variant='subtitle2' className={classes.navText}>about</Typography>
                </NavLink>
                <Divider style={{marginLeft:'40%', marginRight: '40%'}} variant="middle" /> */}

                <NavLink exact className={classes.link} activeClassName='active-link' to="/projects">
                    <Typography variant='subtitle2' className={classes.navText}>projects</Typography>
                </NavLink>
                <Divider style={{marginLeft:'40%', marginRight: '40%'}} variant="middle" />

                <NavLink exact className={classes.link} activeClassName='active-link' to="/resume">
                    <Typography variant='subtitle2' className={classes.navText}>resume</Typography>
                </NavLink>
                <Divider style={{marginLeft:'40%', marginRight: '40%'}} variant="middle" />

                <NavLink exact className={classes.link} activeClassName='active-link' to="/contact">
                    <Typography variant='subtitle2' className={classes.navText}>contact</Typography>
                </NavLink>
            </div>
        </nav >
    );

    return (
        <div className={`${classes.root} ${classes.landscapeMobile}`}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor='top'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div >
    );
}

export default withRouter(ResponsiveDrawer); 