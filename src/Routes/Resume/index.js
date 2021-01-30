import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import neonLeafPink from 'Assets/neon-leaf.png'
import neonLeafYellow from 'Assets/neon-leaf-yellow.png'
import neonLeafBlue from 'Assets/neon-leaf-blue.png'
import Sign from 'Components/ResumeSign';
import bulletBlue from 'Assets/bullet-blue.png';
import bulletPink from 'Assets/bullet-pink.png';
import bulletYellow from 'Assets/bullet-yellow.png';


const styles = theme => {
    return {
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
            marginTop: theme.spacing(14),
            visibility: 'hidden',
            [theme.breakpoints.down("xs")]: {
                marginTop: theme.spacing(8),
            },
        },
        content: {
            display: 'grid',
            height: '100%',
            gridTemplateColumns: '230px 230px 230px',
            gridTemplateRows: 'auto 3fr auto',
            alignContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: theme.spacing(4),
            [theme.breakpoints.down("xs")]: {
                gridTemplateColumns: '1fr 1fr 1fr',
                paddingTop: 0,
                marginTop: '-190px',
                gridTemplateRows: 'auto 110px 135px 110px',
                paddingRight: theme.spacing(1),
                paddingLeft: theme.spacing(1)
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
            fontWeight: 400,
            animation: '$fadein 2s',
            animationDelay: '8s',
            opacity: 0,
            animationFillMode: 'both',
            transition: 'all .2s ease-in-out',
            position: 'relative',
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
                background: 'none repeat scroll 0 0 transparent',
                bottom: '-20%',
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
            [theme.breakpoints.down("xs")]: {
                textAlign: 'center'
            },
        },
        downloadIcon: {
            color: 'black',
            marginLeft: theme.spacing(1) / 2
        },
        list: {
            textAlign: 'left',
            fontSize: 'calc(4px + 1.5vmin) !important',
            alignSelf: 'start',
            marginTop: theme.spacing(7),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
            [theme.breakpoints.down("xs")]: {
                marginTop: 0,
                padding: 0,
            },
        },
        education: {
            gridRow: 1,
            gridColumn: 1,
            paddingTop: '30px',
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
            [theme.breakpoints.down("xs")]: {
                justifySelf: 'center'
            },
        },
        info: {
            marginRight: theme.spacing(1),
            [theme.breakpoints.down("xs")]: {
                marginRight: theme.spacing(1) / 2,
            },
        },
        educationInfo: {
            gridRow: 2,
            gridColumn: 1,
            gridColumnStart: 1,
            gridColumnEnd: '4',
            justifySelf: 'center',
            alignSelf: 'start',
            opacity: 0,
            animationName: '$hidden',
            animationDuration: '8s',
            transition: 'all 0.3s ease-in',
            [theme.breakpoints.down("xs")]: {
                marginTop: theme.spacing(16)
            },
        },
        educationList: {
            flexDirection: 'column',

            '&:before': {
                backgroundImage: `url(${bulletYellow})`,
                alignSelf: 'center',
                height: `${theme.spacing(3)}px !important`
            },
            '&:hover:before': {
                filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
            },
        },
        experience: {
            gridRow: 1,
            gridColumn: 2,
            paddingTop: '30px',
            transition: 'all 0.5s ease-in',
            '&:hover ~ $experienceInfo': {
                transition: 'all 0.5s ease-in',
                opacity: 1
            },
            '&:hover > $heading::after': {
                width: '100%',
                left: 0
            },
        },
        experienceInfo: {
            opacity: 0,
            animationName: '$hidden',
            animationDuration: '10s',
            transition: 'all 0.3s ease-in',
        },
        experienceList: {
            flexDirection: 'column',
            '&:before': {
                backgroundImage: `url(${bulletPink})`,
                alignSelf: 'center',
                height: `${theme.spacing(3)}px !important`
            },
            '&:hover:before': {
                filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))'
            },
            [theme.breakpoints.down("xs")]: {
                width: '78vw'
            },
        },
        job1: {
            gridRow: 2,
            gridColumn: 1,
            [theme.breakpoints.down("xs")]: {
                gridColumnStart: 1,
                gridColumnEnd: '4',
            },
        },
        job2: {
            gridRow: 2,
            gridColumn: 2,
            [theme.breakpoints.down("xs")]: {
                gridRow: 3,
                gridColumnStart: 1,
                gridColumnEnd: '4',
            },
        },
        job3: {
            gridRow: 2,
            gridColumn: 3,
            [theme.breakpoints.down("xs")]: {
                gridRow: 4,
                gridColumnStart: 1,
                gridColumnEnd: '4',
            },
        },
        skill1: {
            gridRow: 2,
            gridColumn: 1,
        },
        skill2: {
            gridRow: 2,
            gridColumn: 2,
        },
        skill3: {
            gridRow: 2,
            gridColumn: 3,
        },
        skills: {
            gridRow: 1,
            gridColumn: 3,
            paddingTop: '30px',
            justifySelf: 'start',
            marginLeft: theme.spacing(1),
            transition: 'all 0.5s ease-in',
            '&:hover ~ $skillsInfo': {
                transition: 'all 0.5s ease-in',
                opacity: 1
            },
            '&:hover > $heading::after': {
                width: '100%',
                left: 0
            },
            [theme.breakpoints.down("xs")]: {
                justifySelf: 'center',
                '&:hover ~ $skillsMobile': {
                    transition: 'all 0.5s ease-in',
                    opacity: 1
                },
            },
        },
        skillsInfo: {
            opacity: 0,
            animationName: '$hidden',
            animationDuration: '10s',
            transition: 'all 0.3s ease-in',
            [theme.breakpoints.down("xs")]: {
                // marginTop: theme.spacing(6), 
                opacity: '0 !important'
            },
        },
        skillsText: {
            textAlign: 'start',
        },
        listItem: {
            listStyle: 'none',
            display: 'flex',
            marginBottom: theme.spacing(2),
            '&:before': {
                content: '" "',
                display: 'inline-block',
                height: '11px',
                maxWidth: '25px',
                width: '1vw',
                minWidth: '10px',
                padding: theme.spacing(1),
                marginRight: theme.spacing(1),
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                transition: 'all 0.2s ease-in',
                [theme.breakpoints.down("xs")]: {
                    marginBottom: -theme.spacing(1)
                },
            },
            '&:hover:before': {
                transition: 'all 0.2s ease-in',
            },
            [theme.breakpoints.down("xs")]: {
                marginTop: theme.spacing(2),
            },
        },
        skillsList: {
            '&:before': {
                backgroundImage: `url(${bulletBlue})`,
                [theme.breakpoints.down("xs")]: {
                    alignSelf: 'center',
                    height: `${theme.spacing(3)}px !important`
                },
            },
            '&:hover:before': {
                filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
            },
            [theme.breakpoints.down("xs")]: {
                flexDirection: 'column',
            },
        },
        leaves: {
            position: 'absolute'
        },
        leaf1: {
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
            [theme.breakpoints.down("xs")]: {
                animationName: '$leaf1EntranceMobile',
            },
        },
        leaf2: {
            animationDelay: '3s',
            animationName: '$leaf2Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.1rem rgb(216, 88, 168))',
            '&:hover': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))'
            },
            [theme.breakpoints.down("xs")]: {
                animationName: '$leaf2EntranceMobile',
            },
        },
        leaf3: {
            animationDelay: '2s',
            animationName: '$leaf3Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.1rem rgb(2, 208, 194))',
            '&:hover': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.5rem rgb(2, 208, 194))'
            },
            [theme.breakpoints.down("xs")]: {
                animationName: '$leaf3EntranceMobile',
            },
        },
        break: {
            flexBasis: '100%',
            height: 0
        },
        biggerBody2Font: {
            [theme.breakpoints.down("xs")]: {
                fontSize: 'calc(16px) !important',
            },
        },
        biggerCaptionFont: {
            [theme.breakpoints.down("xs")]: {
                fontSize: 'calc(14px) !important',
            },
        },
        experienceTitle: {
            height: '100px',
            [theme.breakpoints.down("xs")]: {
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
                // display: 'flex'
                // fontSize: 'calc(3px + 2.5vmin) !important',
            },
            // height: 'auto',
            // padding: '9px',
            // backgroundColor: '#1212118c',
            // borderRadius: '11px'
        },
        skillsMobile: {
            opacity: 0,
            animationName: '$hidden',
            animationDuration: '10s',
            transition: 'all 0.3s ease-in',
            marginTop: theme.spacing(6),
            gridRow: 2,
            gridColumn: 1,
            gridColumnStart: 1,
            gridColumnEnd: '4',
            justifySelf: 'center',
            alignSelf: 'start',
            [theme.breakpoints.down("xs")]: {
                marginTop: theme.spacing(16)
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
        "@keyframes leaf1EntranceMobile": {
            "0%": {
                top: '-100px',
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
                transform: 'translateX(-7vw) scale(-1, -1) rotate(-5deg)',
                top: '14%',
            },
        },
        "@keyframes leaf2EntranceMobile": {
            "0%": {
                top: '-100px',
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
                top: '14%',
                transform: 'translateX(-8vw)'
            },
        },
        "@keyframes leaf3EntranceMobile": {
            "0%": {
                top: '-100px',
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
                top: '14%',
                transform: 'scaleY(-1) translateX(-9vw)',
            },
        },
        "@keyframes leaf1Entrance": {
            "0%": {
                top: '-100px',
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
                top: '29%',
            },
        },
        "@keyframes leaf2Entrance": {
            "0%": {
                top: '-100px',
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
                top: '29%',
                transform: 'translateX(-2vw)'
            },
        },
        "@keyframes leaf3Entrance": {
            "0%": {
                top: '-100px',
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
                top: '29%',
                transform: 'scaleY(-1) translateX(-2vw)',
            },
        },
    };
};


class ResumePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography className={classes.title} variant="h6">resume</Typography>
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
                        <Typography style={{textAlign: 'center'}} className={`${classes.info} ${classes.biggerBody2Font}`} variant="body2">
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

                <div className={classes.skills}>
                    <Typography className={classes.heading} variant="body1" >
                        technical skills
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
                        <Typography className={`${classes.biggerBody2Font} ${classes.listItem}`}
                            style={{ textAlign: 'center', marginTop: 0, marginLeft: '-32px' }}
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
                                Intern
                </Typography>
                            <Typography style={{textAlign: 'center'}} className={`${classes.info} ${classes.biggerBody2Font}`} variant="caption">
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
}

export default withStyles(styles)(ResumePage);
