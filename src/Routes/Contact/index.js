import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import pinwheel from 'Assets/pinwheel.png';
import pinwheelPole from 'Assets/pinwheelpole.png';

const styles = theme => {
    return {
        contactPage: {
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%',
            flexDirection: 'column'
        },
        title: {
            zIndex: 10,
            visibility: 'hidden',
        },
        email: {
            zIndex: 100,
            textDecoration: 'none'
        },
        pinwheelContainer:{
            position: 'absolute',
            left: '39%',
            zIndex: 5,
            animationName: '$pinwheelEntrance',
            animationFillMode: 'both',
            animationDuration: '5000ms'
        },
        pinwheel: {
            animationName: '$pinwheel',
            animationFillMode: 'both',
            animationDuration: '8000ms',
            animationIterationCount: 'infinite',
        },
        pinwheelPole: {
            position: 'absolute'
        },
        "@keyframes pinwheelEntrance": {
            "0%": {
                bottom: '-40%',
            },
            "100%": {
                bottom: '50%',
            },
        },
        "@keyframes pinwheel": {
            "0%": {
                transform: 'rotate(0deg)'
            },
            "100%": {
                transform: 'rotate(-1080deg)'
            },
        },
    };
};


class ContactPage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.contactPage}>
            <Typography className={classes.title} variant="h5">contact</Typography>
            <a className={classes.email} href={"mailto:avery.brown@mac.com"}>
                <Typography className={"email"} variant="subtitle2">avery.brown@mac.com</Typography>
            </a>
            <div className={classes.pinwheelContainer}>
                {/* <img className={classes.pinwheelPole} src={pinwheelPole} width='200px' height='200px' alt='pinwheel' /> */}
                <img className={classes.pinwheel} src={pinwheel} width='300px' height='300px' alt='pinwheel' />
            </div>
        </div>
    }
}

export default withStyles(styles)(ContactPage);
