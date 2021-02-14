import React, { useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import pinwheelImg from 'Assets/pinwheel.png';
import pinwheelPole from 'Assets/pinwheelpole.png';
import letter from 'Assets/letter.png';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';


const useStyles = makeStyles(theme => ({
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
        paddingRight: theme.spacing(1) / 4,
    },
    letter: {
        width: 'calc(20px + 1.5vmin) !important',
        height: 'auto',
        transition: 'all 0.4s ease-in',
    },
    pinwheelContainer: {
        position: 'absolute',
        left: '52%',
        bottom: '50%',
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
}));


function ContactPage(props) {
    const classes = useStyles();
    let title = useRef(null);
    let email = useRef(null);
    let pinwheel = useRef(null);

    useEffect(() => {
        gsap.from([title, email], {
            duration: 0.3,
            delay: 1, 
            ease: "power3.out", 
            y: 32, 
            opacity: 0,
            stagger: {
                amount: 0.3
            }
        });
    }, [title, email])


    return (
        <div className={classes.contactPage}>
            <Typography ref={el => (title = el)} className={classes.title} variant="h6">contact</Typography>
            <a ref={el => (email = el)} className={`${classes.email}`} href={"mailto:avery.brown@mac.com"}>
                <Typography className={classes.address} variant="subtitle2">avery.brown@mac.com</Typography>
                <img className={classes.letter} src={letter} width='100px' height='100px' alt='pinwheel' />
            </a>
            <div
                ref={el => (pinwheel = el)} 
                className={`${classes.pinwheelContainer} pinwheel`}>
                <img className={classes.pinwheelPole} src={pinwheelPole} width='90px' height='160px' alt='pinwheel' />
                <img className={classes.pinwheel} src={pinwheelImg} width='300px' height='300px' alt='pinwheel' />
            </div>
        </div>
    )
}

export default ContactPage;
