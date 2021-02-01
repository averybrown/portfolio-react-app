import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const styles = theme => {
    return {
        homePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute'
        },
        title: {
            opacity: 0,
            fontSize: 'calc(25px + 6vmin) !important',
            marginLeft: theme.spacing(50),
            filter: 'drop-shadow(0 0 0.4rem rgb(216, 88, 168))',
            marginTop: theme.spacing(10),
            transition: 'all .4s ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                filter: 'drop-shadow(0 0 0.3rem rgb(216, 88, 168))',
                // boxShadow: 'inset 1em 1em rgba(216, 88, 168, 0.18)'
            },
            [theme.breakpoints.down("md")]: {
                marginTop: 0,
                marginLeft: 0,
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: 'calc(23px + 8vmin) !important',
            },
            animationName: '$title',
            animationFillMode: 'both',
            animationDuration: '4000ms',
            // animationIterationCount: 'infinite',
        },
        "@keyframes title": {
            "0%": {
                opacity: 0
                // filter: 'drop-shadow(0 0 0.3rem rgb(216, 88, 168))',
                // boxShadow: 'inset 1em 1em rgba(216, 88, 168, 0.18)'
            },
            "30%": {
                opacity: 0
                // filter: 'drop-shadow(0 0 0.9rem rgb(216, 88, 168))',
                // boxShadow: 'inset 1em 1em rgba(216, 88, 168, 0.18)'
            },
            "100%": {
                opacity: 1
                // filter: 'drop-shadow(0 0 0.3rem rgb(216, 88, 168))',
                // boxShadow: 'inset 1em 1em rgba(216, 88, 168, 0.18)'
            }
        },
    };
};


class HomePage extends Component {


    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <Typography className={classes.title} variant="h5">avery brown</Typography>
        </div>
    }
}

export default withStyles(styles)(HomePage);
