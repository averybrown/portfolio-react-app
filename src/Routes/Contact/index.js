import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import pinwheel from 'Assets/pinwheel.png';
import pinwheelPole from 'Assets/pinwheelpole.png';
import letter from 'Assets/letter.png';

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
            animation: '$fadein 3s',
            animationDelay: '1s',
            animationFillMode: 'both',
            opacity: 0,
        },
        email: {
            animation: '$fadein 3s',
            animationDelay: '1s',
            animationFillMode: 'both',
            opacity: 0,
            zIndex: 100,
            textDecoration: 'none',
            transition: 'all .3s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.1)',
                transition: 'all .3s ease-in-out',
                filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))',
            },
        },
        address: {
            paddingRight: theme.spacing(1),
        },
        letter: {
            width: 'calc(33px + 1.5vmin) !important',
            height: 'auto', 
            transition: 'all .4s ease-in-out',
            '&:hover': {
                transform: 'scaleX(-1)',
                transition: 'all .4s ease-in-out',
                filter: 'drop-shadow(0 0 0.05rem rgb(2, 208, 194))',
            },
    
        },
        pinwheelContainer: {
            position: 'absolute',
            left: '52%',
            zIndex: 5,
            animationName: '$pinwheelEntrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            [theme.breakpoints.down("xs")]: {
                left: '10%'
            },
        },
        pinwheel: {
            animationName: '$pinwheel',
            animationFillMode: 'both',
            animationDuration: '8000ms',
            animationIterationCount: 'infinite',
        },
        pinwheelPole: {
            height: '400%',
            width: '100%',
            position: 'absolute',
            top: '30%'
        },
        "@keyframes fadein": {
            "from": { opacity: 0 },
            "to": { opacity: 1 }
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
            <Typography className={classes.title} variant="h6">contact</Typography>
            <a className={`${classes.email}`} href={"mailto:avery.brown@mac.com"}>
                <Typography className={classes.address} variant="subtitle2">avery.brown@mac.com</Typography>
                <img className={classes.letter} src={letter} width='100px' height='100px' alt='pinwheel' />
            </a>
            {/* <div className={classes.pinwheelContainer}> */}
                <img className={classes.pinwheelPole} src={pinwheelPole} width='90px' height='160px' alt='pinwheel' />
                <img className={classes.pinwheel} src={pinwheel} width='300px' height='300px' alt='pinwheel' />
            {/* </div> */}
        </div>
    }
}

export default withStyles(styles)(ContactPage);
