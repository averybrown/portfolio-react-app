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
        display: 'inline-block',
        lineHeight: '1em',
        transformOrigin: '0 0',
        marginLeft: theme.spacing(50),
        marginTop: theme.spacing(10),
        transition: 'all .4s ease-in-out',

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

    },
    textWrapper: {
        position: 'relative',
        display: 'inline-block',
        paddingTop: '0.2em',
        paddingRight: '0.05em',
        paddingBottom: '0.1em',
        overflow: 'hidden'
    }, 
    ml10: {
        position: 'relative',
        fontWeight: 900,
        fontSize: '4em', 
        opacity: 0
    }
}))


function HomePage() {
    const classes = useStyles();
    let title = useRef(null);

    useEffect(() => {
        gsap.from([title], {
            duration: 0.5,
            delay: 0.8, 
            ease: "power3.out", 
            y: 64, 
            opacity: 0,
            display: 'none',
        })
    }, [title])


    return <div className={classes.homePage}>
        <div className={`${classes.textWrapper} textWrapper`}>
            <Typography ref={el => (title = el)} className={`${classes.title} letters`} variant="h5">avery brown</Typography>
        </div>
    </div>
}

export default HomePage;
