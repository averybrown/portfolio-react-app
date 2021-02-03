import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import pinwheel from 'Assets/pinwheel.png';
import pinwheelPole from 'Assets/pinwheelpole.png';
import letter from 'Assets/letter.png';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        },
        email: {
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
            '&:hover > $letter': {
                transition: 'all 0.4s ease-in',
                transform: 'scaleX(-1)',
                filter: 'drop-shadow(0 0 0.05rem rgb(2, 208, 194))'
            },
        },
        address: {
            paddingRight: theme.spacing(1),
            // fontWeight: '500'
        },
        letter: {
            width: 'calc(33px + 1.5vmin) !important',
            height: 'auto',
            transition: 'all 0.4s ease-in',
        },
        pinwheelContainer: {
            position: 'absolute',
            left: '52%',
            bottom: '50%',
            zIndex: 5,
            // animationName: '$pinwheelEntrance',
            // animationFillMode: 'both',
            // animationDuration: '5000ms',
            [theme.breakpoints.down("xs")]: {
                left: '10%'
            },
        },
        pinwheel: {
            animationName: '$pinwheel',
            animationFillMode: 'both',
            animationDuration: '8000ms',
            // animationDelay: '6000ms',
            animationIterationCount: 'infinite',
        },
        pinwheelPole: {
            height: '400%',
            width: '100%',
            position: 'absolute',
            top: '30%'
        },
        pinwheelEnter: {
            opacity: 0,
            bottom: '-40%',


        },
        pinwheelAppear: {
            opacity: 0,
            bottom: '-40%',

        },
        pinwheelEnterActive: {
            opacity: 1,
            bottom: '50%',

        },

        pinwheelAppearActive: {
            opacity: 1,
            bottom: '50%',
        },
        pinwheelAppearDone: {
            bottom: '50%',

        },
        pinwheelEnterDone: {
            bottom: '50%',

        },
        pinwheelExit: {
            opacity: 1
        },
        pinwheelExitActive: {
            opacity: 1,
        },
        pinwheelExitDone: {
            bottom: '-40%',
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
            {/* <CSSTransition
                in={true}
                timeout={300}
                classNames={{
                    enter: classes.pinwheelEnter,
                    enterActive:
                        classes.pinwheelEnterActive,
                    exit: classes.pinwheelExit,
                    exitActive:
                        classes.pinwheelExitActive,
                    appear: classes.pinwheelAppear,
                    appearActive: classes.pinwheelAppearActive,
                    enterDone: classes.pinwheelEnterDone,
                    appearDone: classes.pinwheelAppearDone,
                    exitDone: classes.pinwheelExitDone
                }}
                unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
            > */}
                <div className={`${classes.pinwheelContainer} pinwheel`}>
                    <img className={classes.pinwheelPole} src={pinwheelPole} width='90px' height='160px' alt='pinwheel' />
                    <img className={classes.pinwheel} src={pinwheel} width='300px' height='300px' alt='pinwheel' />
                </div>
            {/* </CSSTransition> */}
        </div>
    }
}

export default withStyles(styles)(ContactPage);
