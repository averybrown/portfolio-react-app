import React, { useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import neonLeafPink from 'Assets/neon-leaf.png';
import neonLeafYellow from 'Assets/neon-leaf-yellow.png';
import neonLeafBlue from 'Assets/neon-leaf-blue.png';
import neonLeafGreen from 'Assets/neon-leaf-green.png';
import Sign from 'Components/ResumeSign';
import bulletPink from 'Assets/bullet-pink.png';
import bulletYellow from 'Assets/bullet-yellow.png';
import bulletGreen from 'Assets/bullet-point-green.png';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';



const useStyles = makeStyles(theme => ({
    resumePage: {
        height: '100%',
        width: '100%',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
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
    },
    content: {
        display: 'grid',
        height: '100%',
        position: 'absolute',
        marginTop: '28vh',
        minWidth: '250px',
        maxHeight: '50vh',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'fit-content(100px) 14% 30% 24%',
        maxWidth: '58vw',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.down("xs")]: {
            paddingTop: 0,
            maxHeight: '54vh',
            maxWidth: '95vw',
            marginTop: '16vh',
            paddingRight: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            gridTemplateColumns: 'repeat(3, 1fr) !important',
            gridTemplateRows: 'fit-content(100px) 24% 30% 24%',
        },
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: 'repeat(3, minmax(max-content, 1fr))',
        },
        [theme.breakpoints.between("sm", 'md')]: {
            marginTop: '28vh',
            maxHeight: '72vh',
            height: '72vh',
            gridTemplateRows: 'fit-content(100px) 24% 24% 24%',
            paddingTop: 0,
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '32vh',
            maxWidth: '58vw'
        },
        [theme.breakpoints.between("md", 'lg')]: {
            marginTop: '30vh',
            maxHeight: '60vh'
        },
    },
    resumeLink: {
        cursor: 'pointer',
        pointerEvents: 'auto',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    heading: {
        textAlign: 'start',
        fontWeight: 300,
        lineHeight: 2,
        animation: '$fadein 2s',
        animationDelay: '6000ms',
        opacity: 0,
        animationFillMode: 'both',
        transition: 'all .2s ease-in-out',
        position: 'relative',
        paddingTop: 'clamp(calc(9px + 2vmin), calc(9px + 1vmin), 20%)',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all .2s ease-in-out',
        },
        '$education &:hover ~ $leaf1': {
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
        },
        '$skills &:hover ~ $leaf3': {
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
        },
        '$experience &:hover ~ $leaf2': {
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.4rem rgb(216, 88, 168))'
        },
        '&:hover:after': {
            width: '100%',
            left: 0
        },
        '&:after': {
            // background: 'none repeat scroll 0 0 transparent',
            bottom: '-2%',
            content: "' '",
            display: 'block',
            height: '2px',
            left: '60%',
            position: 'absolute',
            background: '#ddd',
            transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
            width: 0
        },
    },
    body: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    date: {
        textAlign: 'end',
        alignSelf: 'flex-end',
        [theme.breakpoints.down("md")]: {
            textAlign: 'center', 
            alignSelf: 'center'
        },
    },
    downloadIcon: {
        color: 'black',
        marginLeft: theme.spacing(1) / 2
    },
    list: {
        textAlign: 'left',
        fontSize: 'calc(4px + 1.5vmin) !important',
        alignSelf: 'flex-start',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            padding: 0,
        },

    },
    education: {
        gridRow: 1,
        gridColumn: 1,
        justifySelf: 'end',
        marginRight: theme.spacing(1),
        transition: 'all 0.5s ease-in',
        '&:hover ~ $educationInfo': {
            transition: 'all 0.5s ease-in',
            opacity: 1
        },
        '&:hover > $heading::after': {
            width: '100%',
            left: 0
        },
        '&:hover > $heading': {
            transform: 'scale(1.1)',
            transition: 'all .2s ease-in-out',
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(1)
        },
        [theme.breakpoints.down("xs")]: {
            justifySelf: 'center',

        },
    },
    info: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            marginRight: theme.spacing(1) / 2,
        },
    },
    educationInfo: {
        gridRow: 3,
        gridColumnStart: 1,
        gridColumnEnd: 4,
        justifySelf: 'center',
        alignSelf: 'flex-start',
        opacity: 0,
        marginLeft: 0,
        animationName: '$hidden',
        animationDuration: '6s',
        transition: 'all 0.3s ease-in',
        [theme.breakpoints.down("md")]: {
            marginTop: '-5vh',
            marginLeft: '16px'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '0px !important',
            marginLeft: '0px !important'
        },
        [theme.breakpoints.between("md", 'lg')]: {
            // marginTop: '-8vh'
        },
    },
    educationList: {
        flexDirection: 'column',

        '&:before': {
            backgroundImage: `url(${bulletYellow})`,
            alignSelf: 'center',
        },
        '&:hover:before': {
            filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
        },
    },
    experience: {
        gridRow: 1,
        gridColumn: 2,
        transition: 'all 0.5s ease-in',
        '&:hover ~ $experienceInfo': {
            transition: 'all 0.5s ease-in',
            opacity: 1
        },
        '&:hover > $heading::after': {
            width: '100%',
            left: 0
        },
        '&:hover > $heading': {
            transform: 'scale(1.1)',
            transition: 'all .2s ease-in-out',
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(1),
        },
    },
    experienceInfo: {
        opacity: 0,
        animationName: '$hidden',
        animationDuration: '6s',
        transition: 'all 0.3s ease-in',
        marginLeft: 0,
        [theme.breakpoints.down("md")]: {
            marginLeft: '16px',
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    experienceList: {
        flexDirection: 'column',
        '&:before': {
            backgroundImage: `url(${bulletPink})`,
            alignSelf: 'center',
        },
        '&:hover:before': {
            filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))'
        },
        [theme.breakpoints.down("sm")]: {
            width: '78vw'
        },
    },
    job1: {
        gridRow: 3,
        gridColumn: 1,
        [theme.breakpoints.down("md")]: {
            gridRow: 2,
            gridColumnStart: 1,
            gridColumnEnd: '4',
        },
    },
    job2: {
        gridRow: 3,
        gridColumn: 2,
        [theme.breakpoints.down("md")]: {
            gridRow: 3,
            gridColumnStart: 1,
            gridColumnEnd: '4',
        },
    },
    job3: {
        gridRow: 3,
        gridColumn: 3,
        [theme.breakpoints.down("md")]: {
            gridRow: 4,
            gridColumnStart: 1,
            gridColumnEnd: '4',
        },
    },
    skill1: {
        gridRow: 3,
        gridColumn: 1,
    },
    skill2: {
        gridRow: 3,
        gridColumn: 2,
    },
    skill3: {
        gridRow: 3,
        gridColumn: 3,
    },
    skills: {
        gridRow: 1,
        gridColumn: 3,
        justifySelf: 'start',
        transition: 'all 0.5s ease-in',
        '&:hover ~ $skillsInfo': {
            transition: 'all 0.5s ease-in',
            opacity: 1
        },
        '&:hover > $heading::after': {
            width: '100%',
            left: 0
        },
        '&:hover > $heading': {
            transform: 'scale(1.1)',
            transition: 'all .2s ease-in-out',
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(1),
            marginBottom: theme.spacing(1),
            '&:hover ~ $skillsMobile': {
                transition: 'all 0.5s ease-in',
                opacity: 1
            },
        },
        [theme.breakpoints.down("xs")]: {
            justifySelf: 'center',

        },
    },

    skillsFullTitle: {
        opacity: 1,
        [theme.breakpoints.down("xs")]: {
            opacity: 0
        },
    },
    skillsInfo: {
        opacity: 0,
        animationName: '$hidden',
        animationDuration: '6s',
        transition: 'all 0.3s ease-in',
        marginLeft: 0,
        [theme.breakpoints.down("md")]: {
            opacity: '0 !important',
            marginLeft: '16px'
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    skillsText: {
        textAlign: 'start',
    },
    listItem: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        '&:before': {
            content: '" "',
            display: 'inline-block',
            maxWidth: '25px',
            width: '1vw',
            minWidth: '20px',
            padding: 0,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            transition: 'all 0.2s ease-in',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            height: `${theme.spacing(3)}px !important`, 
            [theme.breakpoints.down("xs")]: {
                marginTop: 0,
                marginBottom: 0
            },
        },
        '&:hover:before': {
            transition: 'all 0.2s ease-in',
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(3),
        },
    },
    skillsList: {
        marginBottom: 0,
        '&:before': {
            backgroundImage: `url(${bulletGreen})`,
            [theme.breakpoints.up("lg")]: {
                marginRight: theme.spacing(1),
                marginTop: '0.5vh'
            },
            [theme.breakpoints.down("md")]: {
                alignSelf: 'center',
            },
        },
        '&:hover:before': {
            filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up("lg")]: {
            marginBottom: theme.spacing(2),
            alignItems: 'start',
            height: '7vh'
        },
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
    },
    leaf1: {
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
    leaf2: {
        animationDelay: '1000ms',
        animationName: '$leaf2Entrance',
        animationFillMode: 'both',
        animationDuration: '5000ms',
        transition: 'all 0.2s ease-in',
        filter: 'drop-shadow(0 0 0.1rem rgb(216, 88, 168))',
        '&:hover': {
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))'
        },
    },
    leaf3: {
        animationDelay: '2000ms',
        animationName: '$leaf3Entrance',
        animationFillMode: 'both',
        animationDuration: '5000ms',
        transition: 'all 0.2s ease-in',
        filter: 'drop-shadow(0 0 0.1rem rgb(22, 220, 143))',
        '&:hover': {
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.5rem rgb(22, 220, 143))'
        },
    },
    break: {
        flexBasis: '100%',
        height: 0
    },
    biggerBody2Font: {
        [theme.breakpoints.down("xs")]: {
            // fontSize: 'calc(8px + 65%) !important',
            fontSize: '0.75rem !important',
            fontWeight: 400
        },
    },
    biggerCaptionFont: {
        [theme.breakpoints.down("xs")]: {
            // fontSize: 'calc(5px + 75%) !important',
            fontSize: '0.65rem !important',

        },
    },
    experienceTitle: {
        height: 'calc(14vh + 1vmax)',
        [theme.breakpoints.down("md")]: {
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column'
        },
    },
    skillsMobileTitle: {
        opacity: 0,
        [theme.breakpoints.down("xs")]: {
            opacity: 1
        },
    },
    skillsMobile: {
        opacity: 0,
        animationName: '$hidden',
        animationDuration: '6s',
        transition: 'all 0.3s ease-in',
        gridRowStart: 2,
        gridRowEnd: 5,
        gridColumnStart: 1,
        gridColumnEnd: 4,
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: '-12vh',
        [theme.breakpoints.down("md")]: {
            marginTop: '-12vh',
            marginLeft: '16px'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 0,
            marginLeft: 0
        },
        [theme.breakpoints.between("md", 'lg')]: {
            marginTop: '-8vh'
        },
    },
    skillsMobileText: {
        textAlign: 'center',
        marginTop: 0,
        width: '62vw',
        marginLeft: 0,
        fontWeight: 300,
        [theme.breakpoints.down("xs")]: {
            marginLeft: '-15px',
        },
    },

    "@keyframes hidden": {
        "from": { opacity: 0 },
        "to": { opacity: 0 }
    },
    "@keyframes fadein": {
        "from": { opacity: 0 },
        "to": { opacity: 1 }
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
            transform: 'translateX(-45%) scale(-1, -1) rotate(-5deg)',
            top: '-3%',
        },
    },
    "@keyframes leaf2Entrance": {
        "0%": {
            top: '-83%',
        },
        "20%": {
            transform: 'translateX(-2vw) rotate(-5deg)'
        },
        "40%": {
            transform: 'translateX(-5vw) rotate(8deg)'
        },
        "70%": {
            transform: 'translateX(1vw) rotate(-5deg)'
        },
        "100%": {
            top: '-3%',
            transform: 'translateX(-45%)'
        },
    },
    "@keyframes leaf3Entrance": {
        "0%": {
            top: '-83%',
        },
        "20%": {
            transform: 'scaleY(-1) translateX(-6vw) rotate(-5deg)'
        },
        "40%": {
            transform: 'scaleY(-1) translateX(2vw) rotate(8deg)',
        },
        "60%": {
            transform: 'scaleY(-1) translateX(-5vw) rotate(-5deg)'
        },
        "100%": {
            top: '-3%',
            transform: 'scaleY(-1) translateX(-45%)',
        },
    },
}
))


function ResumePage(props) {
    const classes = useStyles();
    let title = useRef(null);


    useEffect(() => {
        gsap.from([title], {
            duration: 0.8,
            delay: 0.8, 
            ease: "power3.out", 
            y: 64, 
            opacity: 0,
            display: 'none',
        })
    }, [title])


    return <div className={classes.resumePage}>
        <Typography ref={el => (title = el)} className={classes.title} variant="h6">resume</Typography>
        <Sign />
        <div className={classes.content}>
            <div className={classes.education}>

                <Typography className={classes.heading} variant="body1">
                    education
                </Typography>
                <img className={`${classes.leaf1} ${classes.leaves}`}
                    src={neonLeafYellow}
                    width='50px'
                    height='50px'
                    alt='leaf1' />
            </div>

            <ul className={`${classes.educationInfo} ${classes.list}`}>
                <li className={`${classes.educationList} ${classes.listItem}`}>
                    <Typography style={{ textAlign: 'center' }} className={`${classes.info} ${classes.biggerBody2Font}`} variant="body2">
                        Bachelor of Science in Computer Science
                </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography className={`${classes.info} ${classes.biggerCaptionFont}`} variant="caption">
                            Univerisity of British Columbia,
                </Typography>
                        <Typography className={`${classes.date} ${classes.biggerCaptionFont}`} variant="caption">
                            2015 - 2019
                </Typography>
                    </div>
                </li>
            </ul>

            <div className={`${classes.skills} ${classes.skillsFullTitle}`}>
                <Typography className={classes.heading} variant="body1" >
                    technical skills
                </Typography>
                <img className={`${classes.leaf3} ${classes.leaves}`}
                    src={neonLeafGreen}
                    width='50px'
                    height='50px'
                    alt='leaf' />
            </div>

            <div className={`${classes.skills} ${classes.skillsMobileTitle}`}>
                <Typography className={classes.heading} style={{ width: '130%' }} variant="body1" >
                    skills
                </Typography>
                <img className={`${classes.leaf3} ${classes.leaves}`}
                    src={neonLeafBlue}
                    width='50px'
                    height='50px'
                    alt='leaf' />
            </div>

            <ul className={`${classes.list} ${classes.skillsInfo} ${classes.skill1}`}>
                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        Java, JavaScript, Python, C++
                                </Typography>
                </li>


                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        Azure DevOps, GitHub
                                </Typography>
                </li>
                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        HTML, CSS, React.JS
                                </Typography>
                </li>

            </ul>
            <ul className={`${classes.list} ${classes.skillsInfo} ${classes.skill2}`}>
                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        Database Design and SQL
                                </Typography>
                </li>

                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        Google Analytics
                                </Typography>
                </li>
                <li style={{ visibility: 'hidden', opacity: 0 }} className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        HTML, CSS, React.JS
                                </Typography>
                </li>
            </ul>
            <ul className={`${classes.list} ${classes.skillsInfo} ${classes.skill3}`}>
                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        Photoshop, Figma, Invision
                                </Typography>
                </li>
                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        AWS development tools
                                </Typography>
                </li>

                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.biggerCaptionFont}`} variant="subtitle1">
                        Confluence
                                </Typography>
                </li>
            </ul>

            <ul className={`${classes.list} ${classes.skillsMobile}`}>
                <li className={`${classes.listItem} ${classes.skillsList}`}>
                    <Typography className={`${classes.skillsMobileText} ${classes.biggerBody2Font} ${classes.listItem}`}
                        variant="subtitle1">
                        Java, Javascript, Python, C++, HTML, CSS, React.JS, SQL,
                        Photoshop, Figma, Invision,
                        Google Analytics, Azure DevOps, GitHub, Confluence
                                </Typography>
                </li>
            </ul>

            <div className={classes.experience}>
                <Typography className={classes.heading}>
                    experience
                </Typography>
                <img className={`${classes.leaf2} ${classes.leaves}`}
                    src={neonLeafPink}
                    width='50px'
                    height='50px'
                    alt='leaf' />
            </div>

            <ul className={`${classes.job1} ${classes.list} ${classes.experienceInfo}`}>
                <li className={`${classes.listItem} ${classes.experienceList}`}>
                    <div className={classes.experienceTitle}>
                        <Typography className={`${classes.info} ${classes.biggerBody2Font}`} variant="body2">
                            Front-end Developer
                        </Typography>
                        <Typography className={`${classes.info} ${classes.biggerBody2Font}`} variant="caption">
                            Clotech
                        </Typography>
                    </div>
                    <div className={classes.break}></div>
                    <Typography className={`${classes.date} ${classes.biggerCaptionFont}`} variant="caption">
                        Sept. 2019 - April 2020
                        </Typography>
                </li>
            </ul>

            <ul className={`${classes.job2} ${classes.list} ${classes.experienceInfo}`}>
                <li className={`${classes.listItem} ${classes.experienceList}`}>
                    <div className={classes.experienceTitle}>

                        <Typography className={`${classes.info} ${classes.biggerBody2Font}`} variant="body2">
                            Summer Intern
                </Typography>
                        <Typography style={{ textAlign: 'center' }} className={`${classes.info} ${classes.biggerBody2Font}`} variant="caption">
                            Global Champions Equestrian Jumping Tour and League
                </Typography>
                    </div>
                    <div className={classes.break}></div>
                    <Typography className={`${classes.date} ${classes.biggerCaptionFont}`} variant="caption">
                        May 2018 - Aug. 2018
                </Typography>
                </li>
            </ul>

            <ul className={`${classes.job3} ${classes.list} ${classes.experienceInfo}`}>
                <li className={`${classes.listItem} ${classes.experienceList}`}>
                    <div className={classes.experienceTitle}>
                        <Typography className={`${classes.info} ${classes.biggerBody2Font}`} variant="body2">
                            Website Development Intern
                </Typography>
                        <Typography className={`${classes.info} ${classes.biggerBody2Font}`} variant="caption">
                            Treetrunk Group
                </Typography>
                    </div>
                    <div className={classes.break}></div>
                    <Typography className={`${classes.date} ${classes.biggerCaptionFont}`} variant="caption">
                        July 2017 - Aug. 2017
                </Typography>
                </li>
            </ul>
        </div>
    </div >
}

export default ResumePage;
