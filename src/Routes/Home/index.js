import React, { useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';



const useStyles = makeStyles(theme => ({
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
        marginLeft: theme.spacing(50),
        opacity: 1,
        // filter: 'drop-shadow(0 0 0.4rem rgb(216, 88, 168))',
        marginTop: theme.spacing(10),
        transition: 'all .4s ease-in-out',
        // '&:hover': {
        //     transform: 'scale(1.1)',
        //     filter: 'drop-shadow(0 0 0.3rem rgb(216, 88, 168))',
        // },
        [theme.breakpoints.down("md")]: {
            marginTop: 0,
            marginLeft: 0,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 'calc(40px + 5vmin) !important',
        },
        fontFamily: `'Rubik', sans-serif`,
        fontSize: 'calc(10px + 8vmin) !important',
        color: 'white',
        fontWeight: '200',
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,

    },
}))


function HomePage() {
    const classes = useStyles();
    let title = useRef(null);

    useEffect(() => {
        gsap.from([title], {
            duration: 0.2,
            delay: 0.5, 
            ease: "power3.out", 
            y: 32, 
            opacity: 0,
            display: 'none',
        })
    }, [title])


    return <div className={classes.homePage}>
        <Typography ref={el => (title = el)} className={classes.title} variant="h5">avery brown</Typography>
    </div>
}

export default HomePage;
