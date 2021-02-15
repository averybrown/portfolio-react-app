import React, { useEffect, useRef } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';



const useStyles = makeStyles(theme => ({
    projectsPage: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        minHeight: '100%',
    },
    title: {
        zIndex: 10,
        marginTop: 'calc(8vh - 1.5vmax)',
        [theme.breakpoints.down("xs")]: {
            marginTop: '3vh',
            fontSize: '2.2rem !important'
        },
        textAlign: 'center',
        width: '100%',
    },
    grid: {
        display: 'grid',
        gridTemplateRows: 'max-content max-content',
        gridTemplateColumns: 'fit-content(20%) fit-content(40%)',
        height: '100%',
        position: 'absolute',
        maxHeight: '27vh',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        gridRowGap: 0,
        gridColumnGap: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: 'fit-content(75%)',
            gridTemplateRows: 'max-content max-content max-content',
            bottom: '42vh !important', 
            gridRowGap: `${theme.spacing(2)} !important`
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '80%',
            gridRowGap: theme.spacing(3)
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '80%',
            gridRowGap: theme.spacing(3),
            gridTemplateColumns: 'fit-content(70%) fit-content(30%)',
            bottom: '12vh',
            right: '12vw',
            gridColumnGap: theme.spacing(7),
        },
        [theme.breakpoints.down('sm')]: {
            bottom: '30vh',
            gridRowGap: theme.spacing(3),
            maxHeight: '19vh'
        },

    },
    trailer: {
        gridRowStart: 1,
        gridRowEnd: 3,
        gridColumn: 1,
        width: '100%',
        cursor: 'pointer',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'relative',
        paddingBottom: '56.25%', /* 16:9 */
        marginBottom: '20px',
        [theme.breakpoints.down("xs")]: {
            gridRow: 1,
            gridColumnEnd: '2 !important',
            justifySelf: 'start !important',
            width: '61vw',
            paddingBottom: '45.25%', /* 16:9 */
        },
        [theme.breakpoints.down('sm')]: {
            gridRow: 1,
            gridColumnStart: 1,
            gridColumnEnd: 3,
            justifySelf: 'start'
        },
        [theme.breakpoints.up('md')]: {
            width: '42vw !important',
            paddingBottom: '56.25% !important', /* 16:9 */
        },
        [theme.breakpoints.up('sm')]: {
            width: '56vw',
            paddingBottom: '43.25%', /* 16:9 */
        },

    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '9px',
        borderRadius: '5px',
        boxShadow: '0 0 6pt 5pt rgb(22 220 143)'
    },
    projectTitleContainer: {
        gridRow: 1,
        gridColumn: 2,
        justifySelf: 'start',
        alignSelf: 'end',
        [theme.breakpoints.down("xs")]: {
            gridRow: '2 !important',
            gridColumn: 1,
            marginLeft: 0, 
        },
        [theme.breakpoints.down('sm')]: {
            gridRow: 2,
            gridColumn: 1
        },
    },
    projectTitle: {
        fontSize: 'calc(54px + 1.5vmin) !important',
        textAlign: 'start',
        lineHeight: '1.1',
        fontWeight: 900,
        [theme.breakpoints.down("xs")]: {
            fontSize: 'calc(40px + 1.2vmin) !important',
        },
    },
    projectDescription: {
        gridRow: 2,
        gridColumn: 2,
        fontFamily: `'Lato', sans-serif`,
        textAlign: 'start',
        justifySelf: 'start',
        paddingTop: 0,
        marginRight: '10%',
        [theme.breakpoints.down("xs")]: {
            gridColumn: '1 !important',
            gridRow: '3 !important',
            marginLeft: '2vw',
            fontSize: 'calc(9px + 0.75vmin) !important',
            marginRight: '33%'
        },
        [theme.breakpoints.down('sm')]: {
            gridRow: 2,
            gridColumn: 2,
        },

    },
    divider: {
        height: '12px',
        backgroundColor: '#f50057',
        filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))',
        marginTop: theme.spacing(2)
    },
    leaves: {
        zIndex: '100',
        position: 'absolute',
        top: 0,
        maxWidth: '50px',
        height: 'auto',
        minWidth: '30px',
        [theme.breakpoints.down("sm")]: {
            width: 'calc(20px + 1.5vmax)'
        },
        animationDelay: '1s',
        animationName: '$leaf1Entrance',
        animationFillMode: 'both',
        animationDuration: '5000ms',
        transition: 'all 0.2s ease-in',
        filter: 'drop-shadow(0 0 0.1rem rgb(255, 187, 17))',
        '&:hover': {
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.5rem rgb(255, 187, 17))'
        },
    },
    "@keyframes leaf1Entrance": {
        "0%": {
            top: '-83%',
            transform: 'scale(-1, -1)',
        },
        "20%": {
            transform: 'scale(-1, -1) translateX(4vw) rotate(5deg)'
        },
        "40%": {
            transform: 'scale(-1, -1) translateX(-3vw) rotate(-7deg)'
        },
        "60%": {
            transform: 'scale(-1, -1) translateX(2vw) rotate(7deg)'
        },
        "100%": {
            transform: 'translateX(-2vw) scale(-1, -1) rotate(-5deg)',
            top: '-3%',
        },
    },
}));


function ProjectsPage(props) {
    const classes = useStyles();
    let title = useRef(null);
    let project = useRef(null);
    let video = useRef(null);
    let divider = useRef(null);
    let paragraph = useRef(null);

    useEffect(() => {
        gsap.from([title, video, project, divider, paragraph], {
            duration: 3,
            delay: 0.8,
            ease: "power3.out",
            y: 64,
            opacity: 0,
            stagger: {
                amount: 1
            }
        });
    }, [title, video, project, divider, paragraph])



    return <div className={classes.projectsPage}>
        <Typography ref={el => (title = el)} className={classes.title} variant="h6">projects</Typography>
        <div className={classes.grid}>
            <div ref={el => (video = el)} className={classes.trailer}>
                <iframe
                    title="trailer"
                    className={classes.video}
                    width="560" height="349"
                    src="https://www.youtube.com/embed/oL2LSEiPcsk">
                </iframe>
            </div>
            <div className={classes.projectTitleContainer}>
                <Typography ref={el => (project = el)} className={classes.projectTitle} variant="h6">Panda <br /> Express</Typography>
                <Divider ref={el => (divider = el)} className={classes.divider} variant="middle" />
            </div>
            <Typography ref={el => (paragraph = el)} className={`${classes.projectDescription} "projectParagraph"`} variant="caption">
                Play as Regis the panda in his journey to save the other last
                remaining member of his species in the side-scrolling runner, Panda Express.
                My personal contributions to the project included character designs,
                the animation system, cut scenes, user control options, scene transitions, and level design.
                    </Typography>
        </div>
    </div>
}

export default ProjectsPage;
