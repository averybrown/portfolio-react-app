import React from 'react';
import { NavLink } from "react-router-dom"
import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
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
        width: 140,
        backgroundColor: 'black'
    },
    navBar: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(3)
    },
    navText: {
        color: 'rgb(255, 255, 255, 1)',
        textAlign: 'end',
        verticalAlign: 'middle'
    },
    link: {
        textDecoration: 'none !important',
        marginLeft: theme.spacing(2),
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
                <NavLink exact className={classes.link} activeClassName='active-link' to="/">
                    <Typography variant='subtitle2' className={classes.navText}>about me</Typography>
                </NavLink>
                <NavLink exact className={classes.link} activeClassName='active-link' to="/">
                    <Typography variant='subtitle2' className={classes.navText}>projects</Typography>
                </NavLink>
                <NavLink exact className={classes.link} activeClassName='active-link' to="/">
                    <Typography variant='subtitle2' className={classes.navText}>resume</Typography>
                </NavLink>
                <NavLink exact className={classes.link} activeClassName='active-link' to="/">
                    <Typography variant='subtitle2' className={classes.navText}>contact me</Typography>
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
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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